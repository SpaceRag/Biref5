// retryButton?.addEventListener("click", function (event: Event) {
//     showPopup("La planète a besoin de vous !", "Je veux la protéger !");
// })

// function refresh() {
//     // code pour rafraîchir la page
//     location.reload()
// }
// // Création du html/css de la popup avec 'creatElement'
// function showPopup(message: string, buttonText: string) {
//     const popup = document.createElement("div")
//     popup.style.position = "fixed"
//     popup.style.top = "0"
//     popup.style.left = "0"
//     popup.style.width = "100%"
//     popup.style.height = "100%"
//     popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
//     popup.style.display = "flex"
//     popup.style.justifyContent = "center"
//     popup.style.alignItems = "center"
//     popup.style.background = "rgba(183, 182, 180, 0.504)"

//     const content = document.createElement("div")
//     content.style.backgroundColor = "white"
//     content.style.padding = "20px"
//     content.style.borderRadius = "10px"
//     content.style.textAlign = "center"

//     const text = document.createElement("p")
//     text.textContent = message;
//     text.style.marginBottom = "20px"

//     const button = document.createElement("button")
//     button.textContent = buttonText
//     button.style.padding = "1rem"
//     button.style.borderRadius = "20px"
//     button.style.borderStyle = "none"
//     button.style.boxShadow = " 5px 5px 5px rgba(0, 0, 0, 0.25)"
//     // Quand le button est cliké par le user ->
//     button.addEventListener("click", function () {
//         refresh();
//     });
    
//     // Fait apparaitre la popup 
//     content.appendChild(text)
//     content.appendChild(button)
//     popup.appendChild(content)
//     document.body.appendChild(popup)

// }