//input values, porcentage
var qFarinha = document.getElementById("qFarinha");
var pFIntegral = document.getElementById("pFIntegral");
var pAgua = document.getElementById("pAgua");
var pFNatural = document.getElementById("pFNatural");
var pFInstantaneo = document.getElementById("pFInstantaneo");
var pSal = document.getElementById("pSal");

//result values, grams
var farinha = document.getElementById("farinha");
var farinhaIntegral = document.getElementById("farinhaIntegral");
var agua = document.getElementById("agua");
var sal = document.getElementById("sal");
var fermentoNatural = document.getElementById("fermentoNatural");
var fermentoInstantaneo = document.getElementById("fermentoInstantaneo");

//replace comma to a period
function validate(input) {
      input.value = input.value.replace(/,/g, ".");
}

document.getElementById("calcular").onclick = function() {
    
    //capture input values
    qFarinha = qFarinha.value;
    pFIntegral = pFIntegral.value;
    pAgua = pAgua.value;
    pFNatural = pFNatural.value;
    validate(pFInstantaneo);
    pFInstantaneo = pFInstantaneo.value;
    pSal = pSal.value;
        
    //change text content
    farinha.textContent = qFarinha-(qFarinha*(pFIntegral/100)) + " gramas";
    farinhaIntegral.textContent = qFarinha*(pFIntegral/100) + " gramas";
    agua.textContent = qFarinha*(pAgua/100) + " gramas";
    sal.textContent = qFarinha*(pSal/100) + " gramas";

    if(qFarinha*(pFInstantaneo/100) == 1) {
        fermentoInstantaneo.textContent = qFarinha*(pFInstantaneo/100) + " grama";   
    } else {
        fermentoInstantaneo.textContent = qFarinha*(pFInstantaneo/100) + " gramas";           
    }        
    fermentoNatural.textContent = qFarinha*(pFNatural/100) + " gramas";

    // document.getElementById("copiar").onclick = function() {
    //     var text = document.getElementById('receita').innerText;
    //     navigator.clipboard.writeText(text).then(() => {
    //     console.log('Content copied to clipboard');
    //     /* Resolved - text copied to clipboard successfully */
    //     },() => {
    //     console.error('Failed to copy');
    //     /* Rejected - text failed to copy to the clipboard */
    //     });
    // }

    document.getElementById("copiar").onclick = function() {
        var text = document.getElementById('receita').innerText;
        navigator.clipboard.writeText(text);
    }

    
    
}

