#! /bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments provided"
	exit 1
fi

for i; do
	mkdir -p ex$i
done
