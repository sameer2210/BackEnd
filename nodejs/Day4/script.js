
const { log } = require('console')
const fs = require('fs')

fs.writeFile('hello.txt','hello world',() => {
    fs.cr

    fs.unlink("hello.txt",() => {
        console.log("file delerted");
        
    })
})

app.listen(3000,() =>{
    console.log(`server is running on port 3000...`);
});