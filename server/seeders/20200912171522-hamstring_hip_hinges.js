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

    await queryInterface.bulkInsert('hamstring_hip_hinges', [
      {
        exercise: "Stiff-Legged Deadlift",
        link: "https://youtu.be/zbYgjREbdb0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Low Bar Good Morning",
        link: "https://youtu.be/Z3AC4mmiKhw",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "High Bar Good Morning",
        link: "https://youtu.be/hzHJugCcT6g",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "45 Degree Back Raise",
        link: "https://youtu.be/OMUGU1Vh8Ao",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('hamstring_hip_hinges');
  }
};
