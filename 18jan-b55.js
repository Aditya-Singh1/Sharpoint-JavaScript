
function details(username,email,contact){

document.write(`
    <div class="card">
       
        <img src="${img}" alt="">
        
        <li>username:${username}</li>
        <li>email:${email}</li>
        <li>contact:${contact}</li>
        
       
    </div>
    
    `)

}
let img=prompt("enter the img address ");
let username=prompt("enter the username")
let email=prompt("enter the email")
let contact=prompt("enter the contact");

details(username,email,contact);




