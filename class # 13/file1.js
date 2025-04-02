const fs=require('fs');
const path=__dirname+"\\files\\";
fs.writeFileSync(path+"a.txt",'abc');
console.log(path);

fs.readdir(path,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})

