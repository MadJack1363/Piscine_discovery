#! /bin/bash

NB=$(ls -l | wc -l | awk '{print $1}') 
echo $((NB - 1))
