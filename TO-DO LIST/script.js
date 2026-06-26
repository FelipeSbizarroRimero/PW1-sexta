const botaoEnviar = document.querySelector("#enviar");
const botaoLimpar = document.querySelector("#limpar");
const contador = document.querySelector("#contador");
const listaTarefas = document.querySelector("#listaTarefas");

let quantidadeTarefas = 0;

contador.textContent = 0;

function adicionarTarefa(e) {

    e.preventDefault();

    const inputTarefa = document.querySelector("#inputTarefa");

    if (!inputTarefa.value.trim()) {

        inputTarefa.style.border = "1px solid red";

        alert("🤔 Digite uma tarefa");

        return;
    }

    inputTarefa.style.border = "1px solid #dee2e6";

    const tarefa = document.createElement("li");
    const botaoExcluir = document.createElement("button");
    const texto = document.createTextNode(inputTarefa.value);

    tarefa.setAttribute(
        "class",
        "tarefa list-group-item d-flex justify-content-between align-items-center"
    );

    botaoExcluir.setAttribute(
        "class",
        "btn btn-close"
    );

    tarefa.appendChild(texto);
    tarefa.appendChild(botaoExcluir);

    listaTarefas.appendChild(tarefa);

    quantidadeTarefas++;

    contador.textContent = quantidadeTarefas;

    inputTarefa.value = "";

    tarefa.addEventListener("click", function () {

        tarefa.classList.toggle("riscar");

    });

    botaoExcluir.addEventListener("click", function () {

        listaTarefas.removeChild(tarefa);

        quantidadeTarefas--;

        contador.textContent = quantidadeTarefas;

    });
}

function limparTudo() {

    quantidadeTarefas = 0;

    contador.textContent = 0;

    listaTarefas.innerHTML = "";
}

botaoEnviar.addEventListener("click", adicionarTarefa);

botaoLimpar.addEventListener("click", limparTudo);