// Botão de entrada
function entrarSite() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
  escreverTexto();
  iniciarCorações();
}

// Efeito de máquina de escrever
const texto = "Oi meu amor... Essa cartinha é só o começo de algo muito especial que preparei para você. Obrigado por tudo que somos juntos. ❤️";
let i = 0;
function escreverTexto() {
  const elemento = document.getElementById('typing-text');
  if (i < texto.length) {
    elemento.innerHTML += texto.charAt(i);
    i++;
    setTimeout(escreverTexto, 50);
  }
}

// Corações caindo no canvas
function iniciarCorações() {
  const canvas = document.getElementById('hearts-canvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  let hearts = [];

  function criarCoração() {
    return {
      x: Math.random() * width,
      y: 0,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 1 + 0.5,
      angle: Math.random() * Math.PI * 2,
      angleSpeed: (Math.random() - 0.5) * 0.02,
    };
  }

  function desenharCoração(x, y, size) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 20, size / 20);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, -3, -3, -15, -10, -15);
    ctx.bezierCurveTo(-20, -15, -20, 0, -20, 0);
    ctx.bezierCurveTo(-20, 15, 0, 25, 0, 35);
    ctx.bezierCurveTo(0, 25, 20, 15, 20, 0);
    ctx.bezierCurveTo(20, 0, 20, -15, 10, -15);
    ctx.bezierCurveTo(3, -15, 0, -3, 0, 0);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 20, 147, 0.8)'; // rosa choque
    ctx.fill();
    ctx.restore();
  }

  for (let i = 0; i < 50; i++) hearts.push(criarCoração());

  function desenhar() {
    ctx.clearRect(0, 0, width, height);
    hearts.forEach(h => {
      desenharCoração(h.x, h.y, h.size);
      h.y += h.speed;
      h.x += Math.sin(h.angle) * 0.5;
      h.angle += h.angleSpeed;
      if (h.y > height) {
        h.y = 0;
        h.x = Math.random() * width;
      }
      if (h.x > width) h.x = 0;
      if (h.x < 0) h.x = width;
    });
    requestAnimationFrame(desenhar);
  }

  desenhar();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
}

document.getElementById('enter-button').addEventListener('click', () => {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});



// Botão para voltar da galeria para o conteúdo principal
document.getElementById('btn-voltar-galeria').addEventListener('click', () => {
  document.getElementById('galeria-section').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});



