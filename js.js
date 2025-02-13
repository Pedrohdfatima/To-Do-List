window.addEventListener("load", () => {
    const tareSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tareSalvas.forEach(tarefa => { // Corrigido o nome da variável
        const li = document.createElement("li");
        li.textContent = tarefa.text;
        if (tarefa.completo) li.classList.add("completo"); // Corrigido para "tarefa"
        
        // Adiciona botão de excluir
        const deletarBtn = document.createElement("button");
        deletarBtn.textContent = "❌";
        deletarBtn.addEventListener("click", () => {
            li.remove();
            salvarLocalStorage();
        });
        li.appendChild(deletarBtn);
        
        document.querySelector(".lista").appendChild(li);
    });
});



function addList() {
    const input = document.getElementById("tarin");
    const texto = input.value.trim();


    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = texto;

    // Botão de excluir
    const deletarBtn = document.createElement("button");
    deletarBtn.textContent = "❌";
    deletarBtn.addEventListener("click", () => {
        li.remove();
        salvarLocalStorage();
    });
    li.appendChild(deletarBtn);

    // Marcar como concluído
    li.addEventListener("click", () => {
        li.classList.toggle("completo");
        salvarLocalStorage(); // Atualiza ao marcar
    });

    document.querySelector(".lista").appendChild(li);
    input.value = "";
    salvarLocalStorage(); // Salva após adicionar
}

// Função para salvar no localStorage
function salvarLocalStorage() {
    const tarefas = Array.from(document.querySelectorAll("li")).map(li => ({
        text: li.textContent.replace("❌", "").trim(),
        completo: li.classList.contains("completo")
    }));
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

// Eventos
document.getElementById("add").addEventListener("click", addList);
document.getElementById("tarin").addEventListener("keyup", (event) => {
    if (event.key === "Enter") addList();
});

function verificar(texto){
    text: li.textContent.replace("❌", "").trim();
    
}