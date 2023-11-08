//so what is prototype
/*->  "prototype" has a special meaning related to object-oriented
programming and is a fundamental concept in the language. The prototype
is used to implement inheritance and shared properties and methods among
objects. ENULATING A CLASS
*/

/*
My understanding --> so in javascript we can use a function the same as how clasees
are working. Prototype is the was on how we add another function or a method i would say
into the object it self
*/

function User (email, name){
    this.email=email;
    this.name=name;
    this.online=false;

    // this is a example on how to create a function or a method inside a object
    // with 'this' keyword. Prototype is a way we do this without using keyword 'this'
    this.login = function(){
        console.log(`you are login`)
        this.online=true
    }
}
// this is the way we add a method to an object with usind prototype
User.prototype.logout = function(){
    console.log('you are logout');
    this.online=false
}

//-------------------------------------------------------------------//

//THIS IS HOW WE DO INHERITANCE WITH THIS PROTOTYPE
// in this example i want to create admin as another object
// and it is inherited from the user object
function Admin(...args){ // we need caputre the parameters as an array
    User.apply(this,args)
}
// howeer, the logout function is not et inheritnce since its under the prototype,
// hence we need to inherit that too into the admin class
//this will be called chain prototype which will add a prototype inside a prototype in admin
Admin.prototype = Object.create(User.prototype)

//-------------------------------------------------------------------//

/* okay, so now i want to create a method or a prototype function that only occur in the
admin but non in the user
NOTE -> need assign let users=[user1,user2,uuser3] first
*/
Admin.prototype.deleteUser = function(u){
    users =users.filter((user)=>{
       return user.name!==u.name
    })

}

//-------------------------------------------------------------------//

const user1 = new User('rafaeldelano@gmail.com','rafael')
const user2 = new User('mattherimauel@gmail.com','matthew')
const admin1 = new Admin('farellfebriano8@gmail.com','farell')
// admin1.login()
// admin1.logout()
// console.log(admin1.online)
let users=[user1,user2,admin1]
admin1.deleteUser(user1)
console.log(users);
