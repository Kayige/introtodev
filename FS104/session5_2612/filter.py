a = [1,2,3,4]
b = [10,10,10,10]

sum = 0
for i in a:
    for j in b:
        sum = i+j
    print(sum)
    
c = map(lambda x,y:x+y, a,b)
print(list(c))