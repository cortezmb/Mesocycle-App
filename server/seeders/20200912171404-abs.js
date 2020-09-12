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

      await queryInterface.bulkInsert('abs', [
        {
          exercise: "Machine Crunch",
          link: "https://youtu.be/GWeVF2aVk8g",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Slant Board Sit-Up",
          link: "https://youtu.be/JYiWXFIikW4",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Reaching Sit-Up",
          link: "https://youtu.be/ENaZCLrz8_c",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "V-Up",
          link: "https://youtu.be/vz97voWk3jU",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Modified Candlestick",
          link: "https://youtu.be/sPIBL43Ds48",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Hanging Knee Raise",
          link: "https://youtu.be/dmwMfjPQIP8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Hanging Strait Leg Raise",
          link: "https://youtu.be/5p-vP_XyNaA",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('abs');
  }
};
