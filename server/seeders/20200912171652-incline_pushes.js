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

    await queryInterface.bulkInsert('incline_pushes', [
      {
        exercise: "Incline Medium Grip Bench Press",
        link: "https://youtu.be/zWRCV_td3I8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Incline Wide Grip Bench Press",
        link: "https://youtu.be/MDuOnEyof1w",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Low Incline Dumbbell Press",
        link: "https://youtu.be/efDlxayx234",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Incline Dumbbell Press",
        link: "https://youtu.be/LYZDsNv8kJ8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Incline Close Grip Bench Press",
        link: "https://youtu.be/2JIPv1E5a0I",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Incline Machine Bench Press",
        link: "https://youtu.be/eaI0E6ZcwM4",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('incline_pushes');
  }
};
