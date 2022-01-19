// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const register = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  const data = {
    name: fullName,
    email: `${email}@trybe.com`
  }
  return data;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(register));


// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const isEqual = (num1, num2) => num1 === num2? true : false;

const isDifferent = (num1, num2) => num1 !== num2? 'Parabéns, você ganhou!' : 'Tente novamente';

const HOF = (betNumber, func) => {
  const randomNumber = Math.round(Math.random() * 5);
  console.log(randomNumber);
  if (func(betNumber, randomNumber)) {
    return 'Parabéns, você ganhou!';
  }
  return 'Tente novamente';
}

console.log(HOF(3, isDifferent));
console.log(HOF(3, isEqual));


const sum = (num1, num2) => num1 + num2;
console.log(sum(3,4))

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const verifyAnswers = (array1, array2) => {
  let result = 0;
  for (let f = 0; f < array1.length; f += 1) {
    for (let i = f; i < array2.length;) {
      if (array1[f] === array2[i]) {
        result += 1;
        break;
      } else if (array2[i] === "N.A") {
        result;
        break;
      } else {
        result -= 0.5;
        break;
      }
    }
  }
  return result;
}

const highOrder = (param1, param2, param3) => {
  return param3(param1, param2);
  //return verifyAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS);
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(highOrder(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));