

const fun1=(title="Home",css='index.css')=>{

    document.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
 <link rel="stylesheet" href=${css}>
</head>
<body>
    
<div class="head">
<a href="">Home</a>
<a href="">About</a>
<a href="">Servises</a>
<a href="">Contact</a>
<a href="" class='info'>Information</a>
</div> 

`)
}


const mid=()=>{
document.write(`
    
    <div class="banner"></div>
    <div class="Aside"></div>
    <div class="Footer"></div>

    `)

}