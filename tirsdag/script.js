
// 1a
/*
var name = ["Andy", "Beatrice" , "Charles" , "Dorthea" , "Eric" , "Beatles"];

var result3 = name.filter(name => name.includes("a"))

console.log(result3)

function strReverse(str) {
    return str.split("").reverse().join("");
}

//1b

var all = ["Lars", "Peter", "Jan", "Bo"];
var y = all.join("*" + " " + ",");
console.log(y);
var numbers = [2, 3, 67, 33];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer));

var thisVariable = {
    prop: 42,
    thisFunc: function () {
        return this.prop + 10;
    },
};

console.log(thisVariable.thisFunc());

//2a 


const myFilter = function (arr,cb) {
const newArr = [];
for(let idx in arr); {

if(cb(arr[idx])) {
newArr.push(arr[idx]);
}
}
return newArr;
};

const namesWith = myFilter(names, el => el.includes("a"));
console.log ("my filter method:",namesWithA2);

//4a 

const numbers = [1,3,5,10,11];
const add2next = numbers.map((el, idx,arr) => {

console.log("element", el);
 console.log("index", idx);
console.log("array",arr);

if(idx === arr.length -1) return el;
return el+arr[idx +1];
}


//b

var names = ["Lars", "Peter", "Jan", "Bo"];
var resultNav = names.map(function (e) {
    return "<a href=\"\">" + e + "</a>";
})

//4c

const persons = [ { name: "lars" , phone: "123" } ];

const rowsOfTable = persons.map (el => "<tr<>td" + el.name +"</td><td>" +el.phone +"</td><(tr>n")

.joint ("");
const htmlTable = "<table><tr><th>Name</th>Phone</th></tr>" + rowsOfTable + "</table";



console.log(htmlTable);



//4d 
document.getElementById("root).innerHTML = htmlTable;



//5a

var all = ["Lars", "Peter", "Jan", "Bo"];
console.log(all.join(','));
console.log(all.join(' '));
console.log(all.join('#'));

//5b
function sum(total, num) {
    return total + num;
}
var numbers = [2, 3, 67, 33];
console.log(numbers.reduce(sum));
*/