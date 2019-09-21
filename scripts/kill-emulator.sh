#!/bin/bash 
# based on https://gist.github.com/blazsolar/5ab8f89bb4a8ace692395446789943fd#file-kill-emulators-expect

for device in `adb devices -l | tail -n +2 | cut -d" " -f 1 | cut -d"-" -f 2`; do
    echo "Killing $device"
    adb -s emulator-$device emu kill
done
