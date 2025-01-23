

let hieght_in_meter=2;
let weigt_in_kg=75;
 

let BMI=(h,w)=>{
   let bmi=w/(h**2);
    return bmi; 
}
let data=BMI(hieght_in_meter,weigt_in_kg)
 console.log(data)

if(data<18.5){

    console.log("underWeight")
}else if(data>18.5 && data< 24.9){
    console.log("NormalWeight")

}else if(data>25 && data<29.9){
    console.log("OverWeight")
}else if(data>30){
    console.log("Obese:")
}

