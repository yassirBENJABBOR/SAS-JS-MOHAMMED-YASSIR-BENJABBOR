/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 03 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * CONVERTISSEUR DE DEVISE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction madToEur(mad) qui prend un montant en dirhams et le convertit en euros (considérez 1 EUR = 10.8 MAD).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-03
 * ▶️ Commande : node day03/exercices/exercice-03.js
 */
'use strict';

function madToEur(n){
    return n * 10.8
    
}
console.log(madToEur(3).toFixed(2))