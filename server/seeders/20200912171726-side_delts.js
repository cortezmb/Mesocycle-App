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

    await queryInterface.bulkInsert('side_delts', [
      {
        exercise: "Barbell Upright Row",
        link: "https://youtu.be/fbFISuP7Ezk",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Dumbbell Upright Row",
        link: "https://youtu.be/KkpCTyjGlZo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Cable Upright Row",
        link: "https://youtu.be/FoZM6vuuKBc",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Dumbbell Side Lateral Raise",
        link: "https://youtu.be/pg3hz43P09w",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Thumbs Down Lateral Raise",
        link: "https://youtu.be/7P2LTF73EOM",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('side_delts');
  }
};
