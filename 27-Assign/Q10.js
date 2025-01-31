let EmpList=["aditya","Naman","Naveen","Abhishek"];

const addLast=()=>{
  EmpList.push(prompt("Add Emp last position "));
  document.write(`Employe::${EmpList}`);
}
 

const addFirst=()=>{

 EmpList.unshift(prompt("Add Employee First Position"));
 document.write(`EmployeList::${EmpList}`);
}
 

const addSpecific=()=>{
    
    let insert=prompt("Add Employee name to specific position")
    let index=prompt("enter the index position")
    let delCount=0;

    EmpList.splice(index,delCount,insert);
    document.write(`EmployeList::${EmpList}`);

}

const readEmpFirst=()=>{

document.write(EmpList[0]);

}

const readEmpLast=()=>{

    let val=EmpList.length-1;

    document.write(`LastEmployee_:${EmpList[val]}`)

}
 


const readEmploSpecific=()=>{

    let val=Number(prompt("Read Employee at Specific Position"))

    document.write(`Name:${EmpList[val]}`)

}
 

const delFirst=()=>{
    document.write(`EmpListFirst:${EmpList}<br>`);
    let del= EmpList.shift();
    document.write(`EmpListLast:${EmpList} <br>deleteName-: ${del}`);
        
 }


const delLastElement=()=>{
document.write(`BeforeDeleteName::${EmpList}<br>`)
EmpList.pop()
document.write(`DeleteName::${EmpList}`)

 }
 

 const deleteEmpSpecificPos=()=>{
    document.write(`EmployeList::${EmpList}<br>`);
    let index=prompt("enter the index position")
    let delCount=Number(prompt("Enter Delete position"));
    let val=EmpList.splice(index,delCount);
    document.write(`EmployeList::${EmpList} <br> deleteName::${val}`);   
 }
 


const updateEmpFirst=()=>{

    document.write(`${EmpList}<br>`);
    let upd=prompt("Enter Name Which do update")
    let val=Number(prompt("Enter 0 index Update Employee at First Position"))
    // let val1=Number(prompt("Update Employee at First Position"))
    EmpList.fill(upd,val,1)
    
    document.write(`${EmpList}`);


}


const  updateLastPosi=()=>{

    document.write(`${EmpList}<br>`);
    let size=EmpList.length
    let upd=prompt("Enter Name Which do update")
    let val=Number(prompt(`Enter ${size} index Update Employee at Last Position`))
    val=-1;
    EmpList.fill(upd,val,size)
    
    document.write(`${EmpList}`);

}
 


const updateSpacificPosi=()=>{

    let len=EmpList.length;
    document.write(`${EmpList}<br>`);
    let upd=prompt("Enter Name Which do update to specific position")
    let val=Number(prompt(`Enter a no.  between first input and last input ...
         length is ${len} 'from'  Update Employee at First Position`))
    let val1=Number(prompt(`Enter a no. between first input and last input ...
         'to' Update Employee at First Position`))
    
    EmpList.fill(upd,val,val1)

    document.write(`${EmpList}`);

}

const exit=()=>{

    document.write();

}
 

 
 
 char =Number(prompt(`select your option 
     Select '1' Add Employee at Last Position 
     Select '2' Add Employee at First Position 
     Select '3' Add Employee at Specific Position 
     Select '4' Read Employee at First Position 
     Select '5' Read Employee at Last Position 
     Select '6' Read Employee at Specific Position 
     Select '7' Delete Employee at First Position 
     Select '8' Delete Employee at Last Position
     Select '9' Delete Employee at Specific Position
    Select '10' Update Employee at First Position
    Select '11' Update Employee at Last Position
    Select '12' Update Employee at Specific Position
    Select '13' Show All Employees 
    Select '14' Exit

    `));

 
 


switch(char){

    case 1:
    addLast();
    break
    case 2:
    addFirst();
    break
   
    case 3:
    addSpecific();
    break

    case 4:
    readEmpFirst();
    break

    case 5:
    readEmpLast();
    break

    case 6:
    readEmploSpecific();
    break

    case 7:
    delFirst();
    break

    case 8:
    delLastElement();
    break

    case 9:
   deleteEmpSpecificPos();
    break

    case 10:
    updateEmpFirst();
    break

    case 11:
   updateLastPosi()
    break

    case 12:
     updateSpacificPosi();
    break

    case 13:
    document.write(`${EmpList}`);
    break

    case 14:

    break

    default :

    document.write(`invalid !`);

    break;
}

 