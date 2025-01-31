
const fun=()=>{

    let city=Number(prompt("How Many city want to enter"))
    let addData=[];
    
    
    
    if(isNaN(city)||city < 0){
    
        document.write("incorrect your details try agin")
    return
    }
    
    for(let i=0;i<city;i++){
    
    let cityName=prompt(`enter the city name ${i+1}`)
    
     if(!cityName){
     document.write("city name cant be empty try again ")
     i--;
     continue;
    }
    
    
    let temprature=Number(prompt(`enter the temprature :${cityName}`));
    
    if(isNaN(temprature)){
    
        document.write("invalid details try agin")
    
        i--;
        continue;
    
    }
    
     addData.push({name:cityName,temp:temprature}) 
    
    }
    
    const Maxtemprat=addData.reduce((max,citi)=>citi.temp > max.temp ? citi:max,addData[0])
    const Mintemprat=addData.reduce((min,citi)=>citi.temp < min.temp ? citi:min,addData[0])
    
    document.write(`${Maxtemprat.name} ${Maxtemprat.temp}°C`)
    document.write(`${Mintemprat.name} ${Mintemprat.temp}°C`)
    
    
    }
    fun();