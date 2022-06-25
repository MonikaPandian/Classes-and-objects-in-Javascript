class Movie
{
   constructor(title,studio,rating)
   {
     this.title = title;
     this.studio = studio;
     if(rating == null){
       this.rating = "PG";
     }else{
        this.rating = rating;
     }
     
   }
}

function getPG(arr)
   {  
     var temp=[];
     for(var i=0; i < arr.length; i++){
        var a = arr[i];
     if(a.rating == "PG"){
        temp.push(a.title);
     }
     }
     return temp;
   }
let  film = new Movie("Casino Royale","Eon Productions","PG13");
console.log(film);

let film1 = new  Movie("Avatar","Century Fox","PG");
let film2 = new Movie("Avengers","Marvel Studios","PG");
let film3 = new Movie("The Lost City","Paramount Pictures","PG");
let film4 = new Movie("Batman","Warner Pictures","R");
let film5 = new Movie("Interstellar","Warner Pictures");
var arr = [film1,film2,film3,film4];
console.log(getPG(arr));

let film6 = new Movie("Beast","Sun Productions");
console.log(film6);
