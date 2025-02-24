let str="this is javascript programming place".toString().split('')
 let str1=""
let data=str.filter((item,i,ar) =>ar.indexOf(item)===i)
console.log(data)
  
   