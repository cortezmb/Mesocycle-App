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

    await queryInterface.bulkInsert('vertical_triceps', [
      {
        exercise: "EZ Bar Overhead Tricep Extension",
        link: "https://youtu.be/U3SkMY6jw5M",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Barbell Overhead Tricep Extension",
        link: "https://youtu.be/He-GN_4MAY4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Seated EZ Bar Overhead Tricep Extension",
        link: "https://youtu.be/pOX1m37rOWo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Seated Barbell Overhead Tricep Extension",
        link: "https://youtu.be/aNzU6AYZiEs",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Cable Overhead Tricep Extension",
        link: "https://youtu.be/B21LHpkamJM",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('vertical_triceps');
  }
};
