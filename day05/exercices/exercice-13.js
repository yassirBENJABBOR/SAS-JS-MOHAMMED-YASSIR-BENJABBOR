/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FORMATAGE MONÉTAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction formater(montant) qui prend 1234567 (Number ou String) et retourne "1 234 567 MAD". (Vous pouvez chercher comment utiliser les regex pour insérer des espaces, ou utiliser les boucles/slice).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day05/exercices/exercice-13.js
 */
'use strict';


function formater(montant) {
  const montantStr = montant.toString();
  const montantFormate = montantStr.replace(/(?=(\d{3})+(?!\d))/g, " ");
  return montantFormate + " MAD";
}

console.log(formater(134567));
console.log(formater("987654321"));console.log(formater("987654321"));