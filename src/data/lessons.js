export const pythonLessons = [
    // === BEGINNER LESSONS (1-10) ===
    {
        id: 1,
        title: "Hello, Python!",
        description: "Your first Python program. Learn how to print output to the console.",
        difficulty: "Beginner",
        category: "Basics",
        instructions: `
# Hello, Python! 👋

Welcome to your first Python lesson! Let's start with the most fundamental concept: printing output.

## What You'll Learn
- How to use the \`print()\` function
- Basic string syntax in Python

## Challenge
Write a program that prints "Hello, World!" to the console.

## Example Output
\`\`\`
Hello, World!
\`\`\`
    `,
        starterCode: `# Your first Python program
# Type your code below:

`,
        solution: `print("Hello, World!")`,
        hints: [
            "Use the print() function to display text",
            "Put your text inside quotes: \"Hello, World!\"",
            "Don't forget the parentheses after print"
        ],
        validate: (output) => {
            return output.toLowerCase().includes("hello") && output.toLowerCase().includes("world");
        }
    },
    {
        id: 2,
        title: "Variables & Data Types",
        description: "Store and manipulate data using variables.",
        difficulty: "Beginner",
        category: "Basics",
        instructions: `
# Variables & Data Types 📦

Variables are containers for storing data. Python has several built-in data types.

## What You'll Learn
- How to create variables
- Different data types: strings, integers, floats
- Variable naming conventions

## Challenge
Create three variables:
1. A variable called \`name\` with your name (string)
2. A variable called \`age\` with your age (integer)
3. A variable called \`height\` with your height in meters (float)

Then print all three variables.

## Example Output
\`\`\`
John
25
1.75
\`\`\`
    `,
        starterCode: `# Create your variables here

`,
        solution: `name = "John"
age = 25
height = 1.75

print(name)
print(age)
print(height)`,
        hints: [
            "Strings need quotes: name = \"John\"",
            "Numbers don't need quotes: age = 25",
            "Use print() to display each variable"
        ],
        validate: (output) => {
            const lines = output.trim().split('\n');
            return lines.length >= 3;
        }
    },
    {
        id: 3,
        title: "Basic Math Operations",
        description: "Perform calculations using Python's arithmetic operators.",
        difficulty: "Beginner",
        category: "Basics",
        instructions: `
# Basic Math Operations ➕➖✖️➗

Python can perform mathematical operations just like a calculator!

## What You'll Learn
- Addition (+), Subtraction (-), Multiplication (*), Division (/)
- Integer division (//), Modulo (%), Exponentiation (**)

## Challenge
Calculate and print:
1. The sum of 15 and 27
2. The product of 8 and 9
3. 100 divided by 4
4. 2 to the power of 10

## Example Output
\`\`\`
42
72
25.0
1024
\`\`\`
    `,
        starterCode: `# Perform your calculations here

`,
        solution: `print(15 + 27)
print(8 * 9)
print(100 / 4)
print(2 ** 10)`,
        hints: [
            "Use + for addition, * for multiplication",
            "Use / for division, ** for exponentiation",
            "Print each result on a new line"
        ],
        validate: (output) => {
            return output.includes("42") || output.includes("72") || output.includes("1024");
        }
    },
    {
        id: 4,
        title: "String Formatting",
        description: "Learn to combine variables and text using f-strings.",
        difficulty: "Beginner",
        category: "Strings",
        instructions: `
# String Formatting 🎨

F-strings allow you to insert variables directly into strings!

## What You'll Learn
- F-string syntax
- Combining text and variables
- String concatenation

## Challenge
Create variables for a person's name and age, then print:
"My name is [name] and I am [age] years old."

## Example Output
\`\`\`
My name is Alice and I am 25 years old.
\`\`\`
    `,
        starterCode: `# Create your variables and format the string

`,
        solution: `name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")`,
        hints: [
            "Use f before the quotes: f\"text {variable}\"",
            "Put variables inside curly braces: {name}",
            "Don't forget the f at the start!"
        ],
        validate: (output) => {
            return output.toLowerCase().includes("name") && output.toLowerCase().includes("old");
        }
    },
    {
        id: 5,
        title: "User Input",
        description: "Get input from users to make interactive programs.",
        difficulty: "Beginner",
        category: "Basics",
        instructions: `
# User Input 💬

Note: In this environment, we'll simulate user input by setting a variable directly.

## What You'll Learn
- The input() function concept
- Working with user data
- Type conversion

## Challenge
Simulate getting a user's name and age, then print a personalized greeting.

## Example Code
\`\`\`python
name = "Sarah"  # Simulating input
age = 30  # Simulating input
print(f"Hello, {name}! You are {age} years old.")
\`\`\`
    `,
        starterCode: `# Simulate user input here

`,
        solution: `name = "Sarah"
age = 30
print(f"Hello, {name}! You are {age} years old.")`,
        hints: [
            "Assign values to variables to simulate input",
            "Use f-strings to combine the values",
            "Print a friendly message"
        ],
        validate: (output) => {
            return output.toLowerCase().includes("hello") || output.length > 0;
        }
    },
    {
        id: 6,
        title: "Conditional Statements",
        description: "Make decisions in your code using if/else statements.",
        difficulty: "Beginner",
        category: "Control Flow",
        instructions: `
# Conditional Statements 🤔

Conditional statements allow your program to make decisions.

## What You'll Learn
- if, elif, else statements
- Comparison operators (==, !=, <, >, <=, >=)
- Boolean logic

## Challenge
Create a variable \`temperature\` and print different messages:
- "Freezing!" if < 0
- "Cold" if 0-15
- "Nice" if 15-25
- "Hot!" if > 25

## Example Output (temperature = 20)
\`\`\`
Nice
\`\`\`
    `,
        starterCode: `# Create your temperature variable and conditions

temperature = 20

`,
        solution: `temperature = 20

if temperature < 0:
    print("Freezing!")
elif temperature < 15:
    print("Cold")
elif temperature <= 25:
    print("Nice")
else:
    print("Hot!")`,
        hints: [
            "Start with if, then use elif for additional conditions",
            "Use < and > to compare numbers",
            "Don't forget the colon (:) and indentation!"
        ],
        validate: (output) => {
            return output.length > 0;
        }
    },
    {
        id: 7,
        title: "Lists Basics",
        description: "Create and work with lists of items.",
        difficulty: "Beginner",
        category: "Data Structures",
        instructions: `
# Lists Basics 📝

Lists store multiple items in a single variable.

## What You'll Learn
- Creating lists
- Accessing list items
- List length

## Challenge
Create a list of 5 colors, then:
1. Print the entire list
2. Print the first color
3. Print the last color
4. Print how many colors there are

## Example Output
\`\`\`
['red', 'blue', 'green', 'yellow', 'purple']
red
purple
5
\`\`\`
    `,
        starterCode: `# Create your list of colors

`,
        solution: `colors = ['red', 'blue', 'green', 'yellow', 'purple']
print(colors)
print(colors[0])
print(colors[-1])
print(len(colors))`,
        hints: [
            "Create a list with square brackets: [item1, item2, ...]",
            "Access first item with [0], last with [-1]",
            "Use len() to get the number of items"
        ],
        validate: (output) => {
            return output.includes("[") || output.includes("5") || output.length > 0;
        }
    },
    {
        id: 8,
        title: "For Loops",
        description: "Repeat actions and iterate through lists.",
        difficulty: "Beginner",
        category: "Control Flow",
        instructions: `
# For Loops 🔁

For loops let you repeat code and iterate through lists.

## What You'll Learn
- for loop syntax
- Iterating through lists
- Using enumerate()

## Challenge
Create a list of fruits and print each with a number:
1. Apple
2. Banana
(etc.)

## Example Output
\`\`\`
1. Apple
2. Banana
3. Orange
\`\`\`
    `,
        starterCode: `# Create your list and loop

`,
        solution: `fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"]

for i, fruit in enumerate(fruits, 1):
    print(f"{i}. {fruit}")`,
        hints: [
            "Use enumerate(list, 1) to get both index and item",
            "Loop syntax: for item in list:",
            "Use f-strings to format the output"
        ],
        validate: (output) => {
            return output.includes("1.") && output.includes("2.");
        }
    },
    {
        id: 9,
        title: "While Loops",
        description: "Create loops that run while a condition is true.",
        difficulty: "Beginner",
        category: "Control Flow",
        instructions: `
# While Loops ♾️

While loops repeat code as long as a condition is true.

## What You'll Learn
- while loop syntax
- Loop control with counters
- Breaking out of loops

## Challenge
Print numbers from 1 to 5 using a while loop.

## Example Output
\`\`\`
1
2
3
4
5
\`\`\`
    `,
        starterCode: `# Create your while loop

`,
        solution: `count = 1
while count <= 5:
    print(count)
    count += 1`,
        hints: [
            "Start with a counter variable: count = 1",
            "Use while count <= 5:",
            "Don't forget to increment the counter!"
        ],
        validate: (output) => {
            return output.includes("1") && output.includes("5");
        }
    },
    {
        id: 10,
        title: "Functions Basics",
        description: "Create reusable blocks of code with functions.",
        difficulty: "Beginner",
        category: "Functions",
        instructions: `
# Functions 🔧

Functions are reusable blocks of code.

## What You'll Learn
- Defining functions with \`def\`
- Function parameters
- Return values

## Challenge
Create a function \`greet(name)\` that returns "Hello, [name]!"
Then call it and print the result.

## Example Output
\`\`\`
Hello, Alice!
\`\`\`
    `,
        starterCode: `# Define your function here

`,
        solution: `def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))`,
        hints: [
            "Define with: def function_name(parameters):",
            "Use return to send back a value",
            "Call the function with: greet(\"name\")"
        ],
        validate: (output) => {
            return output.toLowerCase().includes("hello");
        }
    },

    // === INTERMEDIATE LESSONS (11-20) ===
    {
        id: 11,
        title: "List Methods",
        description: "Modify lists with built-in methods.",
        difficulty: "Intermediate",
        category: "Data Structures",
        instructions: `
# List Methods 🛠️

Lists have many useful methods to add, remove, and modify items.

## What You'll Learn
- append(), remove(), pop()
- sort(), reverse()
- List manipulation

## Challenge
Create an empty list, add 3 numbers, remove one, then print the final list.

## Example Output
\`\`\`
[10, 30]
\`\`\`
    `,
        starterCode: `# Work with list methods

`,
        solution: `numbers = []
numbers.append(10)
numbers.append(20)
numbers.append(30)
numbers.remove(20)
print(numbers)`,
        hints: [
            "Use append() to add items",
            "Use remove() to delete a specific value",
            "Start with an empty list: []"
        ],
        validate: (output) => {
            return output.includes("[") && output.includes("]");
        }
    },
    {
        id: 12,
        title: "Dictionaries",
        description: "Store data in key-value pairs.",
        difficulty: "Intermediate",
        category: "Data Structures",
        instructions: `
# Dictionaries 📚

Dictionaries store data as key-value pairs.

## What You'll Learn
- Creating dictionaries
- Accessing values by key
- Adding and updating entries

## Challenge
Create a dictionary with person info (name, age, city), then print each value.

## Example Output
\`\`\`
Alice
30
New York
\`\`\`
    `,
        starterCode: `# Create your dictionary

`,
        solution: `person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(person["name"])
print(person["age"])
print(person["city"])`,
        hints: [
            "Use curly braces: {\"key\": \"value\"}",
            "Access values with: dict[\"key\"]",
            "Separate entries with commas"
        ],
        validate: (output) => {
            const lines = output.trim().split('\n');
            return lines.length >= 3;
        }
    },
    {
        id: 13,
        title: "String Methods",
        description: "Manipulate text with string methods.",
        difficulty: "Intermediate",
        category: "Strings",
        instructions: `
# String Methods ✂️

Strings have many useful methods for text manipulation.

## What You'll Learn
- upper(), lower(), title()
- strip(), replace()
- split(), join()

## Challenge
Create a string and demonstrate 3 different string methods.

## Example Output
\`\`\`
HELLO WORLD
hello world
Hello World
\`\`\`
    `,
        starterCode: `# Use string methods

`,
        solution: `text = "hello world"
print(text.upper())
print(text.lower())
print(text.title())`,
        hints: [
            "Use .upper() to make uppercase",
            "Use .title() for Title Case",
            "Call methods with: string.method()"
        ],
        validate: (output) => {
            return output.length > 0;
        }
    },
    {
        id: 14,
        title: "List Comprehensions",
        description: "Create lists in a concise, Pythonic way.",
        difficulty: "Intermediate",
        category: "Advanced Techniques",
        instructions: `
# List Comprehensions 🚀

List comprehensions provide a concise way to create lists.

## What You'll Learn
- List comprehension syntax
- Filtering with conditions
- Transforming data

## Challenge
Create a list of squares of numbers 1-10 using a list comprehension.

## Example Output
\`\`\`
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
\`\`\`
    `,
        starterCode: `# Create a list comprehension

`,
        solution: `squares = [x**2 for x in range(1, 11)]
print(squares)`,
        hints: [
            "Syntax: [expression for item in iterable]",
            "Use range(1, 11) for numbers 1-10",
            "Square with x**2"
        ],
        validate: (output) => {
            return output.includes("100") || output.includes("[");
        }
    },
    {
        id: 15,
        title: "Functions with Multiple Parameters",
        description: "Create functions that accept multiple inputs.",
        difficulty: "Intermediate",
        category: "Functions",
        instructions: `
# Functions with Multiple Parameters 🎯

Functions can accept multiple parameters to make them more flexible.

## What You'll Learn
- Multiple parameters
- Default parameter values
- Return multiple values

## Challenge
Create a function \`calculate_area(length, width)\` that returns the area of a rectangle.

## Example Output
\`\`\`
50
\`\`\`
    `,
        starterCode: `# Create your function

`,
        solution: `def calculate_area(length, width):
    return length * width

area = calculate_area(10, 5)
print(area)`,
        hints: [
            "Define parameters in parentheses: (param1, param2)",
            "Return the calculation result",
            "Call with two values: function(10, 5)"
        ],
        validate: (output) => {
            return output.includes("50") || output.length > 0;
        }
    },
    {
        id: 16,
        title: "Exception Handling",
        description: "Handle errors gracefully with try/except.",
        difficulty: "Intermediate",
        category: "Error Handling",
        instructions: `
# Exception Handling 🛡️

Try/except blocks let you handle errors without crashing.

## What You'll Learn
- try/except syntax
- Catching specific errors
- Error messages

## Challenge
Try to divide 10 by 0 and catch the error, printing a friendly message.

## Example Output
\`\`\`
Error: Cannot divide by zero!
\`\`\`
    `,
        starterCode: `# Use try/except

`,
        solution: `try:
    result = 10 / 0
    print(result)
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")`,
        hints: [
            "Put risky code inside try:",
            "Use except to catch errors",
            "ZeroDivisionError is the specific error type"
        ],
        validate: (output) => {
            return output.toLowerCase().includes("error") || output.toLowerCase().includes("cannot");
        }
    },
    {
        id: 17,
        title: "Nested Loops",
        description: "Use loops within loops for complex patterns.",
        difficulty: "Intermediate",
        category: "Control Flow",
        instructions: `
# Nested Loops 🔄

Loops inside loops let you create patterns and work with 2D data.

## What You'll Learn
- Nested loop syntax
- Creating patterns
- Working with rows and columns

## Challenge
Print a 3x3 grid of asterisks using nested loops.

## Example Output
\`\`\`
* * *
* * *
* * *
\`\`\`
    `,
        starterCode: `# Create nested loops

`,
        solution: `for i in range(3):
    for j in range(3):
        print("*", end=" ")
    print()`,
        hints: [
            "Outer loop for rows, inner loop for columns",
            "Use end=' ' to stay on the same line",
            "Use print() alone to move to next line"
        ],
        validate: (output) => {
            return output.includes("*");
        }
    },
    {
        id: 18,
        title: "Lambda Functions",
        description: "Create small anonymous functions.",
        difficulty: "Intermediate",
        category: "Functions",
        instructions: `
# Lambda Functions ⚡

Lambda functions are small, one-line anonymous functions.

## What You'll Learn
- Lambda syntax
- Using lambdas with map(), filter()
- When to use lambda vs def

## Challenge
Create a lambda function that doubles a number, then use it to double 5.

## Example Output
\`\`\`
10
\`\`\`
    `,
        starterCode: `# Create a lambda function

`,
        solution: `double = lambda x: x * 2
print(double(5))`,
        hints: [
            "Syntax: lambda parameters: expression",
            "No need for return keyword",
            "Assign to a variable or use inline"
        ],
        validate: (output) => {
            return output.includes("10");
        }
    },
    {
        id: 19,
        title: "Working with Sets",
        description: "Use sets for unique collections and set operations.",
        difficulty: "Intermediate",
        category: "Data Structures",
        instructions: `
# Sets 🎲

Sets are unordered collections of unique items.

## What You'll Learn
- Creating sets
- Set operations (union, intersection, difference)
- Removing duplicates

## Challenge
Create two sets and find their intersection (common elements).

## Example Output
\`\`\`
{3, 4, 5}
\`\`\`
    `,
        starterCode: `# Work with sets

`,
        solution: `set1 = {1, 2, 3, 4, 5}
set2 = {3, 4, 5, 6, 7}
common = set1 & set2
print(common)`,
        hints: [
            "Create sets with curly braces: {1, 2, 3}",
            "Use & for intersection",
            "Sets automatically remove duplicates"
        ],
        validate: (output) => {
            return output.includes("{") || output.includes("}");
        }
    },
    {
        id: 20,
        title: "File Operations (Simulated)",
        description: "Learn about reading and writing files.",
        difficulty: "Intermediate",
        category: "File I/O",
        instructions: `
# File Operations 📄

Note: We'll simulate file operations with strings.

## What You'll Learn
- File operation concepts
- Reading and writing data
- String manipulation

## Challenge
Create a string representing file content, split it into lines, and print each line.

## Example Output
\`\`\`
Line 1
Line 2
Line 3
\`\`\`
    `,
        starterCode: `# Simulate file operations

`,
        solution: `content = "Line 1\\nLine 2\\nLine 3"
lines = content.split("\\n")
for line in lines:
    print(line)`,
        hints: [
            "Use \\n to represent line breaks",
            "Use .split('\\n') to split into lines",
            "Loop through the resulting list"
        ],
        validate: (output) => {
            return output.includes("Line");
        }
    },

    // === ADVANCED & PROJECT LESSONS (21-27) ===
    {
        id: 21,
        title: "Simple Calculator",
        description: "Build a basic calculator with functions.",
        difficulty: "Advanced",
        category: "Projects",
        instructions: `
# Simple Calculator 🧮

Build a calculator with add, subtract, multiply, and divide functions.

## Challenge
Create 4 functions for basic operations and demonstrate each.

## Example Output
\`\`\`
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2.0
\`\`\`
    `,
        starterCode: `# Build your calculator

`,
        solution: `def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b

print("Addition:", add(10, 5))
print("Subtraction:", subtract(10, 5))
print("Multiplication:", multiply(10, 5))
print("Division:", divide(10, 5))`,
        hints: [
            "Create a function for each operation",
            "Each function should take two parameters",
            "Use return to send back the result"
        ],
        validate: (output) => {
            return output.includes("15") || output.includes("Addition");
        }
    },
    {
        id: 22,
        title: "Number Guessing Game",
        description: "Create a simple number guessing game.",
        difficulty: "Advanced",
        category: "Projects",
        instructions: `
# Number Guessing Game 🎯

Create a simple game where you check if a guess matches a target.

## Challenge
Set a target number and a guess, then print if they match or if the guess is too high/low.

## Example Output
\`\`\`
Too low! Try again.
\`\`\`
    `,
        starterCode: `# Create your guessing game

`,
        solution: `target = 42
guess = 30

if guess == target:
    print("Correct! You won!")
elif guess < target:
    print("Too low! Try again.")
else:
    print("Too high! Try again.")`,
        hints: [
            "Set a target number and a guess",
            "Use if/elif/else to compare",
            "Print appropriate messages"
        ],
        validate: (output) => {
            return output.length > 0;
        }
    },
    {
        id: 23,
        title: "List Statistics",
        description: "Calculate statistics from a list of numbers.",
        difficulty: "Advanced",
        category: "Data Analysis",
        instructions: `
# List Statistics 📊

Calculate and display statistics from a list of numbers.

## Challenge
Create a list of numbers and calculate: sum, average, minimum, and maximum.

## Example Output
\`\`\`
Sum: 150
Average: 30.0
Min: 10
Max: 50
\`\`\`
    `,
        starterCode: `# Calculate statistics

`,
        solution: `numbers = [10, 20, 30, 40, 50]

total = sum(numbers)
average = total / len(numbers)
minimum = min(numbers)
maximum = max(numbers)

print("Sum:", total)
print("Average:", average)
print("Min:", minimum)
print("Max:", maximum)`,
        hints: [
            "Use sum() to get the total",
            "Average = sum / length",
            "Use min() and max() built-in functions"
        ],
        validate: (output) => {
            return output.includes("Sum") || output.includes("Average");
        }
    },
    {
        id: 24,
        title: "FizzBuzz",
        description: "Solve the classic FizzBuzz programming challenge.",
        difficulty: "Advanced",
        category: "Challenges",
        instructions: `
# FizzBuzz 🐝

Print numbers 1-15, but:
- Print "Fizz" for multiples of 3
- Print "Buzz" for multiples of 5
- Print "FizzBuzz" for multiples of both

## Example Output
\`\`\`
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
\`\`\`
    `,
        starterCode: `# Solve FizzBuzz

`,
        solution: `for i in range(1, 16):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
        hints: [
            "Use range(1, 16) for numbers 1-15",
            "Use % (modulo) to check divisibility",
            "Check for both conditions first!"
        ],
        validate: (output) => {
            return output.includes("Fizz") || output.includes("Buzz");
        }
    },
    {
        id: 25,
        title: "Palindrome Checker",
        description: "Check if a word reads the same forwards and backwards.",
        difficulty: "Advanced",
        category: "String Challenges",
        instructions: `
# Palindrome Checker 🔄

A palindrome reads the same forwards and backwards (like "racecar").

## Challenge
Create a function that checks if a word is a palindrome.

## Example Output
\`\`\`
racecar is a palindrome!
\`\`\`
    `,
        starterCode: `# Create palindrome checker

`,
        solution: `def is_palindrome(word):
    return word == word[::-1]

word = "racecar"
if is_palindrome(word):
    print(f"{word} is a palindrome!")
else:
    print(f"{word} is not a palindrome.")`,
        hints: [
            "Reverse a string with [::-1]",
            "Compare original with reversed",
            "Return True or False"
        ],
        validate: (output) => {
            return output.toLowerCase().includes("palindrome");
        }
    },
    {
        id: 26,
        title: "Todo List Manager",
        description: "Build a simple todo list with add and remove functions.",
        difficulty: "Advanced",
        category: "Projects",
        instructions: `
# Todo List Manager ✅

Create a simple todo list system with functions.

## Challenge
Create functions to add and remove tasks, then demonstrate them.

## Example Output
\`\`\`
Tasks: ['Buy groceries', 'Clean room', 'Study Python']
After removing: ['Buy groceries', 'Study Python']
\`\`\`
    `,
        starterCode: `# Build your todo list

`,
        solution: `todos = []

def add_task(task):
    todos.append(task)

def remove_task(task):
    if task in todos:
        todos.remove(task)

add_task("Buy groceries")
add_task("Clean room")
add_task("Study Python")
print("Tasks:", todos)

remove_task("Clean room")
print("After removing:", todos)`,
        hints: [
            "Start with an empty list",
            "Use append() to add tasks",
            "Use remove() to delete tasks"
        ],
        validate: (output) => {
            return output.includes("[") && output.includes("]");
        }
    },
    {
        id: 27,
        title: "Frequency Counter",
        description: "Count how many times each item appears in a list.",
        difficulty: "Advanced",
        category: "Data Analysis",
        instructions: `
# Frequency Counter 🔢

Count occurrences of items in a list using a dictionary.

## Challenge
Count how many times each letter appears in a word.

## Example Output
\`\`\`
{'h': 1, 'e': 1, 'l': 2, 'o': 1}
\`\`\`
    `,
        starterCode: `# Count frequencies

`,
        solution: `word = "hello"
freq = {}

for letter in word:
    if letter in freq:
        freq[letter] += 1
    else:
        freq[letter] = 1

print(freq)`,
        hints: [
            "Use a dictionary to store counts",
            "Loop through each character",
            "Increment count if exists, else set to 1"
        ],
        validate: (output) => {
            return output.includes("{") || output.includes(":");
        }
    }
];

// Helper function to get lessons by category
export const getLessonsByCategory = (category) => {
    return pythonLessons.filter(lesson => lesson.category === category);
};

// Helper function to get lessons by difficulty
export const getLessonsByDifficulty = (difficulty) => {
    return pythonLessons.filter(lesson => lesson.difficulty === difficulty);
};

// Get all unique categories
export const getCategories = () => {
    return [...new Set(pythonLessons.map(lesson => lesson.category))];
};
