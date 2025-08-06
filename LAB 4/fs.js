const fs=require('fs');
fs.exists('./LAB 4/path.js',(exists)=>{
    console.log(exists ? 'Found' : 'Not found!');
})