
def print_rangoli(size):
    base_num = ord('a') - 1
    alpha_num = base_num + size
    char_string = []
    
    for i in range(size*2-1):
        if i < size:
            char_string.append(str(chr(alpha_num - i)))
        else:
            char_string.pop()
             
        print(('-'.join(char_string + char_string[::-1][1:])).center((size*4-3), '-'))  

n=int(input())
print_rangoli(n)