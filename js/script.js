let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });
};

function calcularOrcamento() {
    const km = parseFloat(document.getElementById("km").value);
    let valorPedagio = 0;

    if (document.getElementById("pedagio").value === "sim") {
        valorPedagio = 10; // Valor fictício para o pedágio, ajuste conforme necessário
    }

    const totalKm = km * 2.7;
    const total = totalKm + valorPedagio;

    // Verifica se o valor inserido é válido antes de exibir o orçamento
    if (!isNaN(total)) {
        let mensagemFinal = `O orçamento estimado é R$ ${total.toFixed(2)}.`;
        document.getElementById("resultadoOrcamento").innerText = mensagemFinal;
        document.getElementById("enviarOrcamento").style.display = "block";
    } else {
        // Se o valor for NaN, não exibe o orçamento
        document.getElementById("resultadoOrcamento").innerText =
            "Por favor, insira a KM válido.";
        document.getElementById("enviarOrcamento").style.display = "none";
    }
}

document
    .getElementById("enviarOrcamento")
    .addEventListener("click", function () {
        const km = parseFloat(document.getElementById("km").value);
        let valorPedagio = 0;

        if (document.getElementById("pedagio").value === "sim") {
            valorPedagio = 10; // Valor fictício para o pedágio, ajuste conforme necessário
        }

        const totalKm = km * 2.7;
        const total = totalKm + valorPedagio;

        // Substitua <YOUR_PHONE_NUMBER> pelo seu número de telefone completo
        const phoneNumber = "+11992459507";
        const textMessage = `Orçamento: KM: ${km}, Pedágio: ${valorPedagio}, Total: R$ ${total.toFixed(
            2
        )}`;

        // Constrói a URL com o número de telefone e a mensagem codificada
        const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
            phoneNumber
        )}&text=${encodeURIComponent(textMessage)}`;

        // Abre a URL no navegador, enviando a mensagem para o WhatsApp
        window.open(url, "_blank");
    });
