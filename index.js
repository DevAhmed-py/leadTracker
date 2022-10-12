let myLeads = []
const inputE = document.getElementById("input-e")
const inputBtn = document.getElementById("input-btn")
const ulE = document.getElementById("ul-e")

inputBtn.addEventListener("click", function btnClicked() {
    myLeads.push(inputE.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    ulE.innerHTML += "<li>" + myLeads[i] + "</li>"
}