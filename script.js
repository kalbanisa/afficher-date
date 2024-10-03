// Créer un nouvel objet Date pour obtenir la date actuelle
let dateActuelle = new Date();

// Utiliser toLocaleDateString() pour formater la date en français
let dateEnFrancais = dateActuelle.toLocaleDateString('fr-FR', {
    weekday: 'long', // Affiche le jour de la semaine
    year: 'numeric', // Affiche l'année
    month: 'long', // Affiche le mois
    day: 'numeric' // Affiche le jour
});

// Afficher la date formatée dans l'élément avec l'ID "date"
document.getElementById('date').textContent = dateEnFrancais;
