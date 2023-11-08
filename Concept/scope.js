// Context vs Scope

//example of scope:
function test() {
  let a = a;
}
console.log(a); // undefined
/* the code on top will simply returned undifined because
it print somthng that is out os scope. The variable a is inside
the scope of function, hence it is only exist in that scope */
