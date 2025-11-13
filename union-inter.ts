// union ...............

// let variable :string | number

// variable = "asnif";
// variable = 100

type Objj = {
    name : string,
    age  :number|string,
    salary:number | string,
}

let detailsss :Objj = {
    name : "asnif",
    age  : 18,
    salary :18_000 ,
    
}

//.........................................................................................

//intersection ............

type Intern = {name:string };
type employ = {id :number|string};
type staff = Intern & employ;

let emp : staff ={
    name: "asnif",
    id: "no 20"
}

console.log(emp);
