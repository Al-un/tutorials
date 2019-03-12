#!/bin/bash

# Arguments:
#   -c {files count}    : number of dummy files to generate
#   -s {file size}      : dummy file size in kilobytes
#   -p {folder path}    : dummy files folder path

while getopts c:s:p: opt; do
  case $opt in
    c) FILES_COUNT=${OPTARG};;
    s) FILES_SIZE=${OPTARG};;
    p) FILES_PATH=${OPTARG};;
  esac
done

# If not defined, use default values: https://stackoverflow.com/a/230593/4906586
if [ -z "${FILES_COUNT+xxx}" ]; then FILES_COUNT=500; fi
if [ -z "${FILES_SIZE+xxx}" ]; then FILES_SIZE=500; fi
if [ -z "${FILES_PATH+xxx}" ]; then FILES_PATH=.; fi

# https://www.shellhacks.com/yes-no-bash-script-prompt-confirmation/
read -p "Script is going to generate $FILES_COUNT files of $FILES_SIZE kb in \"$FILES_PATH\": Continue? (y/n)" -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo Script cancelled by user
    echo
    exit 1
fi

if [ ! -d $FILES_PATH ]
then
    echo "ERROR: Folder $FILES_PATH does not exist. Script is cancelled"
    exit 1
fi

# generate files
# concatenate string https://stackoverflow.com/a/4181721/4906586
SIZE="KB"
for ((i=1; i <= $FILES_COUNT; i++))
do
    echo "Generating $FILES_PATH/test_file$i"
    fallocate -l "$FILES_SIZE$SIZE" "$FILES_PATH/test_file$i" 
done
