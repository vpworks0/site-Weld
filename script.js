// ===============================
// WELD CAR SERVICE
// script.js
// ===============================

// Animação ao rolar a página
const elementos = document.querySelectorAll(".fade");

function animarScroll() {
    elementos.forEach((item) => {
        const topo = item.getBoundingClientRect().top;
        const tela = window.innerHeight - 100;

        if (topo < tela) {
            item.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", animarScroll);
animarScroll();

// Efeito no cabeçalho
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.background = "#0a0a0a";
        header.style.boxShadow = "0 5px 20px rgba(255,0,0,.35)";
    } else {
        header.style.background = "rgba(15,15,15,.95)";
        header.style.boxShadow = "none";
    }

});

// Botão voltar ao topo
const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";
botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.right = "20px";
botaoTopo.style.bottom = "100px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#c00000";
botaoTopo.style.color = "#fff";
botaoTopo.style.fontSize = "24px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }

});

botaoTopo.onclick = () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// Envio do orçamento para WhatsApp
const formulario = document.querySelector("form");

if(formulario){

formulario.addEventListener("submit",function(e){

e.preventDefault();

const nome = document.querySelector("input[type=text]").value;
const telefone = document.querySelector("input[type=tel]").value;
const descricao = document.querySelector("textarea").value;

// Troque pelo número da empresa
const numero = "5511960153407";

const mensagem =
`Olá, meu nome é ${nome}.
Telefone: ${telefone}

Gostaria de solicitar um orçamento.

Serviço:

${descricao}`;

window.open(
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
"_blank"
);

});

}

// Zoom nas imagens do portfólio
document.querySelectorAll(".galeria img").forEach((img)=>{

img.addEventListener("click",()=>{

const fundo=document.createElement("div");

fundo.style.position="fixed";
fundo.style.left="0";
fundo.style.top="0";
fundo.style.width="100%";
fundo.style.height="100%";
fundo.style.background="rgba(0,0,0,.85)";
fundo.style.display="flex";
fundo.style.justifyContent="center";
fundo.style.alignItems="center";
fundo.style.cursor="pointer";
fundo.style.zIndex="9999";

const foto=document.createElement("img");

foto.src=img.src;
foto.style.maxWidth="90%";
foto.style.maxHeight="90%";
foto.style.borderRadius="12px";

fundo.appendChild(foto);

document.body.appendChild(fundo);

fundo.onclick=()=>{

document.body.removeChild(fundo);

};

});

});

// Ano automático no rodapé
const ano = new Date().getFullYear();

const rodape = document.querySelector("footer");

if(rodape){

const texto = document.createElement("p");

texto.innerHTML = `© ${ano} Weld Car Service - Todos os direitos reservados.`;

texto.style.marginTop = "20px";

rodape.appendChild(texto);

}

console.log("Weld Car Service carregado com sucesso!");