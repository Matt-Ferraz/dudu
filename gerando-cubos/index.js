// Seleciona o elemento HTML com id "grid" onde os cubos serão inseridos
const grid = document.querySelector("#grid");
// Define o número total de cubos a serem criados
const total = 1000;

// Loop para criar e adicionar todos os cubos à grade
for (let n = 0; n < total; n++) {
  // Cria um novo elemento div que representará um cubo
  const cube = document.createElement("div");
  
  // Define cores que serão usadas com base na lógica condicional
  const randomColor = getRandomColor(); // Obtém uma cor aleatória (não utilizada diretamente neste código)
  const blackBgColor = "#000000"; // Cor preta
  const grayBgColor = "#808080"; // Cor cinza
  const blueBgColor = "#0000FF"; // Cor azul
  
  // Adiciona a classe "cube" ao elemento para aplicar os estilos CSS correspondentes
  cube.classList.add("cube");

  // Lógica para determinar a cor de fundo do cubo com base em seu número (n)
  if (n % 2 === 0) {
    // Caso o número do cubo seja par (divisível por 2), cor preta
    cube.style.backgroundColor = blackBgColor;
  } else if (n % 3 === 0) {
    // Caso o número do cubo seja divisível por 3, cor cinza
    // Nota: este caso só será atingido para números ímpares divisíveis por 3 (3, 9, 15, etc)
    // pois os números pares já foram tratados na condição anterior
    cube.style.backgroundColor = grayBgColor;
  } else {
    // Caso não seja divisível nem por 2 nem por 3, cor azul
    cube.style.backgroundColor = blueBgColor;
  }

  // Opção comentada: atribuir cor aleatória ao cubo
  // cube.style.backgroundColor = randomColor;

  // Cria um elemento de texto (span) para exibir o número do cubo
  const nthCubeLabel = document.createElement("span");
  nthCubeLabel.textContent = n; // Define o texto do span como o número do cubo
  cube.appendChild(nthCubeLabel); // Adiciona o span como filho do cubo

  // Adiciona o cubo completo à grade
  grid.appendChild(cube);
}

/**
 * Função para gerar uma cor hexadecimal aleatória
 * @returns {string} Uma string representando uma cor no formato hexadecimal (#RRGGBB)
 */
function getRandomColor() {
  // String com todos os caracteres hexadecimais possíveis
  const letters = "0123456789ABCDEF";
  // Inicia a string da cor com o símbolo # (hashtag)
  let color = "#";
  // Loop para adicionar 6 caracteres à cor (2 para cada componente: R, G e B)
  for (let i = 0; i < 6; i++) {
    // Adiciona um caractere aleatório da string "letters"
    color += letters[Math.floor(Math.random() * 16)];
  }
  // Retorna a cor hexadecimal completa
  return color;
}