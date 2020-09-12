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

    await queryInterface.bulkInsert('horizontal_pushes', [
      {
        exercise: "Medium Grip Bench Press",
        link: "https://youtu.be/Dl-by6_vATQ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Wide Grip Bench Press",
        link: "https://youtu.be/ILToidt_G0U",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Flat Dumbbell Bench Press",
        link: "https://youtu.be/20_pP7oaH34",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Close Grip Bench Press",
        link: "https://youtu.be/3s_QUA4HcxI",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Flat Machine Bench Press",
        link: "https://youtu.be/cg4tsxQ1BP4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Pushup",
        link: "https://youtu.be/TM_PeJIdQwE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Close Grip Pushup",
        link: "https://youtu.be/PFtO-p5VLO0",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('horizontal_pushes');
  }
};
