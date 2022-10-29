var amount, years, rate;
function AmountChange(){
    amount = document.getElementById("rangeAmount").value;
    document.getElementById("lblAmount").innerHTML = `&#8377; ${amount}`;
}
function YearChange(){
    years = document.getElementById("rangeYear").value;
    document.getElementById("lblYear").innerHTML = `${years}`;
}
function RateChange(){
    rate = document.getElementById("rangeRate").value;
    document.getElementById("lblRate").innerHTML = `${rate}%`;
}
function Calculate(){
    var p = parseFloat(amount);
    var n = parseInt(years) * 12;
    var r = parseFloat(rate)/12/100;
    var EMI =  p * r / (1- (Math.pow(1/(1 + r), n)));
    document.getElementById("lblResult").innerHTML = `
       You EMI amount is &#8377; <b>${Math.round(EMI)}</b> per month
    `;
}