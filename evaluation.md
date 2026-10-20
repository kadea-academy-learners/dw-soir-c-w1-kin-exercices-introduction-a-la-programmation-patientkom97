# 📊 Évaluation automatique — Semaine 13 (JavaScript)

> Générée le 2026-10-20 16:43 UTC · commit `9152e24` · évaluation déterministe basée uniquement sur le cahier d'exercices et le barème.

## Note finale : **7 / 15**

Exercices : **65 / 95** · Parfaits : 8 / 19 · Non rendus : 0

## 1. Résultat par exercice

| Exercice | Note /5 | Statut | Tests | Recherche /3 | Commit | Feedback |
|---|:-:|---|:-:|:-:|:-:|---|
| **F1** — Ma carte d'apprenant | **4** | 🟡 Règles non respectées | 5/5 | 0 | ✅ | Le résultat est bon, mais les règles ne sont pas toutes respectées : const par défaut, justification en commentaire, un seul gabarit littéral.<br>• `let` jamais réassigné : `age`, `surnom`, `ancienneFormation` → utilise `const`.<br>• Justifie en commentaire le choix de `const` ou `let` pour tes variables.<br>• `surnom` doit être déclaré sans valeur (`let surnom;`).<br>📚 Recherche non rédigée. |
| **F2** — Le convertisseur de saisie | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Le piège de la concaténation est identifié, corrigé avec Number() et tes prédictions sont vérifiées.<br>📚 Recherche incomplète : aucun test exécuté dans la console. |
| **F3** — Pair ou impair : le tirage des tickets | **5** | ✅ Parfait | 3/3 | 2 | ❌ | Parfait ! Modulo et égalité stricte maîtrisés, les cas 17, 24 et 0 sont corrects.<br>📚 Recherche incomplète : aucun test exécuté dans la console. |
| **F4** — Le contrôleur du bus | **2** | 🟠 Résultat incorrect | 0/5 | 0 | ✅ | Le tarif ou le statut est faux pour au moins un âge testé (3, 5, 16, 18, 30) : vérifie les bornes « moins de 5 » et « moins de 18 ».<br>• On attend « Statut : mineur — Tarif : 500 FC ».<br>• Avec age = 3, le statut ou le tarif est faux.<br>• Avec age = 5, le statut ou le tarif est faux.<br>• Avec age = 18, le statut ou le tarif est faux.<br>📚 Recherche non rédigée. |
| **F5** — Ma première fonction fléchée | **5** | ✅ Parfait | 4/4 | 2 | ❌ | Parfait ! Fonctions fléchées concises avec retour implicite et gabarit littéral.<br>📚 Recherche incomplète : aucun test exécuté dans la console. |
| **F6** — Le compte à rebours | **2** | 🟠 Résultat incorrect | 0/2 | 2 | ✅ | La séquence affichée est fausse : vérifie le départ (10), la condition (>= 1), le pas et le saut du 5.<br>• On attend 10, 9, 8, 7, 6, 4, 3, 2, 1, Décollage ! (le 5 est sauté).<br>• La version qui affiche seulement les pairs (10, 8, 6, 4, 2) est absente.<br>📚 Recherche incomplète : aucun test exécuté dans la console. |
| **M1** — FizzBuzz kinois | **4** | 🟡 Règles non respectées | 3/3 | 1 | ✅ | Le FizzBuzz est juste, mais respecte les consignes : boucle for, %, === et explication de l'ordre en commentaire.<br>• Explique en commentaire pourquoi l'ordre de tes conditions est important.<br>📚 Recherche incomplète : réponse reformulée trop courte ou vide (min. 120 caractères) ; aucun test exécuté dans la console. |
| **M2** — Le distributeur automatique (DAB) | **3** | 🟠 Résultat incorrect | 6/9 | 0 | ✅ | Au moins un retrait renvoie le mauvais message : vérifie l'ordre des règles (montant invalide → plafond → solde) et les cas limites (négatif, 500 000 FC, solde exact).<br>• `retirer(1000000, 600000)` renvoie 'Le montant maximum autorisé par retrait est de 500 000 FC' au lieu de 'Plafond dépassé : 500 000 FC maximum'.<br>• `retirer(20000, 600000)` renvoie 'Le montant maximum autorisé par retrait est de 500 000 FC' au lieu de 'Plafond dépassé…' (plafond vérifié avant le solde).<br>• Affiche le résultat des 4 appels du tableau avec console.log (en dehors de la fonction).<br>📚 Recherche non rédigée. |
| **M3** — Le détecteur de champs vides (Truthy / Falsy) | **5** | ✅ Parfait | 11/11 | 0 | ✅ | Parfait ! Les valeurs truthy / falsy sont maîtrisées, ternaire sans comparaison.<br>📚 Recherche non rédigée. |
| **M4** — Le score par défaut : \|\| contre ?? | **2** | 🟠 Résultat incorrect | 2/5 | 2 | ✅ | Le cas 0 est faux : `0 \|\| 'aucun'` renvoie 'aucun' car 0 est falsy ; `??` ne remplace que null et undefined.<br>• `afficherScore(15)` renvoie ReferenceError: afficherScore is not defined au lieu de 'Score : 15'.<br>• `afficherScore(undefined)` renvoie ReferenceError: afficherScore is not defined au lieu de 'Score : aucun'.<br>• Aucune version ne renvoie « Score : 0 » pour 0 : corrige avec `??`.<br>• Corrige le bug avec l'opérateur `??`.<br>📚 Recherche incomplète : aucun test exécuté dans la console. |
| **M5** — La vitre teintée (portée de bloc) | **1** | ❌ Erreur d'exécution | — | 0 | ✅ | Le programme s'arrête encore sur une erreur : une variable déclarée avec const dans un bloc { } n'existe pas en dehors. Une ReferenceError stoppe tout le script, c'est pour ça que afficher() ne s'exécutait jamais.<br>• SyntaxError: Identifier 'ville' has already been declared (ligne 64)<br>📚 Recherche non rédigée. |
| **M6** — Le détective du return | **1** | ❌ Erreur d'exécution | — | 1 | ✅ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• SyntaxError: Identifier 'doubler' has already been declared (ligne 52)<br>📚 Recherche incomplète : aucun test exécuté dans la console ; pas de lien précis vers une page source (MDN de préférence). |
| **M7** — La tirelire numérique | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Accumulateur bien initialisé, 12 tours exacts et bonus toutes les 4 semaines : 27000 FC.<br>📚 Recherche incomplète : aucun test exécuté dans la console. |
| **M8** — La batterie qui se décharge | **5** | ✅ Parfait | 3/3 | 2 | ✅ | Parfait ! Boucle while avec condition d'arrêt sûre et compteur : 6 h, 10 %.<br>📚 Recherche incomplète : aucun test exécuté dans la console. |
| **A1** — Kadea Express v2 : le calculateur de livraison | **2** | 🟠 Résultat incorrect | 0/9 | 3 | ✅ | Au moins un tarif est faux : « jusqu'à 5 km » inclut 5 (<=), « plus de 10 kg » exclut 10 (>), l'urgence multiplie tout le montant avant la TVA, puis Math.round().<br>• `calculerLivraison(3, 2)` renvoie 2000 au lieu de 2320.<br>• `calculerLivraison(10, 12, true)` renvoie 8250 au lieu de 9570.<br>• `calculerLivraison(20, 5)` renvoie 7000 au lieu de 8120.<br>• `calculerLivraison(5, 2)` renvoie 4000 au lieu de 2320.<br>📚 Recherche complète, testée et sourcée (MDN). |
| **A2** — Le moteur de paie v2 | **5** | ✅ Parfait | 7/7 | 2 | ✅ | Parfait ! Accumulateur avec .forEach(), heures supplémentaires et recherche du maximum corrects.<br>📚 Recherche incomplète : pas de lien précis vers une page source (MDN de préférence). |
| **A3** — L'inventaire en console | **5** | ✅ Parfait | 7/7 | 1 | ❌ | Parfait ! Tableau d'objets maîtrisé avec filter, map et find, cas undefined géré et vérifié avec console.table().<br>📚 Recherche incomplète : aucun test exécuté dans la console ; pas de lien précis vers une page source (MDN de préférence). |
| **A4** — Le classement de la promo | **1** | ❌ Erreur d'exécution | — | 1 | ✅ | Ton code s'arrête sur une erreur : lis le message, corrige la ligne indiquée et relance ton fichier avec node.<br>• ReferenceError: nombreAdmis is not defined<br>📚 Recherche incomplète : aucun test exécuté dans la console ; pas de lien précis vers une page source (MDN de préférence). |
| **A5** — Le nombre mystère | **3** | 🟠 Résultat incorrect | 2/4 | 0 | ✅ | Le jeu ne se comporte pas comme attendu : indices plus grand / plus petit, compteur qui ignore les saisies invalides, arrêt après 7 essais et révélation du nombre.<br>• Avec les saisies abc, 50, 25, 43 on attend « trouvé en 3 essais ! » (abc n'est pas compté).<br>• 7 « abc » puis 43 doit donner « trouvé en 1 essai » : une saisie invalide ne compte pas.<br>📚 Recherche non rédigée. |

## 2. Barème officiel (/15)

| Critère | Niveau | Points /3 | Feedback |
|---|---|:-:|---|
| Fondations : variables, types primitifs et conversions | Compétent : Satisfaisant (79 %) | **2** | Déclarations correctes avec const / let, aucun var. Les 5 types primitifs sont reconnus. Le piège '5' + 3 est identifié et corrigé avec Number().<br>_Preuves : F1, F2, M3_ |
| Logique conditionnelle et opérateurs | En développement : À améliorer (58 %) | **1** | Ordre des conditions erroné (MalewaWewa jamais affiché) ou confusion entre = et ===. Les cas limites ne sont pas testés.<br>_Preuves : F3, F4, M1, M2, M4_ |
| Fonctions, return et portée | En développement : À améliorer (45 %) | **1** | Confusion entre return et console.log() qui produit des undefined ou des NaN en chaîne. Fonctions appelées sans () ou avec les arguments dans le désordre.<br>_Preuves : F5, M2, M5, M6_ |
| Boucles, accumulateurs et méthodes de tableau | Compétent : Satisfaisant (80 %) | **2** | Boucle for correcte (départ, condition, pas), accumulateur initialisé avant la boucle, while avec une condition d'arrêt sûre. Résultats attendus exacts (27000 FC pour M7, 6 h pour M8).<br>_Preuves : F6, M1, M7, M8 ; niveau Avancé : A2, A3, A4, A5_ |
| Recherche, qualité du code et restitution | En développement : À améliorer (60 %) | **1** | Recherches partielles ou sans test. Peu de commits (un seul commit en fin de semaine).<br>_Recherches 40 % · commits par exercice 84 % · règles de code 74 %_ |
| **Total** | | **7 / 15** | |

## Comment lire cette évaluation

| Statut | Signification | Note /5 |
|---|---|:-:|
| ⬜ Non rendu | Fichier absent ou zone de travail vide / non modifiée | 0 |
| ❌ Erreur d'exécution | SyntaxError, ReferenceError, exception ou boucle infinie (> 2 s) | 1 |
| 🟠 Résultat incorrect | Au moins un résultat attendu du cahier n'est pas obtenu | 2 (3 si au moins la moitié des tests passe) |
| 🟡 Règles non respectées | Résultats justes, mais var, ==, concaténation, `function`, `let` inutile ou notion imposée absente | 4 |
| ✅ Parfait | Résultats justes et toutes les règles respectées | 5 |

Recherche /3 : 1 point pour une réponse rédigée (≥ 120 caractères), 1 point pour un test exécuté, 1 point pour un lien source précis. Commit : un commit dont le message cite l'exercice (ex. `feat: M2 dab`).

> ℹ️ L'explication orale de ton code reste évaluée par ton coach. Corrige, commit, merge sur `develop` et push : l'évaluation est relancée automatiquement.
