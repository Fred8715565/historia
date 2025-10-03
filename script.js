const storyContainer = document.getElementById("story-container");
const choicesContainer = document.getElementById("choices-container");

const story = {
  start: {
    text: "Você acordou num lindo dia de verão e decidiu ir à praia com amigos. O sol está forte. O que você faz antes de sair?",
    image: "c1.png",
    choices: [
      { text: "Passo protetor solar FPS 50", next: "protecao" },
      { text: "Saio direto, quero pegar o sol forte!", next: "semProtecao" }
    ]
  },
  protecao: {
    text: "Boa escolha! O protetor solar ajuda a proteger sua pele dos raios UV. Na praia, seus amigos chamam para jogar vôlei sob o sol forte do meio-dia.",
    image: "c2.png",
    choices: [
      { text: "Aceito, mas coloco boné e reaplico o protetor", next: "cuidadosNaPraia" },
      { text: "Vou sem me preocupar, é só uma partida!", next: "exposicaoExcessiva" }
    ]
  },
  semProtecao: {
    text: "Você foi sem proteção e ficou horas no sol. Sua pele ficou vermelha e começou a descascar dias depois.",
    image: "c4.png",
    choices: [
      { text: "Começo a usar protetor todos os dias", next: "aprendizado" },
      { text: "Ignoro, não deve ser nada", next: "risco" }
    ]
  },
  cuidadosNaPraia: {
    text: "Você se protegeu bem! Isso reduz muito os riscos de câncer de pele no futuro. Parabéns por cuidar da sua saúde!",
    image: "c5.png",
    choices: []
  },
  exposicaoExcessiva: {
    text: "Horas depois, sua pele está ardendo. A exposição excessiva pode causar envelhecimento precoce e câncer de pele com o tempo.",
    image: "c4.png",
    choices: [
      { text: "Decido cuidar melhor da minha pele", next: "aprendizado" },
      { text: "Continuo agindo da mesma forma", next: "risco" }
    ]
  },
  aprendizado: {
    text: "Você aprendeu a importância da proteção solar! Protetor, roupas com proteção UV e evitar o sol das 10h às 16h são boas práticas.",
    image: "c5.png",
    choices: []
  },
  risco: {
    text: "Anos depois, uma mancha estranha aparece em sua pele. Após exames, é diagnosticado um câncer de pele. Felizmente, foi detectado cedo e tratado a tempo.",
    image: "c6.png",
    choices: []
  }
};

function showScene(sceneKey) {
  const scene = story[sceneKey];

  // Mostra o texto
  storyContainer.innerHTML = `
    <img src="${scene.image}" alt="Imagem da cena" class="scene-image">
    <p>${scene.text}</p>
  `;

  // Mostra as escolhas
  choicesContainer.innerHTML = "";
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showScene(choice.next);
    choicesContainer.appendChild(btn);
  });

  if (scene.choices.length === 0) {
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Reiniciar História";
    restartBtn.onclick = () => showScene("start");
    choicesContainer.appendChild(restartBtn);
  }
}
showScene("start");

