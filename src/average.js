/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// tive ajudinha do sumo na mentoria pra entender a logica
const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
      result += array[i];
    }
  result /= array.length;
  result = Math.round(result);// uso desta função no qastack .... https://qastack.com.br/programming/7641818/how-can-i-remove-the-decimal-part-from-javascript-number
  return result;
};

module.exports = average;
