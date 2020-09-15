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

    await queryInterface.bulkInsert('incline_push_or_front_delts', [
      {
        exercise: "Incline Medium Grip Bench Press",
        link: "https://youtu.be/zWRCV_td3I8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Standing Barbell Shoulder Press",
        link: "https://youtu.be/n9RZ6FEthGU",
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
        exercise: "Seated Barbell Shoulder Press",
        link: "https://youtu.be/dF9Pm_-2zmg",
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
        exercise: "Seated Dumbbell Shoulder Press",
        link: "https://youtu.be/RGFdTZznnRs",
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
        exercise: "High Incline Dumbbell Press",
        link: "https://youtu.be/YIqmLutlM1g",
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
        exercise: "Shoulder Press Machine",
        link: "https://youtu.be/W6kJbZeFssU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Incline Machine Bench Press",
        link: "https://youtu.be/eaI0E6ZcwM4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Standing Dumbbell Shoulder Press",
        link: "https://youtu.be/Ax_6UXGQo7o",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('incline_push_or_front_delts');
  }
};
