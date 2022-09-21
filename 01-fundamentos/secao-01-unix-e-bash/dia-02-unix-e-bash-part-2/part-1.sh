#!/bin/bash

delay=2

# Exercise 1
cd unix_tests
sleep $delay

# Exercise 2
echo -e "Internet\nUnix\nBash" > skills2.txt
sleep $delay

# Exercise 3
echo -e "Javascript\nShell Script\nC\nCSS\nJava" >> skills2.txt
sleep $delay

# Exercise 4
cat skills2.txt | wc -l
sleep $delay

# Exercise 5
cat skills2.txt | sort | head -3 > top_skills.txt
sleep $delay

# Exercise 6
echo -e "Este e meu segundo dia de aula na Trybe\nHoje aprendi sobre Comandos de Input e Output\nPreciso organizar meu GitHub" > phrases2.txt
sleep $delay

# Exercise 7
grep -c br phrases2.txt
sleep $delay

# Exercise 8
grep -vc br phrases2.txt
sleep $delay

# Exercise 9
echo -e "Canasa\nAlemanha" >> phrases2.txt
sleep $delay

# Exercise 10
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep $delay

# Exercise 11
sort -o bunch_of_things.txt bunch_of_things.txt
sleep $delay