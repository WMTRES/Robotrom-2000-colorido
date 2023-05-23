function trocaImagem(cor) {
    const imagem = document.querySelector(".robo");
    const titulo = document.querySelector(".titulo");
  
    imagem.src = `/img/Robotron 2000 - ${cor}.png`;
    titulo.innerHTML = `ROBOTRON<br>2000 - ${cor}`;
  }
  