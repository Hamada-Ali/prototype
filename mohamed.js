import Person from "./Person.js";

// create new instance (clone)

const ali = new Person('ali', 23)

console.log(ali)


// cloned
const ali_cloned = ali.clone();
console.log((ali_cloned.birth))