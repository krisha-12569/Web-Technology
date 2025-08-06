const path=require('path');
const normalizedpath=path.normalize('./LAB 4/path/..');
console.log(normalizedpath)


const join=path.join('./LAB 4/path/..','./LAB 5/path/..');
console.log(join);

const diname=path.dirname("./LAB 4/path.js");
console.log(diname);

const bname=path.basename("./LAB 4/path.js");
console.log(bname);

const ext=path.extname("path.js");
console.log(ext);
