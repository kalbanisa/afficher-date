 // Déclaration du tableau des étudiants
const etudiants = [
    { prenom: "1 Jean", nom: "Dupont", age: 20  },
    { prenom: "2 Marie", nom: "Curie" },
    { prenom: "3 Pierre", nom: "Fermat" },
    { prenom: "4 Sophie", nom: "Germain" },
    { prenom: "5 René", nom: "Descartes"  },
    { prenom: "6 Blaise", nom: "Pascal" },
    { prenom: "7 Isaac", nom: "Newton"  },
    { prenom: "8 Albert", nom: "Einstein"  },
    { prenom: "9 Niels", nom: "Bohr" },
    { prenom: "10 Marie", nom: "Lavoisier" }
];

// Fonction pour ajouter les étudiants au tableau HTML
function afficherEtudiants() {
    const tableBody = document.querySelector("#tableEtudiants tbody");

    etudiants.forEach(etudiant => {
        const row = document.createElement("tr");

        Object.values(etudiant).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// Appel de la fonction pour afficher les étudiants
afficherEtudiants();
