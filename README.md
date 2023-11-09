# Javascript

---

## What is a progam :

A program has to do two things

- allocate memory
- parse and execute

## JavaScript Engine

- JavaScript uses a V8 engine, it reads the javaScript that we write and changes into machine executable instruction for the browser

![View Design](assets/JsEngine.png)

Call stack (LIFO): <br>
It is part of the machine where it read and executed your code.
<br>
Example:
```javascript
const a = 1;
const a = 'apple';
const a = undefined;
```
`note`<br>
language that has multiple call stack called multi threaded


Memory heap: <br>
It is part of the machine where it store values that are given to the engine
<br>
Example:
```javascript
console.log(1)
console.log("apple")
console.log(undefined)

```

## Memory Leak
A memory leak in JavaScript occurs when a program (typically a web application) continues to hold onto memory that is no longer needed or referenced. As a result, the application's memory usage gradually increases over time, and it may eventually lead to performance issues or even cause the application to crash.

`note`<br>
That why you might heard that global variable is bad. It is because if you forget to cleanup global variable after usage, it will fill up the memory heap and make the app slowing down or in the worse case not be able to work

## Why JavaScript is single threaded
Well, running code on a single thread can be quite easy since you don't have to deal with complicated
scenarios that arise in multi threaded environment.
You just have one thing to worry about.
And when I say issues well with multithreaded environment, you can have such things as `deadlocks`.


`deadlocks` occurs when two or more processes are unable to proceed because each is waiting for the other to release a resource. Essentially, it's a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process.
