function calculate(){
  var validate = validateCheapCof() && validateExpensiveCof() && validateNoOfCoffee();
  if(validate){
    var cheapCof = parseInt(document.getElementById("cheapCof").value);
    var expCof = parseInt(document.getElementById("expCof").value);
    var noCof = document.getElementById("noCof").value.split(',');

    var avgCost = (( cheapCof + expCof )/2).toFixed(2);
    var coffeeCntPerWeek=0;
    var i;
    for(i=0;i<noCof.length;i++){
      coffeeCntPerWeek +=parseInt(noCof[i]);
    }

    var coffeeCntPerYear = (coffeeCntPerWeek * 52.1429).toFixed(2);
    var coffeeCntPerMonth = (coffeeCntPerWeek * 4.34524).toFixed(2);

    var expCoffeeCostPerMonth = (coffeeCntPerMonth * expCof).toFixed(2) ;
    var chpCoffeeCostPerMonth = (coffeeCntPerMonth * cheapCof).toFixed(2) ;
    var avgCoffeeCostPerMonth = (coffeeCntPerMonth * avgCost).toFixed(2) ;

    var expCoffeeCostPerYear = (coffeeCntPerYear * expCof).toFixed(2) ;
    var chpCoffeeCostPerYear = (coffeeCntPerYear * cheapCof).toFixed(2) ;
    var avgCoffeeCostPerYear = (coffeeCntPerYear * avgCost).toFixed(2) ;

    var out = " Average Cost per Coffee : $"+avgCost+"<br>";
    out += " Total number of Coffees per Year : "+coffeeCntPerYear+"<br>";
    out += " Total number of Coffees per Month : "+coffeeCntPerMonth+"<br>";
    out += " Total cost of coffees for : <br>";
    out += "   - Month (drinking only most expensive) : $"+expCoffeeCostPerMonth+"<br>";
    out += "   - Month (drinking only cheapest) : $"+chpCoffeeCostPerMonth+"<br>";
    out += "   - Month (drinking average cost) : $"+avgCoffeeCostPerMonth+"<br>";
    out += "   - Year (drinking only most expensive) : $"+expCoffeeCostPerYear+"<br>";
    out += "   - Year (drinking only cheapest) : $"+chpCoffeeCostPerYear+"<br>";
    out += "   - Year (drinking average cost) : $"+avgCoffeeCostPerYear+"<br>";

    /*if(coffeeCntPerMonth <= 22){
      out += "<img src=\"image1.png\" alt=\"Nothing abnormal here\" display=\"block\" margin-left=\"auto\" margin-right=\"auto\" width=\"50%\"><br>";
    }
    else if( 22 < coffeeCntPerMonth && coffeeCntPerMonth <= 80 ){
      out += "<img src=\"image2.png\" alt=\"Caffeine Addict Alert\" display=\"block\" margin-left=\"auto\" margin-right=\"auto\" width=\"50%\"><br>";
    }
    else if( coffeeCntPerMonth > 80 ){
      out += "<img src=\"image3.png\" alt=\"You are literally made of Coffee\" display=\"block\" margin-left=\"auto\" margin-right=\"auto\" width=\"50%\"><br>";
    }*/

    document.getElementById("result").innerHTML = out;
  }
}

function validateCheapCof(){
  var cheapCof = document.getElementById("cheapCof").value;
  if(isNaN(cheapCof)){
    window.alert("Coffee Prize must be a Number.");
    return false;
  }
  return true;
}

function validateExpensiveCof(){
  var expCof = document.getElementById("expCof").value;
  var cheapCof = document.getElementById("cheapCof").value;
  if(isNaN(expCof)){
    window.alert("Coffee Prize must be a Number.")
    return false;
  }
  if(!isNaN(cheapCof)){
    var cheapCofInt = parseInt(cheapCof);
    var expCofInt = parseInt(expCof);
    if(cheapCofInt>expCofInt){
      window.alert("Price of Expensive Coffee must be greater than or equal to Cheapest Coffee.");
      return false;
    }
  }
  return true;
}

function validateNoOfCoffee(){
  var noCof = document.getElementById("noCof").value.split(',');
  var i;
  if(noCof.length != 7 ){
    window.alert("Enter number of Coffees bought for 7 days of the Week from Monday to Sunday.");
    return false;
  }
  for(i=0;i<noCof.length;i++){
    if(isNaN(noCof[i])){
      console.log(noCof[i]+4);
      window.alert("Number of Coffees bought must be a Number.");
      return false;
    }
  }
  return true;
}
