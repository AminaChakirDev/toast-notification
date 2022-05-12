console.log('connecté');

//Je sélectionne et je stocke
//L'élément bouton sur lequel cliquer pour déclencher les toasts
const btn = document.querySelector(".btn");
console.log(btn);

//L'élément container dans lequel ajouter les toasts
const container = document.querySelector(".container-notifications");
console.log(container);

//Je créé l'évènement au click sur le bouton
btn.addEventListener("click", function(){
    console.log("cliqué");
    //Je créé un élément
    const notification = document.createElement("div");
    console.log(notification);
    //Je donne un style à la DIV
    notification.classList.add("toast");
    //J'insère du contenu texte
    notification.innerText = "Votre fichier est bien enregistré";
    //J'accroche notification à l'élément parent container
    container.appendChild(notification);
    //A la fin du chrono, je supprime notification du DOM
    setTimeout(function(){
        notification.remove();
    }, 2000);
});



