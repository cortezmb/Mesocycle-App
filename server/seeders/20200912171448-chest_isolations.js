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

    await queryInterface.bulkInsert('chest_isolations', [
      {
        exercise: "Flat Dumbbell Flye",
        link: "https://youtu.be/t2Kk-TOhq14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Incline Dumbbell Flye",
        link: "https://youtu.be/_GBEHrc_V5U",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Cable Flye",
        link: "https://youtu.be/60Ai9_c60xg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "High Cable Flye",
        link: "https://youtu.be/ipoTKasbDyQ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Machine Chest Flye",
        link: "https://youtu.be/6L7xI3jO_GU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Cable Incline Flye",
        link: "https://youtu.be/UPGRju60F60",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Pec Dec Flye",
        link: "https://youtu.be/ZYM1mNayaeI",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('chest_isolations');
  }
};
