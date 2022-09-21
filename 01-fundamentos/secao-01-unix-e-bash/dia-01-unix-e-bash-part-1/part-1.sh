#!/bin/bash

delay=2

# Exercise 1
mkdir unix_tests
cd unix_tests
sleep $delay

# Exercise 2
touch trybe.txt
sleep $delay

# Exercise 3
cp trybe.txt trybe_backup.txt
sleep $delay

# Exercise 4
mv trybe.txt trybe-2.txt
sleep $delay

# Exercise 5
mkdir backup
sleep $delay

# Exercise 6
mv trybe_backup.txt backup
sleep $delay

# Exercise 7
mkdir backup2
sleep $delay

# Exercise 8
mv backup/trybe_backup.txt backup2
sleep $delay

# Exercise 9
rmdir backup
sleep $delay

# Exercise 10
mv backup2 backup
sleep $delay

# Exercise 11
pwd
sleep $delay

# Exercise 12
ls
sleep $delay

# Exercise 13
clear
sleep $delay

# Exercise 14
echo -e "Internet\nUnix\nBash\nHTML\nCSS\nJavascript\nReact\nSQL" >> skills.txt
sleep $delay

# Exercise 15
cat skills.txt | head -5
sleep $delay

# Exercise 16
cat skills.txt | tail -5
sleep $delay

# Exercise 17
rm -rf *.txt
sleep $delay

# Part 1 finished!