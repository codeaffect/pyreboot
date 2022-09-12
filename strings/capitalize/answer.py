def solve(s):
    x = s.split(' ')
    r =''
    for i in range(len(x)):
         r+=x[i].capitalize()
         if i==0:
            r+=' '
    return r

s = input()
result = solve(s)
print(result)