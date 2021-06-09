#! /bin/bash

# https://www.hackerrank.com/challenges/text-processing-head-1/problem TOP of txt file
head -n 20

# https://www.hackerrank.com/challenges/text-processing-head-2/problem WORDS of text file
head -c 20

# https://www.hackerrank.com/challenges/text-processing-in-linux---the-middle-of-a-text-file/problem MIDDLE of text file
head -n 22 | tail -n +12