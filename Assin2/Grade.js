let marks=Number(prompt("enter the any no"));

let grade=(marks)=>{

    if(marks>=90&&marks<=100){
        document.write(`<h2>Grade:A+</h2>`);

    }else if(marks>=80&&marks<=89){
        document.write(`<h2>Grade:A+</h2>`);

    }else if(marks>=70&&marks<=79){
        document.write(`<h2>Grade:B</h2>`);
    }else if(marks>=60&&marks<=69){
        document.write(`<h2>Grade:C</h2>`);
    }else if(marks>=50&&marks<=59){
        document.write(`<h2>Grade:D</h2>`);
    }else if(marks>=0&&marks<=49){
        document.write(`<h2>Grade:F</h2>`);
    }else if(marks>100){
        document.write(`<h2> Invalid Marks</h2>`);  
    }

}
grade(marks);