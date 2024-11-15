// Função para abrir o modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
// Função para criar o efeito do carrossel (movimento automático)
let index = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

// Função para mover o carrossel automaticamente
function moveCarousel() {
    index = (index + 1) % totalImages;  // Move para a próxima imagem
    const offset = -index * 100;  // Mover as imagens para a esquerda
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Iniciar a rotação automática
setInterval(moveCarousel, 3000);  // Trocar de imagem a cada 3 segundos
