// normal function

function sum (a:number , b:number) {
    return a+b
}

console.log(sum(10,10));

//.................................................................................................................................


// function with type and object

type Details ={
    name : string;
    age  : number;
    salary:number;
}

let asii: Details={
    name :"asnif",
    age :18,
    salary:20000
}

function getusers (asii:Details) {
    return asii.age
}

console.log( getusers(asii));


//............................................................................................................................................

// function users ({name ,age}:{name:string ,age:number}){
//    return name
// }

// console.log(users({name:"asnif",age: 18}));
 