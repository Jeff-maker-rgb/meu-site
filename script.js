const button = document.getElementById("mybutton");

const message = document.getElementById("message");

const newButton = document.getElementById("button2");

const newMessage = document.getElementById("message2");

button.addEventListener("click", function() {
    
    button.style.display = "none";

    message.textContent = "Clique nesse botão para ver a mensagem!";

    newButton.style.display = "inline-block";


    document.body.appendChild(newButton);

    newButton.addEventListener("click", function() {
       
        message.textContent = "Tem certeza que quer ver a mensagem?"
        
        newButton.style.display = "none";

        const container = document.createElement("div");

        container.classList.add("container");

        container.style.display = "flex";

        container.style.justifyContent = "center";

        const buttonyes = document.createElement("button");
        
        buttonyes.textContent = "Sim";
        
        buttonyes.className = "button";

        const buttonno = document.createElement("button");
        
        buttonno.textContent = "Não";

        buttonno.className = "button";

        container.appendChild(buttonyes);

        container.appendChild(buttonno);

        document.body.appendChild(container);

        buttonyes.addEventListener("click", function() {
            
            message.textContent = "🖕​";

            container.remove();
        });

        buttonno.addEventListener("click", function() {

            message.textContent = "Então tá,os de verdade eu sei quem são";

            container.remove();
        });
    
    });
});
