// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A5 — Le nombre mystère (Niveau 3 — Avancé)

Objectif : construire un jeu complet avec while, prompt(), Number(), conditions et compteur.
Contexte : le jeu de la pause déjeuner : deviner un nombre entre 1 et 100 en 7 essais maximum.

Consignes :
1. Tire un nombre entier aléatoire entre 1 et 100 avec Math.random() et Math.floor().
2. Tant que le joueur n'a pas trouvé et qu'il lui reste des essais, demande un nombre avec prompt().
3. Refuse une saisie qui n'est pas un nombre (sans compter l'essai).
4. Réponds « plus grand », « plus petit » ou « trouvé en X essais ! ».
5. Si les 7 essais sont épuisés, révèle le nombre.

Résultat attendu :
un jeu jouable dans la console du navigateur, qui ne plante jamais, même si on tape « abc ».

Recherche (à rédiger dans RECHERCHES.md) :
Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


const nombreMystere = Math.floor(Math.random() * 100) + 1;
const maxEssais = 7;
let essaisRestants = maxEssais;
let trouve = false

console.log("=== Début du jeu : Le Nombre Mystère ! ===");
while (essaisRestants > 0 && !trouve) {
    const saisie = prompt(`Devine le nombre (entre 1 et 100). Essais restants : ${essaisRestants}`);
    const nombreSaisi = Number(saisie);

    if (isNaN(nombreSaisi)) {
        alert("Veuillez entrer un nombre valide.");
    } else if (nombreSaisi < 1 || nombreSaisi > 100) {
        alert("Veuillez entrer un nombre entre 1 et 100.");
    } else {
        essaisRestants--;
        if (nombreSaisi === nombreMystere) {
            trouve = true;
            console.log(`Félicitations ! Vous avez trouvé le nombre mystère en ${maxEssais - essaisRestants} essais.`);
        } else if (nombreSaisi < nombreMystere) {
            console.log("Le nombre mystère est plus grand.");
        } else {
            console.log("Le nombre mystère est plus petit.");
        }
    }
}

if (!trouve) {
    console.log(`Dommage ! Le nombre mystère était ${nombreMystere}.`);
}