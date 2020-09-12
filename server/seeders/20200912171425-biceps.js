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

    await queryInterface.bulkInsert('biceps', [
      {
        exercise: "Barbell Curl",
        link: "https://youtu.be/tYpquedo9e0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "EZ Curl",
        link: "https://youtu.be/MCjBeB844rU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Close Grip Barbell Curl",
        link: "https://youtu.be/GztM7atVgd8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "2-Arm Dumbbell Curl",
        link: "https://youtu.be/yYB76DOBPsM",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Cable Curl",
        link: "https://youtu.be/nW7w5vG6IIc",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Incline Dumbbell Curl",
        link: "https://youtu.be/2jsTYbOkx1U",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Dummbell Twist Curl",
        link: "https://youtu.be/DcRJ3bLJuVw",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Hammer Curl",
        link: "https://youtu.be/xsOm9xn83-8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Dumbbell Spider Curl",
        link: "https://youtu.be/y_GK6fn7raU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Alternating Dumbbell Curl",
        link: "https://youtu.be/S97e09rLmEU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exercise: "Cable Rope Twist Curl",
        link: "https://youtu.be/sR_EdrSruyQ",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('biceps');
  }
};
