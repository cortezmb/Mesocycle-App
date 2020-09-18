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

      await queryInterface.bulkInsert('categories', [
        {
          title: "abs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "biceps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "calves",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "chest_isolation_or_triceps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "chest_isolations",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "front_delts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "glutes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "hamstring_hip_hinges",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "hamstring_isolations",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "horizontal_pulls",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "horizontal_pushes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "horizontal_triceps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "incline_push_or_front_delts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "incline_pushes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "quads",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "rear_delts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "rear_or_side_delts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "side_delts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "traps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "triceps",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "vertical_pulls",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "vertical_triceps",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('categories');
  }
};
