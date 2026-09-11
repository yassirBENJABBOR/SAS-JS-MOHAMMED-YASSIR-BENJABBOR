/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 02 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * ACCÈS PAR INDEX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez mot = "Programmation". Affichez la première lettre (index 0) et la toute dernière lettre en utilisant mot.length - 1.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-02
 * ▶️ Commande : node day05/exercices/exercice-02.js
 */
'use strict';
const mot = "Programmation";

const premiereLettre = mot[0];
const derniereLettre = mot[mot.length - 1];

console.log("Première lettre :", premiereLettre);
console.log("Dernière lettre :", derniereLettre);
