/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPTAGE DE MOTS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Comptez le nombre de mots dans une longue chaîne. *Attention aux espaces multiples !* (Un mot est généralement séparé par un espace).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day05/exercices/exercice-14.js
 */
'use strict';

const texte = "   Voici   une   chaîne   avec  beaucoup    d'espaces !   ";
function conpteureMot(texte){
const nettoyagetexte = texte.trim();
if (nettoyagetexte === "") {
    return 0 + ' mot';
  }else{
    return nettoyagetexte.split(/\s+/).length;
}
}
console.log(conpteureMot(texte));