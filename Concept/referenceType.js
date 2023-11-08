/* object are whats called a reference types in javascript
 reference type are not defined by the  language
 but it defined by the user. Hence it explain the code bellow */
let object1 = { value: 10 };
let object2 = { value: 10 };
console.log(object1 === object2); // will print false

/* the reason that the code on top dosent print true is because the '==='
check if both object are stored in the same location. Because both of them
are referencty type they are not stored in the same location */

// However
console.log(object1.value === object2.value); // will print true

/* The code will print true since it compare the primitif value that is
created by the language*/
