#! /bin/bash

read num1
read num2

sum=$((num1 + num2))
min=$((num1 - num2))
mul=$((num1 * num2))
div=$((num1 / num2))

echo $sum
echo $min
echo $mul
echo $div