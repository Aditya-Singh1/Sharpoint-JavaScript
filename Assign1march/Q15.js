//15.Detecting Palindromic Usernames 
//A gaming platform wants to find usernames that are palindromes. 

const usernames = ["nayan", "radar", "ganga", "kiran", "malayalam"]
 
 let pelin=usernames.filter((val)=>val==val.split('').reverse().join(''))
 console.log(pelin);
 
 