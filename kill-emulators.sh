#!/bin/bash 

for device in `adb devices -l | tail -n +2 | cut -d" " -f 1 | cut -d"-" -f 2`; do
    echo "Killing $device"
    adb -s emulator-$device emu kill
done