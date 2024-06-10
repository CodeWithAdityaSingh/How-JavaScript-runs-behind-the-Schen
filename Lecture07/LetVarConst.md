```
In case of let, and Const they are also allocated memory undefined in 1st phase that is memory creation phase called hoisting but they are stoted in different memory Space which is not in Global Space.So we cannot access let and const before initialization.
If we access let , const variable before initialization so javaScript gives us refrence Error.

Important : Those variable which is in global space (in Window Object ) can access Directly.Through Hoisting. before Initializating that variable. It is  only var.
```
```
Temporal Dead Zone

It is a time Since let variable is hoisted and till it is initialized Some value called Temporal Dead Zone.


==>>> From Hoisting till  (let) variable initialized some value. This duration called Temporal Dead Zone.



Example of let hoisting.

Any line before let x = 100 initialized is the temporal dead zone for variable x.

console.log(x) -->  Hoisting

let x = 100  Let variable initialized Some value.