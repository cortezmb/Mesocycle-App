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

    await queryInterface.bulkInsert('glutes', [
      {
        exercise: "Barbell Walking Lunge",
        link: "https://youtu.be/vNgwqFsVstY",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Dumbbell Walking Lunge",
        link: "https://youtu.be/LRgZFHceZGo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Sumo Squat",
        link: "https://youtu.be/wjw-4R5VR20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Deficit Deadlift",
        link: "https://youtu.be/WWS1rPFPyiQ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "25's Deadlift",
        link: "https://youtu.be/7If7L0lAur8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Sumo Deadlift",
        link: "https://youtu.be/xp1IeyTOB4U",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Deadlift",
        link: "https://youtu.be/euEPxA3gsDo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Hex Bar Deadlift",
        link: "https://youtu.be/f-_q_3tN6Yo",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('glutes');
  }
};
