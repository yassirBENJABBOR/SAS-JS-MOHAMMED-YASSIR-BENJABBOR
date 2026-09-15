/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

const candidats = [
  { nom: "yassir", score: 85 },
  { nom: "saad", score: 92 },
  { nom: "mohammed", score: 78 }
];

function meilleurCandidat(candidats) {
  let meilleur = candidats[0];
  for (const candidat of candidats) {
    if (candidat.score > meilleur.score) {
      meilleur = candidat;
    }
  }
  return meilleur.nom;
}
console.log(meilleurCandidat(candidats));   