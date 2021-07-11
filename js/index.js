document.addEventListener('DOMContentLoaded', () => {

fetchMonsters()
buttonClick()
createForm()

})
let currentPage = 1

function fetchMonsters(currentPage) {
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=${currentPage}`)
    .then(resp => resp.json())
    .then(data => data.forEach(eachMonster))
}

function createForm() {
    let monsterForm = document.createElement('form')
    let nameInput = document.createElement('input')
    let ageInput = document.createElement('input')
    let descInput = document.createElement('input')
    let submitBttn = document.createElement('button')

    nameInput.type = "text"
    nameInput.placeholder = "Name..."

    ageInput.type = "text"
    ageInput.placeholder = "Age..."

    descInput.type = "text"
    descInput.placeholder = "Description..."

    submitBttn.type= "submit"
    submitBttn.textContent = "Create"

    document.querySelector('#create-monster').append(monsterForm)
    monsterForm.append(nameInput, ageInput, descInput, submitBttn)
    
}

function eachMonster(monster){
    // console.log(monster)
    // console.log(monster)

    let monsterContainer = document.createElement('div')
    let monsterName = document.createElement('h2')
    let monsterAge = document.createElement('h4')
    let monsterDesc = document.createElement('p')

    monsterName.textContent = monster.name
    monsterAge.textContent = monster.age
    monsterDesc.textContent = monster.description

    monsterContainer.append(monsterName, monsterAge, monsterDesc)
    document.querySelector('#monster-container').append(monsterContainer)


    

}
function buttonClick() {
    document.querySelector('#forward').addEventListener('click', () => {
        currentPage++
        document.querySelector('#monster-container').textContent = ""
        fetchMonsters(currentPage)
    })

    document.querySelector('#back').addEventListener('click', () => {
        currentPage--
            if (currentPage < 1) {
                alert('No more monsters here!')
            }
        document.querySelector('#monster-container').textContent = ""
        fetchMonsters(currentPage)
    
    })

}