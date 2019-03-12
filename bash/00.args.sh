#!/bin/bash

while getopts a:b:c: opt; do
    case $opt in
        a) AAA=${OPTARG};;
        b) BBB=${OPTARG};;
        c) CCC=${OPTARG};;
    esac
done

POUET=${1}

printf "Arguments are %s, %s and %s. Position is %s\n" "$AAA" "$BBB" "$CCC" "$pouet"
if [ -z "${AAA+xxx}" ]; then 
    echo "AAA not defined"
else
    echo "AAA defined"
fi