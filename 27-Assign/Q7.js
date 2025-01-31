

// find the length of all array index, name and length witch is show combined;

const fun=()=>{

const Usernames = ['aarav123', 'vihaan007', 'vivaan_k', 'ananya.star', 'ishita_01','aanya.sharma', 'rohan_raj', 'aryan_singh', 'sid.cool', 'priya_1995']
    
for(let i=0;i<Usernames.length;i++){
 
 let size= Usernames[i].length

 let arr=[];

 arr=`${Usernames[i]} len:${size}`;

 console.log(arr);

}

}
fun();