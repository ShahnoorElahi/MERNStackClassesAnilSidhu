let x=10;
let y=20;

console.log('1st statemnet');

setTimeout(()=>{
    console.log('2th statemnet');
},2000);

setTimeout(()=>{
    console.log('3rd statemnet');
},0);

console.log('4th statemnet');