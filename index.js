let myLeads = []
const inputE = document.getElementById("input-e")
const inputBtn = document.getElementById("input-btn")
const ulE = document.getElementById("ul-e")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputE.value)
    inputE.value = ""
    renderLeads()
})

function renderLeads() {

}
for (let i = 0; i < myLeads.length; i++) {
    let listItems = ""
    listItems += `
        <li>
            <a target="_blank" href="${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li>
    `
}
ulE.innerHTML = listItems