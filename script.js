const billEl = document.getElementById("bill-value")
const tipEl = document.getElementById("tip-value")
const pplEl = document.getElementById("ppl-value")
let bill = 0
let tip = 0
let ppl = 0
const billTotal = document.getElementById("bill-total")
const tipTotal = document.getElementById("tip-total")
const ppTotal = document.getElementById("pp-total")

billEl.addEventListener("change", function(){
    bill = Number(billEl.value)
})

tipEl.addEventListener("change", function(){
    tip = Number(tipEl.value / 100)
})

pplEl.addEventListener("change", function(){
    ppl = Number(pplEl.value)
    calculateTotals()
})

function calculateTotals(){
  tip = Number(tip * bill)
  tipTotal.textContent = "$" + tip
  billTotal.textContent =  "$" + (bill + tip)
  ppTotal.textContent = "$" + ((bill + tip)/ppl)
}



