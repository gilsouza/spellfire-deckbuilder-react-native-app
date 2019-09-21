#!/bin/bash
# based on https://gist.github.com/blazsolar/5ab8f89bb4a8ace692395446789943fd#file-kill-emulators-expect

echo "Start emulator"

if [ -z "$1" ] ; then
    echo "Starting first device in 'emulator -list-avds'"
    device=$(emulator -list-avds | head -1)
else
    device=$1
fi

echo "Starting device $device"

emulator @$device -noaudio &
emaulatorPid=$!

echo "Wait for device"
until timeout 5s adb wait-for-device
do
    ps --pid $emaulatorPid &> /dev/null
    if [ $? -eq 0 ]; then
        echo "..."
    else
        exit 1
    fi
done

echo "Wait for boot"
# boot=$(adb shell getprop sys.boot_completed | tr -d '\r')
boot=$(adb shell getprop dev.bootcomplete | tr -d '\r')

while [ "$boot" != "1" ]; do
    sleep 2
    boot=$(adb shell getprop sys.boot_completed | tr -d '\r')
done

echo "Unlock device"
adb shell input keyevent 82

echo "Done"
