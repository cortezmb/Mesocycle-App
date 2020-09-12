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

    await queryInterface.bulkInsert('vertical_pulls', [
      {
        exercise: "Overhand Pullup",
        link: "https://youtu.be/NF4nbNsqreQ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Parallel Pullup",
        link: "https://youtu.be/lFyDmuDjRts",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Underhand Pullup",
        link: "https://youtu.be/SmRa30Jci54",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Wide Grip Pullup",
        link: "https://youtu.be/HOWPPDueZY8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Assisted Overhand Pullup",
        link: "https://youtu.be/ghHW6sETs-I",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Assisted Parallel Pullup",
        link: "https://youtu.be/UNo4yBbidG4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Assisted Underhand Pullup",
        link: "https://youtu.be/2PC8eYTte5w",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Normal Grip Pulldown",
        link: "https://youtu.be/gQ179IUjMsQ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Parallel Pulldown",
        link: "https://youtu.be/uMjeHo2_EwM",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Underhand Pulldown",
        link: "https://youtu.be/bxfHw1LvH24",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Wide-Grip Pulldown",
        link: "https://youtu.be/xyoFXl-k644",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Narrow Grip Pulldown",
        link: "https://youtu.be/QzjjwxZOVdE",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('vertical_pulls');
  }
};
