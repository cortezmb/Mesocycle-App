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

    await queryInterface.bulkInsert('horizontal_pulls', [
      {
        exercise: "Barbell Bent Over Row",
        link: "https://youtu.be/o2qSVwxiFk4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Underhand EZ Bar Row",
        link: "https://youtu.be/ROIrNQJBKZ0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Row to Chest",
        link: "https://youtu.be/tRT-cLlXJZ0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "1-Arm Dumbbell Row",
        link: "https://youtu.be/Wdv_3ojsPhU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Chest Supported Row",
        link: "https://youtu.be/4Idz7uwm3OU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Row Machine",
        link: "https://youtu.be/J44yAQ_LXXU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "2-Arm Dumbbell Row",
        link: "https://youtu.be/o1yPuXatVRs",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Cable Row",
        link: "https://youtu.be/y47HOtqxZkg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('horizontal_pulls');
  }
};
