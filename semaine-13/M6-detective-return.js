// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
M6 — Le détective du return (Niveau 2 — Moyen)

Objectif : distinguer return et console.log() et traquer les undefined.

Consignes : chacune des trois fonctions de la zone de travail a un bug.
Trouve-le, explique-le en commentaire, corrige-le.

Code fourni :
const doubler = (n) => { n * 2; };
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!

const saluer = (prenom) => {
  return
    \`Mbote \${prenom}\`;
};
console.log(saluer('Ney'));        // undefined ?!

Résultat attendu après correction :
8, 660, Mbote Ney

Recherche (à rédiger dans RECHERCHES.md) :
Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

const doubler = (n) => { n * 2; };
console.log(doubler(4));           // undefined ?!

const calculerTva = (prix) => { console.log(prix * 0.16); };
const total = calculerTva(1000) + 500;
console.log(total);                // NaN ?!

const saluer = (prenom) => {
  return
  `Mbote ${prenom}`;
};
console.log(saluer('Ney'));        // undefined ?!

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)

//--- Bug 1 : Absence de return explicite ---
// Explication : Avec des accolades {}, la fonction ne retourne rien par défaut (elle renvoie undefined). 
// Il manquait le mot-clé `return` (ou retirer les accolades pour un retour implicite).
const doubler = (n) => {
  return n * 2;
};
console.log(doubler(4));         // -> 8


// --- Bug 2 : Utilisation de console.log au lieu de return dans un calcul ---
// Explication : `calculerTva` affichait le résultat dans la console mais retournait `undefined`. 
// Faire `undefined + 500` donne `NaN` (Not a Number). Il faut utiliser `return`.
const calculerTva = (prix) => {
  return prix * 0.16;
};
const total = calculerTva(1000) + 500;
console.log(total);              // -> 660


// --- Bug 3 : Le piège du saut de ligne avec return (ASI) ---
// Explication : JavaScript insère automatiquement un point-virgule après `return` à cause du saut de ligne, 
// ce qui fait que la fonction s'arrête immédiatement et renvoie `undefined`.
const saluer = (prenom) => {
  return `Mbote ${prenom}`;
};
console.log(saluer('Ney'));        // -> Mbote Ney