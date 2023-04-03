
//Déclaration de const 

const home: HTMLElement | null = document.querySelector("#home")
const game: HTMLElement | null = document.querySelector("#game")
const startBtn: HTMLElement | null = document.querySelector(".btn")
const gekPerso: HTMLElement | null = document.querySelector("#geko")
const catPerso: HTMLElement | null = document.querySelector("#cat")
const foxPerso: HTMLElement | null = document.querySelector("#fox")
const inputPersoName: HTMLElement | null = document.querySelector("#perso_name")
const errorMessage: string = "Enter Pilot Name"

// Déclaration Variable 
let username: string | null = null


// SECTION HOME 

// Perso Selection 

// Quand le user click sur un perso les autres disparaissent 
gekPerso?.addEventListener('click', function (event: Event) {
    catPerso?.classList.remove('show')
    catPerso?.classList.add('hide')

    foxPerso?.classList.remove('show')
    foxPerso?.classList.add('hide')

})

catPerso?.addEventListener('click', function (event: Event) {
    gekPerso?.classList.remove('show')
    gekPerso?.classList.add('hide')

    foxPerso?.classList.remove('show')
    foxPerso?.classList.add('hide')

})

foxPerso?.addEventListener('click', function (event: Event) {
    catPerso?.classList.remove('show')
    catPerso?.classList.add('hide')

    gekPerso?.classList.remove('show')
    gekPerso?.classList.add('hide')

})

// User Perso Input

inputPersoName?.addEventListener("input", function (event: Event) {
    username = (event.target as HTMLInputElement).value
})


// Quand le user click sur le btn start -> affiche la section "game" 
// Uniquement SI le user a rempli l'input. 

startBtn?.addEventListener('click', function (event: Event) {
    if (!username) {
        inputPersoName.value = errorMessage
        inputPersoName.style.color = "red"

    } else {

        home?.classList.remove('display')
        home?.classList.add('hidden')

        game?.classList.remove('hidden')
        game?.classList.add('display')

    }

})

