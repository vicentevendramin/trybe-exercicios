#!/bin/bash

delay=2

# Exercise 1
cd unix_tests
sleep $delay

# Exercise 2
ls -l
sleep $delay

# Exercise 3
chmod 666 bunch_of_things.txt
ls -l bunch_of_things.txt
sleep $delay

# Exercise 4
chmod a-w bunch_of_things.txt
ls -l bunch_of_things.txt
sleep $delay

# Exercise 5
chmod 644 bunch_of_things.txt
ls -l bunch_of_things.txt
sleep $delay