with open('input.txt') as f:
    content = f.readlines()
# you may also want to remove whitespace characters like `\n` at the end of each line
content = [int(x.strip()) for x in content]

for x in content:
    for y in content:
        for z in content:
            if(x+y+z == 2020):
                print(x*y*z)
