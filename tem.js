let header=(title="Template",css='Tem.css')=>{

document.write(`
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${css}">
</head>
<body>
    <div class="header">This is a heading </div>

 

    `)
}

const banner=()=>{

    document.write(`
        
        <div class="ban"></div>

        `);
}

const aside=()=>{

    document.write(`
        
        <div class="aside"></div>


      
`);

}

const footer=()=>{

    document.write(`
        
<div class="foo"></div>



 </body>        
</html> `)
}