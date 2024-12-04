// Déclaration des variables pour stocker les éléments DOM nécessaires
let todoItem;
const formEditItem = document.getElementById("edit-item");
const formNewItem = document.getElementById("new-item");
const editTodoField = document.getElementById("edit-todo-item-title");

// Fonction principale pour gérer l'édition d'un todo existant
// Affiche le formulaire d'édition et remplit le champ avec les informations actuelles enlever le newItem et afficher le EditItem 
function modifierTodo(n) {
    editTodoField.value = n.innerText;
    formEditItem.hidden = false;
    formNewItem.hidden = true;
    editTodoField.focus();
    todoItem = n; // Sauvegarde l'élément todo à éditer
}

// Fonction pour annuler l'édition ou l'ajout d'un todo
// Réinitialise le formulaire d'édition et réaffiche celui d'ajout
function annulerModification() {
    editTodoField.value = "";
    todoItem = undefined;
    formEditItem.hidden = true;
    formNewItem.hidden = false;
}

// Fonction pour confirmer la modification d'un todo
// Met à jour le contenu du todo et réinitialise les formulaires
function confirmerModification() {
    todoItem.innerText = editTodoField.value;
    annulerModification();
}

// Fonction pour ajouter un nouveau todo à la liste
// Crée un nouvel élément de todo avec des boutons pour l'éditer et le supprimer
function ajouterTodo() {
    const nouveauTitre = document.getElementById("new-todo-item-title");
    const titreText = nouveauTitre.value;
    const listeTodos = document.getElementById("todo-list");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const boutonSupprimer = document.createElement("button");
    const boutonEditer = document.createElement("button");

    span.innerText = titreText;
    boutonSupprimer.innerText = "Delete";
    boutonEditer.innerText = "Edit";

    // Écouteurs d'événements pour les boutons de suppression et d'édition
    boutonSupprimer.addEventListener("click", () => li.remove());
    boutonEditer.addEventListener("click", () => modifierTodo(span));

    li.append(span);
    li.append(boutonSupprimer);
    li.append(boutonEditer);

    listeTodos.append(li);

    // Réinitialisation du champ d'ajout
    nouveauTitre.value = "";
}

// Écouteurs d'événements pour les actions sur les todos (ajout et modification)
function gererAjoutTodo(n) {
    if (n.which === 13) ajouterTodo();
}

function gererModificationTodo(n) {
    if (n.which === 13) confirmerModification();
}

// Ajout des écouteurs d'événements sur les champs de saisie et les boutons
document.getElementById("new-todo-item-title").addEventListener("keypress", gererAjoutTodo);
document.getElementById("new-todo-item-add").addEventListener("click", ajouterTodo);
document.getElementById("edit-todo-item-title").addEventListener("keypress", gererModificationTodo);
document.getElementById("edit-todo-item-confirm").addEventListener("click", confirmerModification);
document.getElementById("edit-todo-item-cancel").addEventListener("click", annulerModification);
