const { expect } = require('chai');

const calculaSituacao = require('../examples/calculaSituacao');

describe('Quando a média for menor que 7', function () {
  it('retorna "reprovação" com nota 4', function () {
    const resposta = calculaSituacao(4);

    expect(resposta).to.be.equals('reprovação');
  });

  it('retorna "aprovação" com nota 7', function () {
    const resposta = calculaSituacao(7);

    expect(resposta).to.be.equals('aprovação');
  });

  it('retorna "aprovação" com nota 9', function () {
    const resposta = calculaSituacao(9);

    expect(resposta).to.be.equals('aprovação');
  });
});