function calculate() {

  var validated = validateFields();
  if(validated){
    var loanAmount = parseInt(document.getElementById("loanAmount").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var loanTermYr = !isNaN(parseInt(document.getElementById("loanTermYr").value))?parseInt(document.getElementById("loanTermYr").value):0;;
    var loanTermMnt = !isNaN(parseInt(document.getElementById("loanTermMnt").value))?parseInt(document.getElementById("loanTermMnt").value):0;

    var i = 0;
    var n = 0;
    var finalAmountPerPayBack = 0;
    var total = 0;
    var totalInterest = 0;

    if( loanTermMnt != 0 ){
      n = loanTermYr + (loanTermMnt/12);
    }
    else{
      n = loanTermYr;
    }

    i = (interestRate/100);

    finalAmountPerPayBack = (loanAmount * i)/(1-(1+i)**(-n));

    total = finalAmountPerPayBack * n;
    totalInterest = total - loanAmount;

    document.getElementById("section-1").style.display = "none";
    document.getElementById("section-2").style.display = "none";
    document.getElementById("section-3").style.display = "block";

    document.getElementById("displayLoanAmount").innerHTML = loanAmount;
    document.getElementById("displayInterestRate").innerHTML = interestRate;
    document.getElementById("displayTermYr").innerHTML = loanTermYr;
    document.getElementById("displayTermMnt").innerHTML = loanTermMnt;
    document.getElementById("displayTotal").innerHTML = "$"+total.toFixed(2);
    document.getElementById("displayInterest").innerHTML = "$"+totalInterest.toFixed(2);
    // myFunc(totalInterest.toFixed(2));
  }

}

function resetForm(){
    document.getElementById("section-1").style.display = "block";
    document.getElementById("section-2").style.display = "block";
    document.getElementById("section-3").style.display = "none";

    document.getElementById("loanForm").reset();
}

function validateFields(){
  var loanAmount = parseInt(document.getElementById("loanAmount").value);
  var interestRate = parseInt(document.getElementById("interestRate").value);
  var loanTermYr = parseInt(document.getElementById("loanTermYr").value);
  var loanTermMnt = parseInt(document.getElementById("loanTermMnt").value);

  if(isNaN(loanAmount)){
    window.alert("Enter valid Loan Amount");
    return false;
  }
  else if (loanAmount < 0 || loanAmount > 100000) {
    window.alert("Enter valid Loan Amount within range 0-100000$");
    return false;
  }
  if(isNaN(interestRate)){
    window.alert("Interest Rate is mandatory.");
    return false;
  }
  else if (interestRate < 0 || interestRate > 100) {
    window.alert("Enter valid Interest Rate within range 0-100%");
    return false;
  }
  if(isNaN(loanTermYr) && isNaN(loanTermMnt)){
    window.alert("Loan Term is mandatory.");
    return false;
  }
  else if (loanTermYr < 0 || loanTermYr > 100) {
    window.alert("Enter Loan Term Year within range 0-100 years");
    return false;
  }
  else if (loanTermMnt < 0 || loanTermMnt > 1200) {
    window.alert("Enter Loan Term Monthh within range 0-1200");
    return false;
  }
  if(loanTermYr == 0 && loanTermMnt == 0){
    window.alert("Enter valid Loan Term");
    return false;
  }
  return true;
}
