def cond(input):
    if input % 2 != 0:
        print "Weird"
    elif (input%2==0 and input in range(2,6) or input > 20):
        print "Not Weird"

cond(4)