let myLeads = []
const inputE = document.getElementById("input-e")
const inputBtn = document.getElementById("input-btn")
const ulE = document.getElementById("ul-e")

let leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocal) {
    myLeads = leadsFromLocal
    renderLeads()
}
inputBtn.addEventListener("click", function() {
    myLeads.push(inputE.value)
    inputE.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${myLeads[i]}">
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulE.innerHTML = listItems
}