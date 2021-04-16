var com;
var max = 0;
var ti;
var str;
var counter = 0;
//TASK 1: AN api GET request to URL
function fetchData(){

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json();

  })
  .then(data => {

    for (var i=0;i<100;i++){
    const post_id = data[i].id;
    const title = data[i].title;
    
  
//TASK 2: Result of the above api to make another request 
    var req =  fetch('https://jsonplaceholder.typicode.com/posts/'+post_id+'/comments')
     .then(response => {
       return response.json();
     })
    .then(data2 => {

    const arr = [];
    for(var j=0;j<data2.length;j++) {
      const comment = data2[j].body;
      arr.push(comment)
      
    } 
    
    const arr2 = [];
   
    arr2.push(title)
    
    
   //TASK 3: Printing the array of objects with 
   //title(from the first api call) and array of comments body(from the second api call). 
   

  const obj = JSON.stringify({title: arr2});
  const obj2 = JSON.stringify({comment: arr});
 console.log(obj);
 console.log(obj2);

 
 
   str = (obj2.split(",").length);
    
    if(str>max){
      max = str;
      ti = obj;
      com = obj2;
    }
    var a=100;
    counter++;
    //TASK 4: Printing one object from the previous array of objects which has the most number of comments
   if(counter == a){
  
  console.log("object which has the most num of comments is :" + ti);
  console.log("\n");
  console.log(com);
   }
})
  }
      })
}
  fetchData();
