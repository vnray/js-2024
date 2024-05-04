const num = [1, 20, 3, 5, 8, 10];

for (const nums of num) {
  // console.log(nums);
}

let name = "surya yadav";

for (let words of name) {
  // console.log(words);
}

const newmap = new Map();

newmap.set("in", "india");
newmap.set("FR", "france");

// console.log(newmap);

const myobj = {
  name: "sumit",
  roll: 232,
  city: "patna",
  branch: "menubar",
};

for (const key in myobj) {
  // console.log(`${key} and value is ${myobj[key]}`);
}

const program = ["js", "css", "html", "react"];

for (let key in program) {
  console.log(program[1]);
}
