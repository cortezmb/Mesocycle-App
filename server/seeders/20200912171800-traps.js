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

    await queryInterface.bulkInsert('traps', [
      {
        exercise: "Barbell Shrug",
        link: "https://youtu.be/hR8aOS5LZjU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Barbell Bent Over Shrug",
        link: "https://youtu.be/6DiJh6_jeoo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Dumbbell Shrug",
        link: "https://youtu.be/z3yCDRGrQTM",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Dumbbell Bent Over Shrug",
        link: "https://youtu.be/S3NIBLmlKaU",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('traps');
  }
};
