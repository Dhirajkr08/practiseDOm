def printPattern(n):
    for i in range(n, 0, -1):
        # Inner loop for appending asterisks to the string
        str_ = ''
        for k in range(i):
            str_ += '*'

        # Inner loop for appending spaces to the string
        for j in range(2 * (n - i)):
            str_ += ' '

        # Inner loop for appending asterisks to the string (on the right side)
        for k in range(i):
            str_ += '*'

        # Print the string for the current row
        print(str_)

def main():
    n = 5
    printPattern(n)

main()
