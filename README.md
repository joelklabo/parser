## Simple parser for making JSON objects

Usage:
  node main.js object.txt

Output:
 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 

## Format

'*title' Creates a property on the object named title. The lines underneath will become the value. Everything up until the next '*' will be taken as part of the value.

'*[]anArray' Will create an array with each line added as a member of the 'anArray' array. 
