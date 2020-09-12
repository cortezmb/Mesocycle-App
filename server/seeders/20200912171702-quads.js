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

    await queryInterface.bulkInsert('quads', [
      {
        exercise: "High Bar Squat",
        link: "https://youtu.be/2-o_-HTPhv8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Close Stance Feet Forward Squats",
        link: "https://youtu.be/ppluAD4MHK8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Machine Feet Forward Squat",
        link: "https://youtu.be/SYji94GabJg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Leg Press",
        link: "https://youtu.be/mJSsWpuyiCM",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Hack Squat",
        link: "https://youtu.be/SOyO4LHjhX4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Front Squat",
        link: "https://youtu.be/lNYA35p8XJQ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Front Squat (Alernate Grip)",
        link: "https://youtu.be/uFEPuNtHoOU",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('quads');
  }
};
