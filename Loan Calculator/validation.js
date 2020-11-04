function calculate() {

  var validated = validateFields();
  if(validated){
    var loanAmount = parseInt(document.getElementById("loanAmount").value);
    var interestRate = parseInt(document.getElementById("interestRate").value);
    var compounding = parseInt(document.getElementById("compounding").value);
    var termYr = parseInt(document.getElementById("yearList").value);
    var termMonth = parseInt(document.getElementById("monthList").value);
    var noOfPayments = parseInt(document.getElementById("noOfPayments").value);

    if(termMonth != 0 ){
      termYr = termYr + (termMonth/12);
    }

    var i = 0;
    var n = 0;
    var finalAmountPerPayBack = 0;
    var total = 0;
    var totalInterest = 0;
    var payBack = "";

    i = (interestRate/100)/compounding;
    n = termYr * compounding;

    finalAmountPerPayBack = (loanAmount * i)/(1-(1+i)**(-n));

    total = finalAmountPerPayBack * n;
    totalInterest = total - loanAmount;

    if(compounding == 365) payBack = "Day";
    else if (compounding == 52) payBack = "Week";
    else if (compounding == 26) payBack = "Bi-Week";
    else if (compounding == 24) payBack = "Semi-Month";
    else if (compounding == 12) payBack = "Month";
    else if (compounding == 4) payBack = "Quarter";
    else if (compounding == 2) payBack = "Semis-Year";
    else if (compounding == 1) payBack = "Year";

    document.getElementById("section-1").style.display = "none";
    document.getElementById("section-2").style.display = "none";
    document.getElementById("section-3").style.display = "block";
    document.getElementById("finalAmountPerPayBack").innerHTML = "$"+finalAmountPerPayBack.toFixed(2);
    document.getElementById("total").innerHTML = "$"+total.toFixed(2);
    document.getElementById("totalInterest").innerHTML = "$"+totalInterest.toFixed(2);
    document.getElementById("payBack").innerHTML = payBack;
    document.getElementById("totalNoOfPayments").innerHTML = noOfPayments;
    myFunc(totalInterest.toFixed(2));
  }

}
function changePayBack() {
  var compounding = parseInt(document.getElementById("compounding").value);
  document.getElementById("payback").value=compounding;
  computeNoOfPayments();
}
function changeCompounding() {
  var payback = parseInt(document.getElementById("payback").value);
  document.getElementById("compounding").value=payback;
}
function computeNoOfPayments(){
  var compounding = parseInt(document.getElementById("compounding").value);
  if(compounding != 0){
      var termYr = parseInt(document.getElementById("yearList").value);
      var termMonth = parseInt(document.getElementById("monthList").value);
      if(termMonth != 0 ){
        termYr = termYr + (termMonth/12);
      }
      console.log("computeNoOfPayments:",(termYr * compounding).toFixed(0));
      document.getElementById("noOfPayments").value=(termYr * compounding).toFixed(0);
  }
}

function resetForm(){
    document.getElementById("section-1").style.display = "block";
    document.getElementById("section-2").style.display = "block";
    document.getElementById("section-3").style.display = "none";

    document.getElementById("loanForm").reset();
    document.getElementById("compounding").value = 0;
    document.getElementById("yearList").value = 0;
    document.getElementById("monthList").value = 0;
    document.getElementById("payback").value = 0;
    document.getElementById("currentRate1").innerHTML = document.getElementById("interestRate").value;
    document.getElementById("noOfPayments").value = NaN;
}

function validateFields(){
  var loanAmount = parseInt(document.getElementById("loanAmount").value);
  var compounding = parseInt(document.getElementById("compounding").value);
  var termYr = parseInt(document.getElementById("yearList").value);
  var termMonth = parseInt(document.getElementById("monthList").value);

  if(isNaN(loanAmount)){
    window.alert("Enter valid Loan Amount");
    return false;
  }
  if(compounding == 0){
    window.alert("Compounding is mandatory.");
    return false;
  }
  if(termYr == 0 && termMonth == 0){
    window.alert("Enter valid Loan Term");
    return false;
  }
  return true;
}
