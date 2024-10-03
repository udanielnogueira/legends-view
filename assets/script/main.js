var audio = new Audio('./assets/audio/ui-click.mp3');
function playUIClick() {
  audio.play();
}

const adcBtn = document.querySelector('.--adc');
const magoBtn = document.querySelector('.--mago');
const suporteBtn = document.querySelector('.--suporte');
const assassinoBtn = document.querySelector('.--assassino');
const lutadorBtn = document.querySelector('.--lutador');
const tankBtn = document.querySelector('.--tank');

const classesBtns = document.querySelectorAll('.classesBtns__btn');
console.log(classesBtns);

const championsBtns = document.querySelector('.championsBtns');
console.log(championsBtns);

const championContent = document.querySelector('.championContent');
console.log(championContent);

// Exibir Champions Btns

function exibirAdc() {
  classesBtns.forEach((element) => {
    element.classList.remove('active');
  });
  adcBtn.classList.add('active');

  championContent.innerHTML = 'Selecione um campeão';
  championsBtns.innerHTML = '';
  for (let atirador of atiradores) {
    championsBtns.innerHTML += `
      <div class="championsBtns__btn championsBtns__adc" onclick="playUIClick(), exibirAdcImg(this)">${atirador.nome}</div>
      `;
  }
}

function exibirMago() {
  classesBtns.forEach((element) => {
    element.classList.remove('active');
  });
  magoBtn.classList.add('active');

  championContent.innerHTML = 'Selecione um campeão';
  championsBtns.innerHTML = '';
  for (let mago of magos) {
    championsBtns.innerHTML += `
      <div class="championsBtns__btn championsBtns__mago" onclick="playUIClick(), exibirMagoImg(this)">${mago.nome}</div>
      `;
  }
}

function exibirAssassino() {
  classesBtns.forEach((element) => {
    element.classList.remove('active');
  });
  assassinoBtn.classList.add('active');

  championContent.innerHTML = 'Selecione um campeão';
  championsBtns.innerHTML = '';
  for (let assassino of assassinos) {
    championsBtns.innerHTML += `
      <div class="championsBtns__btn championsBtns__assassino" onclick="playUIClick(), exibirAssassinoImg(this)">${assassino.nome}</div>
      `;
  }
}

function exibirLutador() {
  classesBtns.forEach((element) => {
    element.classList.remove('active');
  });
  lutadorBtn.classList.add('active');

  championContent.innerHTML = 'Selecione um campeão';
  championsBtns.innerHTML = '';
  for (let lutador of lutadores) {
    championsBtns.innerHTML += `
      <div class="championsBtns__btn championsBtns__lutador" onclick="playUIClick(), exibirLutadorImg(this)">${lutador.nome}</div>
      `;
  }
}

function exibirSuporte() {
  classesBtns.forEach((element) => {
    element.classList.remove('active');
  });
  suporteBtn.classList.add('active');

  championContent.innerHTML = 'Selecione um campeão';
  championsBtns.innerHTML = '';
  for (let suporte of suportes) {
    championsBtns.innerHTML += `
      <div class="championsBtns__btn championsBtns__suporte" onclick="playUIClick(), exibirSuporteImg(this)">${suporte.nome}</div>
      `;
  }
}

function exibirTank() {
  classesBtns.forEach((element) => {
    element.classList.remove('active');
  });
  tankBtn.classList.add('active');

  championContent.innerHTML = 'Selecione um campeão';
  championsBtns.innerHTML = '';
  for (let tank of tanks) {
    championsBtns.innerHTML += `
      <div class="championsBtns__btn championsBtns__tank" onclick="playUIClick(), exibirTankImg(this)">${tank.nome}</div>
      `;
  }
}

// Champions Imgs

function exibirAdcImg(elemento) {
  const arrayChampionsBtns = document.querySelectorAll('.championsBtns__btn');
  arrayChampionsBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  elemento.classList.add('active');

  for (let atirador of atiradores) {
    if (atirador.nome == elemento.innerHTML) {
      championContent.innerHTML = `
      <img src="${atirador.src}" alt="${atirador.nome}" title="${atirador.nome}" class="championContent__img" />
      <p class="championContent__bio">${atirador.bio}</p>
      `;
    }
  }
}

function exibirMagoImg(elemento) {
  const arrayChampionsBtns = document.querySelectorAll('.championsBtns__btn');
  arrayChampionsBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  elemento.classList.add('active');

  for (let mago of magos) {
    if (mago.nome == elemento.innerHTML) {
      championContent.innerHTML = `
      <img src="${mago.src}" alt="${mago.nome}" title="${mago.nome}" class="championContent__img" />
      <p class="championContent__bio">${mago.bio}</p>
      `;
    }
  }
}

function exibirAssassinoImg(elemento) {
  const arrayChampionsBtns = document.querySelectorAll('.championsBtns__btn');
  arrayChampionsBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  elemento.classList.add('active');

  for (let assassino of assassinos) {
    if (assassino.nome == elemento.innerHTML) {
      championContent.innerHTML = `
      <img src="${assassino.src}" alt="${assassino.nome}" title="${assassino.nome}" class="championContent__img" />
      <p class="championContent__bio">${assassino.bio}</p>
      `;
    }
  }
}

function exibirLutadorImg(elemento) {
  const arrayChampionsBtns = document.querySelectorAll('.championsBtns__btn');
  arrayChampionsBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  elemento.classList.add('active');

  for (let lutador of lutadores) {
    if (lutador.nome == elemento.innerHTML) {
      championContent.innerHTML = `
      <img src="${lutador.src}" alt="${lutador.nome}" title="${lutador.nome}" class="championContent__img" />
      <p class="championContent__bio">${lutador.bio}</p>
      `;
    }
  }
}

function exibirSuporteImg(elemento) {
  const arrayChampionsBtns = document.querySelectorAll('.championsBtns__btn');
  arrayChampionsBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  elemento.classList.add('active');

  for (let suporte of suportes) {
    if (suporte.nome == elemento.innerHTML) {
      championContent.innerHTML = `
      <img src="${suporte.src}" alt="${suporte.nome}" title="${suporte.nome}" class="championContent__img" />
      <p class="championContent__bio">${suporte.bio}</p>
      `;
    }
  }
}

function exibirTankImg(elemento) {
  const arrayChampionsBtns = document.querySelectorAll('.championsBtns__btn');
  arrayChampionsBtns.forEach((btn) => {
    btn.classList.remove('active');
  });
  elemento.classList.add('active');

  for (let tank of tanks) {
    if (tank.nome == elemento.innerHTML) {
      championContent.innerHTML = `
      <img src="${tank.src}" alt="${tank.nome}" title="${tank.nome}" class="championContent__img" />
      <p class="championContent__bio">${tank.bio}</p>
      `;
    }
  }
}

function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: 'Legends View',
        text: 'A nova galeria de campeões do LoL!',
        url: 'https://udanielnogueira.github.io/legends-view/',
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}
