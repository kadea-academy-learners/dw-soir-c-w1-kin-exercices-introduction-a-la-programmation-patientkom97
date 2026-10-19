# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

 NaN; C'est l'acronyme de "Not a Number" (Pas un nombre). Malgré son nom, c'est une valeur numérique spéciale en JavaScript qui indique le résultat d'une opération mathématique invalide ou impossible (par exemple, convertir une lettre en nombre avec Number('abc') ou faire 0 / 0).

Pourquoi NaN === NaN renvoie false ? C'est une règle définie par la norme internationale IEEE 754 pour les calculs informatiques. NaN représente une valeur indéfinie ou erronée ; logiquement, on ne peut pas affirmer qu'une erreur ou une valeur inconnue est strictement égale à une autre erreur ou valeur inconnue.

Quelle fonction utiliser pour le détecter ? Il faut utiliser la méthode Number.isNaN() (ex: Number.isNaN(valeur)), qui permet de vérifier de manière fiable si une variable vaut exactement NaN sans provoquer de faux positifs.
**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :**https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

En JavaScript, l'opérateur modulo conserve le signe du nombre de gauche (le dividende). Par conséquent, `-7 % 2` renvoie **`-1`** et non `1`.

Si l'on teste si un nombre est impair avec `nombre % 2 === 1`, cela fonctionnera pour les nombres positifs, mais **ça échouera pour les nombres négatifs** (puisque `-7 % 2` donne `-1`, ce qui est différent de `1`). 
En testant `nombre % 2 !== 0`, on capture tous les nombres impairs, qu'ils soient positifs ou négatifs.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :**https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

On peut les enlever **uniquement lorsqu'il y a un et un seul paramètre** (par exemple : `const doubler = x => x * 2;`). Si la fonction n'a aucun paramètre (`() => ...`) ou a deux paramètres et plus (`(a, b) => ...`), les parenthèses sont obligatoires.

On peut les enlever `return` et les accolades ensemble dans une **fonction à corps concis** (expression body) lorsque le code tient sur une seule ligne et retourne directement une valeur. 
- Avec accolades `{ return ... }`, on a un bloc d'instructions (nécessaire s'il y a plusieurs lignes de code).
- Sans accolades `=> expression`, le résultat de l'expression est **automatiquement retourné** (retour implicite).
**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Remainder 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Le mot-clé `continue` permet d'**interrompre l'itération en cours** d'une boucle (for, while, do...while) et de passer immédiatement à l'itération suivante, en sautant tout le code qui suit dans le bloc pour ce tour précis.

- **`continue`** saute **un seul tour** de boucle et continue le reste de la répétition.
- **`break`** stoppe et **casse complètement la boucle** d'un coup, sortant définitivement de celle-ci, peu importe le nombre de tours restants.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/continue 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/break 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

## M1 — FizzBuzz kinois

### Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?
parce qu'il permet de repérer instantanément les candidats qui manquent totalement de bases logiques en programmation. 

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :**https://megalodon.jp/2017-0307-0400-10/tickletux.wordpress.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/ 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

Les ordinateurs calculent en binaire (avec des 0 et des 1). Des nombres décimaux simples comme `0.1` ou `0.2` ne peuvent pas être écrits de façon exacte en binaire. JavaScript utilise donc une petite approximation, ce qui donne `0.30000000000000004` au lieu d'un `0.3` parfait.

La méthode `.toFixed()` transforme ton nombre en **texte (string)**. 
Si tu essayes de faire un nouveau calcul avec ce résultat, JavaScript va coller les textes ensemble au lieu de faire une vraie addition mathématique (par exemple, `"0.30" + 5` donnera `"0.305"` au lieu de `5.30`). Pour continuer à calculer, il faut le reconvertir en nombre.

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**


La méthode `.reduce()` sert à "réduire" un tableau à une seule valeur (comme un total, une multiplication ou un objet). Elle prend une fonction de rappel avec un accumulateur (qui garde en mémoire le résultat au fil des tours) et l'élément actuel.

const totalHeures = heuresSemaine.reduce((accumulateur, heure) => accumulateur + heure, 0);

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

On peut passer un deuxième paramètre à la méthode `console.table()` sous forme de tableau de chaînes de caractères contenant les noms des colonnes à afficher :



**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**


Pour trier les moyennes par ordre décroissant (du plus grand au plus petit) :
const bulletinTrie = bulletin.sort((a, b) => b.moyenne - a.moyenne);

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
