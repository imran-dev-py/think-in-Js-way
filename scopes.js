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

// if a variable is declared inside {}, it should not be seen outside.
{
  let message = "hello";
  console.log(message);
}

{
  let message = "Goodbye";
  console.log(message);
}

for (let i=0; i<3; i++) {
  console.log(i);
}

while (true) {
  let phrase = '¡Hola!';
  console.log(phrase);
}