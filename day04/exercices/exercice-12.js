/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE CALLBACK BASIQUE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction executerOperation(a, b, operation). operation sera une fonction passée en argument.
 * Appelez : executerOperation(5, 3, multiplier) (en utilisant la fonction multiplier créée plus tôt).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day03/exercices/exercice-12.js
 */
'use strict';
function executerOperation(a, b, operation) {
    if(operation ==="+"){
        return a + b ;
    }else if(operation === "-") {
        return a - b ;
    }else if(operation === "*"){
        return a * b ;
    }else if (operation === "/"){
        if (b!==0){
            return a / b ;

        }else{
           return "impossible de diviser sur le zero" ;

        }
    }   
}
console.log(executerOperation(5, 0, "/"));
