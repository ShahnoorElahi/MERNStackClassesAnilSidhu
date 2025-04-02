const fs=require('fs');
const path=__dirname+"\\files\\";
let x=10;
let y=20;
const a=new Promise ((resolve,reject)=>{
    setTimeout(()=>{
    resolve(30);
},2000);
});

a.then((data)=>{
    y=data;
    console.log(x+y);
})

console.log(x+y);