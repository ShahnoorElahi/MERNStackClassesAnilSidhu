const fs=require('fs');
const path=__dirname+"\\files\\";
// fs.writeFileSync(path+"a.txt",'abc');
// console.log(path);
// fs.readFile(path+"a.txt",'utf8',(err,item)=>{
//     console.log(item);
// });

// fs.appendFile(path+"a.txt","abc",(err)=>{
//     err ? console.log(err) : console.log("file has appended");
// })

// fs.rename(path+'a2.txt',path+'a1.txt',(err)=>{
//     err ? console.log(err) : console.log("file renamed");
// })

fs.unlinkSync(path+'a1.txt');