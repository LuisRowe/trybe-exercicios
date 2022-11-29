'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        id: 1,
        title: 'The Witcher',
        author: 'Andrzej Sapkowski',
        pageQuantity: 402,
        publisher: 'WMF Martins Fontes',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        title: 'Harry Potter',
        author: 'J. K. Rowling',
        pageQuantity: 702,
        publisher: 'Rocco',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 3,
        title: 'La Bíblia',
        author: 'Deus',
        pageQuantity: 777,
        publisher: 'Igreja Argentina',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 4,
        title: 'A Bíblia',
        author: 'Deus',
        pageQuantity: 777,
        publisher: 'Igreja Brasileira',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
