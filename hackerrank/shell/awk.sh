#https://www.hackerrank.com/challenges/awk-1/problem
awk '{if (NF!=4){print "Not all scores are available for " $1}}'

#http://hr.gs/edabcc 
awk '{if (($1>=50) && ($2>=50) && ($3>=50) && ($4>=50)) {print $1 " : Pass"} else {print $1 " : Fail"}}'
