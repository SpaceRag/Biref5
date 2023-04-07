
///////////////////////////////////////////////////////////////////

//Déclaration de const 
const home: HTMLElement | null = document.querySelector("#home")
const game: HTMLElement | null = document.querySelector("#game")
const startBtn: HTMLElement | null = document.querySelector(".btn")
const gekPerso = document.querySelector("#geko") as HTMLElement
const catPerso = document.querySelector("#cat") as HTMLElement
const foxPerso = document.querySelector("#fox") as HTMLElement
const inputPersoName = document.querySelector("#perso_name") as HTMLInputElement

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

    // Fais spawn le perso selected
    const selectedPersoClone = selectedPersoElement?.cloneNode(true) as HTMLElement
    const interiorSpaceShip = document.querySelector("#interiorSpaceShip")

    // Remove la class du parent clone
    selectedPersoClone.classList.remove("selectedPerso")

    // Ajoute la class active
    selectedPersoClone.classList.add("selectedPilote")

    // Spawn le perso
    interiorSpaceShip?.append(selectedPersoClone)
    console.log(selectedPersoClone)
    // Positionne l'élément de manière absolue par rapport à son parent
    selectedPersoClone.style.position = "absolute"

    // Ajuste sa position à l'intérieur du conteneur parent
    selectedPersoClone.style.top = "42%"
    selectedPersoClone.style.left = "40%"
    selectedPersoClone.style.transform = "translate(-50%, -50%)"


    // Appel des fonctions pour chaque jauge
    const interval1 = setInterval(() => {
      decreaseBar('food')
    }, 1500) // Diminue la jauge toutes les secondes
    initBar('food', 'btnfood')

    const interval2 = setInterval(() => {
      decreaseBar('water')
    }, 1000)
    initBar('water', 'btnwater')

    const interval3 = setInterval(() => {
      decreaseBar('special')
    }, 2000)
    initBar('special', 'btnspc')

  }

})


// STATS BARS IN GAME SECTION ///////////////////////////////

// Fonction qui diminue la jauge
function decreaseBar(barId: string) {
  const bar = document.getElementById(barId) as HTMLProgressElement
  bar.value -= 2
  if (bar.value === 0) {
    // console.log('Game Over')
    // location.reload()
  }
}


// Fonction qui initialise la jauge et le bouton
function initBar(barId: string, buttonId: string) {
  const bar = document.getElementById(barId) as HTMLProgressElement
  const button = document.getElementById(buttonId) as HTMLButtonElement
  bar.value = 100
  // console.log(buttonId)
  // Incrémentation au click sur button
  button.onclick = () => {
    bar.value += 10
    bar.style.animation = "grow 0.5s ease-in-out"
  }
}



// GAME OVER //////////////////////////////////////

