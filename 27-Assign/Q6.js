let book_Titles = [ "The Great Gatsby", "Atomic habits", "The Catcher in the Rye", "War and Peace", "The Old Man and the Sea", "A Brief History of Time" ];

const fun1=()=>{

 let ar=[];

    for(book of book_Titles){
     
        if(book_Titles.length < book.length){

            ar=book;
        }
    }
    console.log(ar);



}
fun1();