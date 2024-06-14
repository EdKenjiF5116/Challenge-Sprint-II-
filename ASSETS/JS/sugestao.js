document.querySelector(".enviar").addEventListener("click", () => {
    
    const nome = document.querySelector("#nome").value
    const email = document.querySelector("#email").value

    alert("Agradecemos pela sugestão " + nome + "! Quem sabe não entramos em contato futuramente para mais?"+
        "Atenciosamente, "+
        "grupo SanofiSync.")

})