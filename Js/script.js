// Configurações Iniciais
let xpAtual = 0;

const xpMaximo = 100; // XP total para preencher a barra

let level = 1; //ao atingir 100% da barra, o "Level" aumenta em 1

// Captura de Elementos
const form = document.getElementById('form-tarefa');
const inputTarefa = document.getElementById('input-tarefa');
const lista = document.getElementById('lista-tarefas');
const barraProgresso = document.getElementById('barra-progresso-fill');
const textoXp = document.getElementById("xp");
const textoLevel = document.getElementById("level");

form.addEventListener("submit", function(e){

    e.preventDefault()
    const texto = inputTarefa.value;

    if(texto.trim() === ""){
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = texto;

    const botao = document.createElement("button");
    botao.innerText = "Concluir";

    botao.addEventListener("click", function(){
        
        if(li.classList.contains("concluida")){
            return;
        }

        li.classList.add("concluida");
        xpAtual = xpAtual + 20;

        if (xpAtual >= xpMaximo){
            level = level + 1;
            textoLevel.innerText = level;
            xpAtual = 0;
        }

        textoXp.innerText = xpAtual;

        let porcentagem = (xpAtual/xpMaximo) * 100;

        barraProgresso.style.width = porcentagem + "%";

    });

    li.appendChild(span);
    li.appendChild(botao)
    lista.appendChild(li);

    inputTarefa.value = "";

});