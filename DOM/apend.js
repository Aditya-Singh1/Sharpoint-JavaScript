

let h1=document.createElement('h1')
h1.innerHTML="hello Append method"
document.body.append(h1);

let table=document.createElement('table')
 
 table.border="1"
 table.width="100%";
 table.style.textAlign="center"

document.body.append(table);

let tr1=document.createElement('tr')
table.append(tr1);

let tr2=document.createElement('tr')
table.append(tr2)

let tdar=["Anuj","Anuj@gmail.com","098765434","Baghpat"]
for(let i=0;i<4;i++){
let td=document.createElement('td')
td.innerHTML=tdar[i]
tr2.append(td);
}


let tr3=document.createElement('tr')
table.append(tr3)

let arr=["NAME","EMAIL","CONTACT","ADDERSS"]
for(let i=0;i<4;i++){

    let th=document.createElement('th')

    th.innerHTML=`${arr[i]}`
    tr1.append(th);


   }





