## Simple parser for making JSON objects

###Property Types:
`*`   Strings
`*[]` Arrays
`*:`  Date (Always set to current time.)
`*.`  Float
`*#`  Integer

###Usage:
    node main.js object.txt

###Source (object.txt):
    *someText
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.
    
    *[]anArray
    one
    two
    three
    
    *:currentDate
    
    *.aFloat
    39487924.2402984
    
    *#anInteger
    392487948392
    
###Output:
```javacript
{ 
  someText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
               culpa qui officia deserunt mollit anim id est laborum.',
  anArray: [ 'one', 'two', 'three' ],
  currentDate: Thu, 19 Jan 2012 00:47:42 GMT,
  aFloat: 39487924.2402984,
  anInteger: 392487948392 
}
```
