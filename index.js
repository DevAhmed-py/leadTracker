let myLeads = []
const inputE = document.getElementById("input-e")
const inputBtn = document.getElementById("input-btn")
const ulE = document.getElementById("ul-e")
const dltBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

let leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"))

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]}">
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulE.innerHTML = listItems
}

if (leadsFromLocal) {
    myLeads = leadsFromLocal
    
    render(myLeads)
}

tabBtn.addEventListener("clicks", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))

        render(myLeads)
    })
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputE.value)
    inputE.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    render(myLeads)
})

dltBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []

    render(myLeads)
})