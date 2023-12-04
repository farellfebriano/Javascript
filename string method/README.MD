# JAVASCRIPT STRING METHOD Essential

## String search

#### Match

this code bellow will return the number of the ocureance of the specific regular expression

```javascript
let text1 = "The rain in SPAIN stays mainly in the plain";
const match = text1.match(/Ain/gi);
console.log(match); // [ 'ain', 'AIN', 'ain', 'ain' ]
```
