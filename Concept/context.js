// so what is Context

/* context tels where we are in object this
statement migh be confusing but it will get better
when we look at the code. */

// 1.) EXAMPLE
console.log(this); // {}
/* the code on top show that we are no where within an object.
this is because 'this' is not inside any empty object */

// 2.) EXAMPLE
const test = {
  a: function () {
    console.log(this);
  },
};

console.log(test.a()); // { a: [Function: a] }
/* on the code above we can see it return the object's context. this is because 'this' is now insede the object test that has one function which is a */
