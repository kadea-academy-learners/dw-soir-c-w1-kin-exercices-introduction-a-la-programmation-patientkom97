// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M7 — La tirelire numérique (Niveau 2 — Moyen)

Objectif : utiliser une boucle for avec un accumulateur et une condition à l'intérieur.
Contexte : Patience épargne 2 000 FC par semaine ; toutes les 4 semaines, sa tante ajoute un bonus de 1 000 FC.

Consignes :
1. Simule 12 semaines avec une boucle.
2. À chaque tour, affiche : Semaine 4 : 9000 FC (bonus !).
3. Affiche le total final.

Résultat attendu :
Total après 12 semaines : 27000 FC

Recherche (à rédiger dans RECHERCHES.md) :
Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)


let totalEpargne = 0;
const epargneHebdomadaire = 2000;
const bonusTante = 1000;
const nombreSemaines = 12;

for (let semaine = 1; semaine <= nombreSemaines; semaine++) {
    totalEpargne += epargneHebdomadaire;

    if (semaine % 4 === 0) {
        totalEpargne += bonusTante;
        console.log(`Semaine ${semaine} : ${totalEpargne} FC (bonus !)`);
    } else {
        console.log(`Semaine ${semaine} : ${totalEpargne} FC`);
    }
}

console.log(`Total après ${nombreSemaines} semaines : ${totalEpargne} FC`);