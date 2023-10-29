var key=0;

var data= "";

// SEARCH MOVIE FUNCTION
    async function Run(b){
     
       var inputF = document.getElementById("id1");
       inputF.setAttribute('value', 'defaultValue');
        var b= inputF.value;
      
       const response = await fetch("https://www.omdbapi.com/?t="+b+"&apikey=1638fa9e");
   
         // Storing data in form of JSON
         data = await response.json();
            console.log(data);
             document.getElementById("img1").src= data.Poster;                                                                                    
             document.getElementById("info").innerHTML = "Movie:  " +  data.Title ;
           return data;
    }
    

    
//STORING MOVIE OBJECT IN LOCAL STORAGE      
function dat(val) {
console.log(data)
const myObjectString = JSON.stringify(data);
  localStorage.setItem('objectGreeting', myObjectString);
}


//ADD TO MY FAVOURITE MOVIE LIST
function testJS(){
console.log("testjs: "+ key)
localStorage.setItem(key++ , data.Title);  
}







    





    

    