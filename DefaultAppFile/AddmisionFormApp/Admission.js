
function fun1(check){
    if(check=='reg'){


        document.getElementsByClassName('reg')[0].style.display='none'
        document.getElementsByClassName('main')[0].style.display='block'

    }
}



function fun(){

let tab=document.getElementsByClassName('tab')[0]
let tr=document.createElement('tr');
tab.append(tr);

let getName=document.getElementsByClassName('n')[0].value
let getEmail=document.getElementsByClassName('e')[0].value 
let getContact=document.getElementsByClassName('t')[0].value 
let getAddress=document.getElementsByClassName('a')[0].value
let getCourse=document.getElementsByClassName('sel')[0].value
let getDate=document.getElementsByClassName('d')[0].value

let td1=document.createElement('td');
td1.innerHTML=getName;
tr.append(td1)

let td2=document.createElement('td')
td2.innerHTML=getEmail
tr.append(td2);

let td3=document.createElement('td')
td3.innerHTML=getContact
tr.append(td3)

let td4=document.createElement('td')
td4.innerHTML=getAddress
tr.append(td4);
let td5=document.createElement('td')
td5.innerHTML=getCourse
tr.append(td5)
let td6=document.createElement('td')
td6.innerHTML=getDate;
tr.append(td6)




   

     

}