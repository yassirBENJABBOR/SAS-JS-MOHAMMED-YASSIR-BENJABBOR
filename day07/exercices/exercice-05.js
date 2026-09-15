/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 05 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * EXTRACTION DES CLÉS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Utilisez Object.keys() sur votre objet utilisateur pour récupérer un tableau contenant toutes ses clés, et affichez sa longueur.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-05
 * ▶️ Commande : node day07/exercices/exercice-05.js
 */
'use strict';

const utilisateur = {
  nom: "Yassir benjabbor",
  age: 21,
  estAdmin: true
};

const clesUtilisateur = Object.keys(utilisateur);
console.log(clesUtilisateur.length);
