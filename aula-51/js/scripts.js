// 24/01/2023
//keydown
document.addEventListener("keydown", function(event) {
    // Evento que faz algo quando aperto em alguma tecla

    console.log(event.key) // Mostra as teclas que apertei

    if (event.key === "Enter") { // Se aperto o Enter
        console.log("Apertou Enter!"); // Aparece isso
    }

})

// keyup
document.addEventListener("keyup", function(event) {
    // Evento que faz algo após "soltar" o Enter

    if (event.key === "Enter") { // Se tiro o dedo do Enter
        console.log("Soltou Enter"); // Aparece isso
    }
}
);