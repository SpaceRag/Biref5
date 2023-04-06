
///////////////////////////////////////////////////////////////////

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
let selectedPersoElement: HTMLElement | null = null

// Fonction pour cacher tous les personnages sauf celui sélectionné
function hideOtherCharacters(selectedCharacter: HTMLElement | null, characterList: HTMLElement[]) {
  for (let i = 0; i < characterList.length; i++) {
    const character = characterList[i];
    if (character !== selectedCharacter) {
      character.classList.remove('show')
      character.classList.add('hide')
    }
  }
}

// SECTION HOME 

// Perso Selection 

// Quand le user click sur un perso les autres disparaissent 
gekPerso?.addEventListener('click', function (event: Event) {
  hideOtherCharacters(gekPerso, [catPerso, foxPerso])
  gekPerso.classList.add("selectedPerso")
  selectedPersoElement = gekPerso
})

catPerso?.addEventListener('click', function (event: Event) {
  hideOtherCharacters(catPerso, [gekPerso, foxPerso])
  catPerso.classList.add("selectedPerso")
  selectedPersoElement = catPerso
})

foxPerso?.addEventListener('click', function (event: Event) {
  hideOtherCharacters(foxPerso, [gekPerso, catPerso])
  foxPerso.classList.add("selectedPerso")
  selectedPersoElement = foxPerso
})

// User Perso Input

inputPersoName?.addEventListener("input", function (event: Event) {
  username = (event.target as HTMLInputElement).value
})

// Quand le user click sur le btn start -> affiche la section "game" 
// Uniquement SI le user a rempli l'input. 

startBtn?.addEventListener('click', function (event: Event) {
  if (!username || !selectedPersoElement) {
    inputPersoName.value = errorMessage
    inputPersoName.style.color = "red"

  } else {
    home?.classList.remove('display')
    home?.classList.add('hidden')
    game?.classList.remove('hidden')
    game?.classList.add('display')
  
    const interval1 = setInterval(() => {
      decreaseBar('food')
    }, 1000) // Diminue la jauge toutes les secondes
    initBar('food', 'btnfood')
    
    const interval2 = setInterval(() => {
      decreaseBar('water')
    }, 1000) 
    initBar('water', 'btnwater')
    
    const interval3 = setInterval(() => {
      decreaseBar('special')
    }, 1000) 
    initBar('special', 'btnspc')
    
    // Fais spawn le perso selected
    const selectedPersoClone = selectedPersoElement?.cloneNode(true) as HTMLElement
    const gameSection = document.querySelector("#game")
    // Remove la class du parent clone
    selectedPersoClone.classList.remove("selectedPerso")
    // Ajoute la class active
    selectedPersoClone.classList.add("selectedPilote")
    gameSection?.appendChild(selectedPersoClone)
  }
})


// STATS BARS IN GAME SECTION ///////////////////////////////

// Fonction qui diminue la jauge
function decreaseBar(barId: string) {
  const bar = document.getElementById(barId) as HTMLProgressElement
  bar.value -= 2
  if (bar.value === 0) {
    clearInterval(interval1)
    clearInterval(interval2)
    clearInterval(interval3)
    console.log('Game Over')
    location.reload()
  }
}


// Fonction qui initialise la jauge et le bouton
function initBar(barId: string, buttonId: string) {
  const bar = document.getElementById(barId) as HTMLProgressElement
  const button = document.getElementById(buttonId) as HTMLButtonElement
  bar.value = 100
  console.log(buttonId)
  // Incrémentation au click sur button
  button.onclick = () => {
  bar.value += 10
  }
}

// Appel des fonctions pour chaque jauge
// const interval1 = setInterval(() => {
//   decreaseBar('food')
// }, 1000) // Diminue la jauge toutes les secondes
// initBar('food', 'btnfood')

// const interval2 = setInterval(() => {
//   decreaseBar('water')
// }, 1000) 
// initBar('water', 'btnwater')

// const interval3 = setInterval(() => {
//   decreaseBar('special')
// }, 1000) 
// initBar('special', 'btnspc')


// GAME OVER //////////////////////////////////////

