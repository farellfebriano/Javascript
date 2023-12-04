let text = "Please LoCaTe where 'locate' occurs!";

const indexOf = text.lastIndexOf("where");
// console.log(indexOf);

const lastIndexOf = text.lastIndexOf("Where");
// console.log(lastIndexOf);

const search = text.search(/LOCATE/i);
// console.log(search);

("-----------------------------------------------------");

let text1 = "The rain in SPAIN stays mainly in the plain";

const match = text1.match(/Ain/gi);
console.log(match);
