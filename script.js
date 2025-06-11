function entrarSite() {
  // Esconde a tela inicial
  document.getElementById('welcome-screen').style.display = 'none';

  // Mostra o conteúdo principal
  document.getElementById('main-content').style.display = 'block';

  // Força rolar para o topo após o conteúdo aparecer
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 100); // Pequeno delay para garantir que o conteúdo já está visível

  // Inicia animações de corações
  iniciarCorações();
}

// Efeito máquina de escrever removido para manter o texto fixo da carta

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
    ctx.fillStyle = 'rgba(255, 0, 136, 0.49)'; // rosa choque
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

// Botão "Entrar"
document.getElementById('enter-button').addEventListener('click', entrarSite);

// (Se quiser, remova os trechos abaixo relacionados à galeria, se não usar)
// document.getElementById('btn-voltar-galeria').addEventListener('click', () => {
//   document.getElementById('galeria-section').style.display = 'none';
//   document.getElementById('main-content').style.display = 'block';
// });
