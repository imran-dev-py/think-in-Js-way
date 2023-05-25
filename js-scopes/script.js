// by default global variables [if it was declared var] are stay inside window scope

/* 3 types of scopes are available
  * block scope
  * global scope
  * function scope
*/

"use script";

var x = 25;

function myFunc() {
    var y = 10;
    var x = 15;
    console.log(x, y);
}

myFunc()
console.log(x);