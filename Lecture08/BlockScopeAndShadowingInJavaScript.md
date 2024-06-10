```
Q-What is Block?
Ans- Block is defined by these  and this is also called Compound statement ->{
 
} braces. 

we can group multiple Statment in a single block so that javaScript expect only a single statement
```
```
Example of Block
if(true)  console.log('true') ==> We also write code like this  its also executes. but we use block {} like this in the place of single statement.

if(true){
    let a = 100;
    console.log(a)  --> {}  use at the place of single statement. 
}

-->Here we group multiple statement in a Single block to execute at single statement. of jS 

for loop , while loop is also uses block {} to combine multiple languages.

```




```
Q What is Block Scope ?

Ans- if we declare let and const in a  block so we cannot access then  out of that block because let  and const were stored in a different memory  space  called block scope. that is not in global space.
But But.
If we declare let and const globaly not in the block {} scope  so  it were  stores in different memory space that is  script memory space  that  is not in the global memory space  thats the  we cannot access variable before initialization.

---> here lexical environment is also created


Lexical Environment?

local Memory + lexical environment of its parent 


What is Shadowing ?

Ans : Shadowing is the concept of block and functions. 
let and const behaves same like block in function also.
```









