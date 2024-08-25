function checkTip() {
    let billAmount = document.getElementById("bill").value;
    let tipPercentage = document.getElementById("tip").value;
    tipAmt = billAmount * (tipPercentage / 100);
    tipAmt = tipAmt.toFixed(2);
    let div = document.getElementById("grid");
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    let displaytip = document.createElement("h3");
    displaytip.innerHTML = "Your tip amount is: " + tipAmt + "$.";
    div.appendChild(displaytip)
    let totalbill = document.createElement("h3");
    totalbill.innerHTML = `Your total bill is: ${Number(billAmount) + Number(tipAmt)}$.`;
    div.appendChild(totalbill);
}