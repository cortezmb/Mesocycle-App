'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('hamstring_isolations', [
      {
        exercise: "Lying Leg Curl",
        link: "https://youtu.be/m4KB9-Uo4Kc",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Seated Leg Curl",
        link: "https://youtu.be/BHxrogNaKoo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Single-Leg Leg Curl",
        link: "https://youtu.be/SMln-yOUKSA",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('hamstring_isolations');
  }
};
