const controlesLampadas = document.querySelectorAll('.lamp-controls');

controlesLampadas.forEach(controle => {
  const nomeLampada = controle.getAttribute('data-lamp');
  const seletorCor = controle.querySelector('.color-picker');
  const seletorIntensidade = controle.querySelector('.intensity');
  const lampada = document.querySelector(`.lamp-${nomeLampada}`);

  function atualizarLampada() {
    const cor = seletorCor.value;
    const intensidade = seletorIntensidade.value;

    lampada.style.background = `radial-gradient(circle, ${hexParaRgba(cor, intensidade)} 0%, transparente 80%)`;
  }

  seletorCor.addEventListener('input', atualizarLampada);
  seletorIntensidade.addEventListener('input', atualizarLampada);

  atualizarLampada();
});

// Converte cor HEX para RGBA com base na intensidade
function hexParaRgba(hex, intensidade) {
  const r = parseInt(hex.substr(1,2), 16);
  const g = parseInt(hex.substr(3,2), 16);
  const b = parseInt(hex.substr(5,2), 16);
  const alpha = intensidade / 100;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Controle do ar-condicionado
const ligarAC = document.getElementById('ac-power');
const seletorTempAC = document.getElementById('ac-temp');
const textoStatusAC = document.querySelector('.ac-status');
const textoTempAC = document.querySelector('.ac-temp');
const blocoAC = document.querySelector('.air-conditioner');

function atualizarAC() {
  if (ligarAC.checked) {
    blocoAC.style.backgroundColor = '#4CAF50'; // Verde ligado
    textoStatusAC.textContent = 'LIGADO';
    textoTempAC.textContent = `${seletorTempAC.value}°C`;
  } else {
    blocoAC.style.backgroundColor = 'gray'; // Cinza desligado
    textoStatusAC.textContent = 'DESLIGADO';
    textoTempAC.textContent = '--°C';
  }
}

ligarAC.addEventListener('change', atualizarAC);
seletorTempAC.addEventListener('input', atualizarAC);

// Inicializa com os valores atuais
atualizarAC();
