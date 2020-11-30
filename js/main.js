//select the h1 element to be used later
let header = document.querySelector("#h1")

//create the warning input
let warning = document.createElement('p')
warning.textContent = "please input a valid value"

// create the warning div
let warningDiv = document.createElement('div')
warningDiv.id = "warningDiv"

// append the warning text to the warning div
warningDiv.textContent = warning.textContent

// grab the button to listen for clicks
let addButton = document.querySelector('#add-item-btn')


// grab the main container to move the header
let mainC = document.querySelector("#main-container")

// grab the form id to appent the output
let formDiv = document.getElementById("form-div")

let removeButton = document.querySelector("#clear-item-btn")

// create div for the output and icons
function listLogic(){
     // select the input field and get the input value from the input
     let taskInput = document.querySelector('#text-input').value

    // ensure an emty input is not submitted
    if (taskInput.length === 0){
        header.before(warningDiv)
        setTimeout("mainC.removeChild(warningDiv)", 2000)
    }  else {

        // create main div for the output
        let outputDiv = document.createElement("div")
        outputDiv.className = ("output-list")

        // design the div
        outputDiv.style.display = "flex"
        outputDiv.style.justifyContent = "space-between"
        outputDiv.style.width = "58vw"
        outputDiv.style.margin = "auto"
        outputDiv.style.marginTop = "1.5rem"

        // create the output area
        let outputP = document.createElement('p')

        // // set up and structure the interactive icons using a list
        let ul = document.createElement("ul")
        let li1 = document.createElement("li")
        let li2 = document.createElement("li")

        ul.id = 'ul'
        ul.style.display = "flex"

        li1.textContent = "Done"
        li2.textContent = "Delete"

        li1.style.paddingLeft = "0.5rem"
        li2.style.paddingLeft = "0.5rem"
        
        li1.style.listStyleType = "none"
        li2.style.listStyleType = "none"

        li1.style.cursor = "pointer"
        li2.style.cursor = "pointer"

        li1.className = "text-success"
        li2.className = "text-danger"

        ul.appendChild(li1)
        ul.appendChild(li2)

        // populate the output with input
        outputP.textContent = taskInput

        // append the output to the div
        outputDiv.appendChild(outputP)
        
        // appent the ul to the output list
        outputDiv.appendChild(ul)

        // append the output to the form 
        formDiv.appendChild(outputDiv)
    }   taskInput = ''
}

// use key to interact with app
body.addEventListener('keypress', function(e){
    // use enter key to create lists
    if (e.keyCode === 13){
        listLogic()
    }
    
    // use keycode to remove all list items
    if (e.keyCode === 46){
        confirm('This action will delete all your lists')
        while(e.target.previousElementSibling.lastChild.className === "output-list"){
            e.target.previousElementSibling.lastChild.remove()
        }
    }

    // use keycode to clear input field
    if (e.keyCode === 8){
        taskInput = ""
    }
})


// use click to interact with app
body.addEventListener('click', (e) => {
    // use click to remove all list items
    if(e.target.id === 'add-item-btn'){
        listLogic()
        e.target.blur()
    }   

     // use click to remove done list items
    if(e.target.className === 'text-success'){
        e.target.parentElement.parentElement.style.color = '#D3D3D3'
        e.target.blur()
    }

     // use click to remove single list items
    if(e.target.className === 'text-danger'){
        confirm('are you sure?')
        e.target.parentElement.parentElement.remove()
        e.target.blur()
    }

     // use click to remove all list items
    if(e.target.className === 'clear-item-btn'){
        confirm('This action will delete all your lists')
        while(e.target.previousElementSibling.lastChild.className === "output-list"){
            e.target.previousElementSibling.lastChild.remove()
        }

        e.target.blur()
    }

})