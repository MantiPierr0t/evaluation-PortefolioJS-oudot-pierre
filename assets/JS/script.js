
/* ==============================
   1. SELECTION DES ELEMENTS HTML
============================== */

const formulaire = document.querySelector("#form-commentaire");
const champNom = document.querySelector("#nom");
const champCommentaire = document.querySelector("#commentaire");
const listeCommentaires = document.querySelector("#liste-commentaires");
const messageErreur = document.querySelector("#message-erreur");


/* ==============================
   2. ENVOI DU FORMULAIRE
============================== */

formulaire.addEventListener("submit", function (event) {

    // Empêche le rechargement de la page
    event.preventDefault();

    // Récupération des valeurs saisies
    const nom = champNom.value.trim();
    const texteCommentaire = champCommentaire.value.trim();

    // Réinitialisation du message d'erreur
    messageErreur.textContent = "";
    messageErreur.classList.remove("visible");


    /* ==============================
       3. VALIDATION DES CHAMPS
    ============================== */

    if (nom.length < 2) {
        afficherErreur("Le nom doit contenir au moins 2 caractères.");
        return;
    }

    if (texteCommentaire.length < 10) {
        afficherErreur("Le commentaire doit contenir au moins 10 caractères.");
        return;
    }


    /* ==============================
       4. CREATION DU COMMENTAIRE
    ============================== */

    // Création de la carte du commentaire
    const carteCommentaire = document.createElement("article");
    carteCommentaire.classList.add("commentaire");

    // Création du nom de l'auteur
    const auteur = document.createElement("h4");
    auteur.textContent = nom;

    // Création du texte du commentaire
    const texte = document.createElement("p");
    texte.textContent = texteCommentaire;

    // Création du bouton de suppression
    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.textContent = "🗑️ Supprimer";
    boutonSupprimer.classList.add("btn-supprimer");
    boutonSupprimer.type = "button";


    /* ==============================
       5. SUPPRESSION DU COMMENTAIRE
    ============================== */

    boutonSupprimer.addEventListener("click", function () {

        carteCommentaire.remove();

    });


    /* ==============================
       6. AJOUT DANS LA PAGE
    ============================== */

    // Ajout des éléments dans la carte
    carteCommentaire.appendChild(auteur);
    carteCommentaire.appendChild(texte);
    carteCommentaire.appendChild(boutonSupprimer);

    // Ajout du commentaire en haut de la liste
    listeCommentaires.appendChild(carteCommentaire);


    /* ==============================
       7. REINITIALISATION DU FORMULAIRE
    ============================== */

    formulaire.reset();

});


/* ==============================
   8. AFFICHAGE DES ERREURS
============================== */

function afficherErreur(message) {

    messageErreur.textContent = message;
    messageErreur.classList.add("visible");

}
