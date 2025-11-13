type ID = string | number

let userid : ID = "asnif"
let empp : ID = 101

type Adress ={
    pincode : number;
    place : string;
}

type employy ={
    name : string,
    age : string | number,
    
}

type infoo = {
    id :string | number
    detail : employy
    adress?:Adress
}

let employdetails : infoo = {
    id : 1,
  detail :{name:"asnif" , age :18},
  adress :{pincode : 676319, place:"parappanagadi"}
  
}

console.log(employdetails);

