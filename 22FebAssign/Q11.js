function fun1(){

    let ar=[]
    let num =Number(prompt(" how many add the pair no"))

for(let i=0;i<num;i++){

   let w1=prompt(`enter the word one ${i +1} `);
   let w2=prompt(`enter the word two ${i +1}`);

   ar.push(`${w1}-${w2}`)

    }

    let data=ar.join(',');

    document.write(data);
}

fun1()