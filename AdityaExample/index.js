
const head=(title="",css='./index.css')=>{
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
    <div class="head">
    
</div>
    
    `)
}


const mid=()=>{

    document.write(`
        <div class="mid">
    <div class="banner"></div>
    <div class="aside">
    <button onclick="">HTML</button>
    <button>CSS</button>
    <button>JAVA-SCRIPT</button>
    <button>NODE-JS</button>
    <button>REACT-JS</button>
    </div>
</div>
        `)

}

const footer=()=>{

    document.write(`
        <div class="footer">
     
           </div>
        `)

}