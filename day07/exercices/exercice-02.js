/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 02 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * MISE À JOUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Changez l'âge de l'utilisateur précédent pour l'augmenter de 1, et ajoutez-lui une propriété email.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-02
 * ▶️ Commande : node day07/exercices/exercice-02.js
 */
'use strict';

const utilisateur = {
  nom: "Yassir benjabbor",
  age: 21,
  estAdmin: true
};

utilisateur.age += 1;
utilisateur.email = "mohammed.yassir109@gmail.com";

console.log(utilisateur);   