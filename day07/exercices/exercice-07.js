/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 07 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * TABLEAU D'OBJETS BASIQUE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un tableau contenant 3 objets représentant des livres (titre, auteur). 
 * Affichez le titre du 2ème livre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-07
 * ▶️ Commande : node day07/exercices/exercice-07.js
 */
'use strict';

const livres = [
  { titre: "Antigone", auteur: "yassir" },
  { titre: "la boite a merveille", auteur: "saad" },
  { titre: "DEV", auteur: "mohammed" }
];

console.log(livres[1].titre);
console.log(livres[2].auteur);