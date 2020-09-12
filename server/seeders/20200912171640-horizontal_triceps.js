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

    await queryInterface.bulkInsert('horizontal_triceps', [
      {
        exercise: "Skullcrusher",
        link: "https://youtu.be/hJLXuvZd05w",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "JM Press",
        link: "https://youtu.be/daSL236nYZs",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Dips",
        link: "https://youtu.be/B48xWtzMHxk",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Assisted Dips",
        link: "https://youtu.be/a5_JKN7j7Ug",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Dumbbell Skullcrusher",
        link: "https://youtu.be/TtXlapucVxM",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Cable Tricep Pushdown",
        link: "https://youtu.be/B33bKk_r5PU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Cable Rope Pushdown",
        link: "https://youtu.be/tu2Q82-HMg0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Bar Skull",
        link: "https://youtu.be/gYbmiluG5Ho",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('horizontal_triceps');
  }
};
