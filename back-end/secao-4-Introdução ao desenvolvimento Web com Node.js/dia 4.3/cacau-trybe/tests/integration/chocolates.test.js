const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');

const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', function () {  
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai.request(app).get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      );
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('Retorna a quantidade de chocolates existentes!', async function () {
      const response = await chai.request(app).get('/chocolates/total');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 });
    });
  });

  describe('Usando o método GET em /chocolates/search?name=(letras)', function () {
    it('Retorna Mon Chéri e Mounds, buscando as letras Mo', async function () {
      const chocolatesMo = [
        {
          id: 3,
          name: 'Mon Chéri',
          brandId: 2,
        },
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      ];

      const response = await chai.request(app).get('/chocolates/search?name=Mo');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(chocolatesMo);
    });

    it('Retorna array vazio e status 404 caso não encontre as letras buscadas', async function () {
      const chocolatesVazio = [];

      const response = await chai.request(app).get('/chocolates/search?name=ZZZ');
      expect(response.status).to.be.equal(404);
      console.log(response.body);
      expect(response.body).to.deep.equal(chocolatesVazio);
    });
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Verifica se o chocolate correto é atualizado, conforme id', async function () {
      const chocolateNovo = [
        { 
          name: 'Mint Pretty Good',
          brandId: 2,
        },
      ];

      const response = await chai.request(app).put('/chocolates/1');
      expect(response.status).to.be.equal(201);
      expect(response.body).to.deep.equal(chocolateNovo);
    });

    it('Verifica se aparece erro caso não exista o id requerido', async function () {
      const mensagemErro = [
        { 
          message: 'chocolate not found',
        },
      ];

      const response = await chai.request(app).put('/chocolates/555');
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal(mensagemErro);
    });
  });
});