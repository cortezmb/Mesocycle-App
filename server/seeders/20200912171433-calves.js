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

    await queryInterface.bulkInsert('calves', [
      {
        exercise: "Calves on Calf Machine",
        link: "https://youtu.be/wrPN51LyOUE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Stair Calves",
        link: "https://youtu.be/mucRuC4sEjQ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Calves on Leg Press",
        link: "https://youtu.be/oRRs1bGzimM",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Smith Machine Calves",
        link: "https://youtu.be/IkrC1u5e-RQ",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('calves');
  }
};
