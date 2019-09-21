#!/bin/bash

function usage()
{
  echo "USAGE: db-grabber.sh <db_name>"
}

function die()
{
  MESSAGE="$@"

  echo -e "$MESSAGE"
  exit 1
}

if ! [ -x "$(command -v adb)" ]; then
  echo "Error: adb not found!"
  echo "Make sure it is configured correctly on your \$PATH"
  exit 1
fi

DB_NAME=$1

[ -z "$DB_NAME" ] && die "Error: database name not informed!\n$(usage)"

adb root || die "There was an error while running the 'adb root' command!"
adb remount || die "There was an error while running the 'adb remount' command!"
adb pull /data/data/com.spellfire/databases/$DB_NAME || die "There was an error while running the 'adb pull' command!"

if [ -x "$(command -v sqlitebrowser)" ]; then
  echo -n "Opening sqlitebrowser..."
  sqlitebrowser $DB_NAME &>/dev/null &
  echo "Done!"
fi

