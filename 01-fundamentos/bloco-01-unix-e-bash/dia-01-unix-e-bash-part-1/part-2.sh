#!/bin/bash

delay=2

# Exercise 1
cd unix_tests
curl -s -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $delay

# Exercise 2
cat countries.txt
sleep $delay

# Exercise 3
less countries.txt
sleep $delay

# Exercise 5
grep "Brazil" countries.txt
sleep $delay

# Exercise 6
grep "brazil" countries.txt
echo -e "Olá tudo bem?\nHoje eu aprendi muito\nEstou amando a Trybe" >> phrases.txt
sleep $delay

# Exercise 7
grep -v "fox" phrases.txt
sleep $delay

# Exercise 8
cat phrases.txt | wc -w
sleep $delay

# Exercise 9
cat phrases.txt | wc -l
sleep $delay

# Exercise 10
touch empty.tbt empty.pdf
sleep $delay

# Exercise 11
ls -a
sleep $delay

# Exercise 12
ls -a *.txt
sleep $delay

# Exercise 13
ls -a *.{tbt,txt}
sleep $delay

# Exercise 14
man ls
sleep $delay

# Part 2 finished!