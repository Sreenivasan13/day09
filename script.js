
//step01: Create an XHR object
//request has to be used in whole program
var request = new XMLHttpRequest();
//step:02: create a connection
//true : optional
request.open('GET', 'https://restcountries.com/v2/all', true);
//step:03: send a request
//push for the api to send request to server
request.send();
//step04 : once data successfully received from server
//http:200
request.onload = function(){
    //conversion of string to array of json objects...
    var data = JSON.parse(request.response);
    console.log(data);
  
    // var str = data.map((data) => JSON.stringify(data.currencies["0"].code));
    // console.log(str);
      // let res = data.filter((data) => currency.code == "USD");
      // console.log(res.map((data) => data.name));


    // for(var i = 0; i < data.length; i++){
    //   var myDiv = document.createElement("div");
    //   var myImg = document.createElement("img");
    //   myImg.setAttribute("src", data[i].flags.png);
    //   myDiv.style.backgroundColor = "black";
    //   myDiv.style.color = "white";
    //   myDiv.innerHTML = "Name: "+data[i].name+ "    Capital: " +data[i].capital+ "     Flag: "+ data[i].flags.png;
    //   console.log("Name: "+data[i].name + "    Capital: " +data[i].capital+ "     Flag: "+data[i].flags.png);
    //   document.body.appendChild(myDiv);
    //   document.body.appendChild(myImg);
      
// }

  // data.forEach(myFunction);
  // function myFunction(data){
  //   var myDiv = document.createElement("div");
  //   var myImg = document.createElement("img");
  //   myImg.setAttribute("src", data.flags.png);
  //   myDiv.style.backgroundColor = "black";
  //   myDiv.style.color = "white";
  //   myDiv.innerHTML = "Name: "+data.name+ "    Capital: " +data.capital+ "     Flag: "+ data.flags.png;
  //   console.log("Name: "+data.name + "    Capital: " +data.capital+ "     Flag: "+data.flags.png);
  //   document.body.appendChild(myDiv);
  //   document.body.appendChild(myImg);
  // }
       
      // let arr = data.map((data) => data.population);
      // console.log(arr);

      // let sum = arr.reduce(function (accumulator, currentValue) {
      //   return accumulator + currentValue;
      // });
      // console.log(sum);

      //  var myDiv = document.createElement("div");
      //  myDiv.style.backgroundColor = "black";
      //  myDiv.style.color = "white";
      //  myDiv.style.marginBottom = "20px";
      //  myDiv.innerHTML = "All Countries Of Population Separately in Array: "+ arr;
      //  document.body.appendChild(myDiv);

      //  var myDiv1 = document.createElement("div");
      //  myDiv1.style.backgroundColor = "red";
      //  myDiv1.style.color = "white";
      //  myDiv1.innerHTML = "Total Population Of Countries: "+ sum;
      //  document.body.appendChild(myDiv1);
   
     
   
    
  //  let res = data.filter((data) => data.region == "Asia");
  //  console.log(res.map((data) => data.name));

  // const reducer = (data.population, data.population) => data.population + data.population;

  // console.log(data.reduce(reducer));


}

