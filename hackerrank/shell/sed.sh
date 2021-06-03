sed -e 's/thy/{&}/gI' -> Replaces words starting with thy/Thy with {thy} or {Thy} respectively

awk '{print "****","****","****",$4}' -> Replaces credit card number with masked 12 digit numbers leaving the last 4
{Example: 1234 5678 9101 1234 -> **** **** **** 1234}