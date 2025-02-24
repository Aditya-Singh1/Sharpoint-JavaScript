let str="how are you sir"
let st=str.toString().split('')

let conso="";
let vow="";
st.filter(val=> {
   
    if(val=='a'||val=='e'||val=='i'||val=='o'||val=='u'){
        vow+=val; 
       
    }else if(val!=='a'||val!=='e'||val!=='i'||val!=='o'||val!=='u'){
      conso+=val.trim('');
       
    }


  });

  console.log( "const:",conso);

  console.log("vow:",vow);