const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara')));
    ///https://www.w3schools.com/jsref/jsref_isarray.asp ... tive ajuda da Luá também

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails()).toHaveLength(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails()).toBe('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Máscara')).toStrictEqual([
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123'
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123'
        }
      }
    ]);

    // Teste se os dois productIds terminam com 123.
    const productId1 = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    const productId2 = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    expect(productId1 && productId2).toMatch(/.*123$/);
  });//tive ajuda da Luá tambem
  ///aprendi sobre regex >>> https://www.mundojs.com.br/2018/06/14/como-usar-o-regex-no-javascript/#:~:text=Uma%20express%C3%A3o%20regular%20(regular%20expression,forma%20um%20padr%C3%A3o%20de%20pesquisa.&text=Express%C3%B5es%20regulares%20podem%20ser%20usadas,opera%C3%A7%C3%B5es%20de%20substitui%C3%A7%C3%A3o%20de%20texto.

  // site de refencia para itens usados no regex >>> https://medium.com/cwi-software/e-o-regex-como-vai-657f94388dc

  // o uso de '/' significa usar regex

  // o uso do ponto no regex >>. (ponto): O ponto seria um coringa quando se tem um ponto em uma expressão regular estamos dizendo que naquela posição aceitamos qualquer carácter… Vamos fazer um teste em nossa expressão colocando um “.” nela.
  // * : significa para listar todas ocorrencias
  // $ : Fim de linha
});
