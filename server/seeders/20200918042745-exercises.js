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

      await queryInterface.bulkInsert('exercises', [
        {
          exercise: "Machine Crunch",
          link: "https://youtu.be/GWeVF2aVk8g",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Slant Board Sit-Up",
          link: "https://youtu.be/JYiWXFIikW4",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Reaching Sit-Up",
          link: "https://youtu.be/ENaZCLrz8_c",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "V-Up",
          link: "https://youtu.be/vz97voWk3jU",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Modified Candlestick",
          link: "https://youtu.be/sPIBL43Ds48",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Hanging Knee Raise",
          link: "https://youtu.be/dmwMfjPQIP8",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Hanging Strait Leg Raise",
          link: "https://youtu.be/5p-vP_XyNaA",
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Curl",
          link: "https://youtu.be/tYpquedo9e0",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "EZ Curl",
          link: "https://youtu.be/MCjBeB844rU",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Close Grip Barbell Curl",
          link: "https://youtu.be/GztM7atVgd8",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "2-Arm Dumbbell Curl",
          link: "https://youtu.be/yYB76DOBPsM",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Curl",
          link: "https://youtu.be/nW7w5vG6IIc",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Dumbbell Curl",
          link: "https://youtu.be/2jsTYbOkx1U",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dummbell Twist Curl",
          link: "https://youtu.be/DcRJ3bLJuVw",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Hammer Curl",
          link: "https://youtu.be/xsOm9xn83-8",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Spider Curl",
          link: "https://youtu.be/y_GK6fn7raU",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Alternating Dumbbell Curl",
          link: "https://youtu.be/S97e09rLmEU",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Rope Twist Curl",
          link: "https://youtu.be/sR_EdrSruyQ",
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Calves on Calf Machine",
          link: "https://youtu.be/wrPN51LyOUE",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Stair Calves",
          link: "https://youtu.be/mucRuC4sEjQ",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Calves on Leg Press",
          link: "https://youtu.be/oRRs1bGzimM",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Smith Machine Calves",
          link: "https://youtu.be/IkrC1u5e-RQ",
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Flat Dumbbell Flye",
          link: "https://youtu.be/t2Kk-TOhq14",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Skullcrusher",
          link: "https://youtu.be/hJLXuvZd05w",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Dumbbell Flye",
          link: "https://youtu.be/_GBEHrc_V5U",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "EZ Bar Overhead Tricep Extension",
          link: "https://youtu.be/U3SkMY6jw5M",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Flye",
          link: "https://youtu.be/60Ai9_c60xg",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "JM Press",
          link: "https://youtu.be/daSL236nYZs",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "High Cable Flye",
          link: "https://youtu.be/ipoTKasbDyQ",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Overhead Tricep Extension",
          link: "https://youtu.be/He-GN_4MAY4",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Machine Chest Flye",
          link: "https://youtu.be/6L7xI3jO_GU",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dips",
          link: "https://youtu.be/B48xWtzMHxk",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Incline Flye",
          link: "https://youtu.be/UPGRju60F60",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated EZ Bar Overhead Tricep Extension",
          link: "https://youtu.be/pOX1m37rOWo",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Pec Dec Flye",
          link: "https://youtu.be/ZYM1mNayaeI",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Assisted Dips",
          link: "https://youtu.be/a5_JKN7j7Ug",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated Barbell Overhead Tricep Extension",
          link: "https://youtu.be/aNzU6AYZiEs",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Skullcrusher",
          link: "https://youtu.be/TtXlapucVxM",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Overhead Tricep Extension",
          link: "https://youtu.be/B21LHpkamJM",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Tricep Pushdown",
          link: "https://youtu.be/B33bKk_r5PU",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Rope Pushdown",
          link: "https://youtu.be/tu2Q82-HMg0",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Bar Skull",
          link: "https://youtu.be/gYbmiluG5Ho",
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Flat Dumbbell Flye",
          link: "https://youtu.be/t2Kk-TOhq14",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Dumbbell Flye",
          link: "https://youtu.be/_GBEHrc_V5U",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Flye",
          link: "https://youtu.be/60Ai9_c60xg",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "High Cable Flye",
          link: "https://youtu.be/ipoTKasbDyQ",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Machine Chest Flye",
          link: "https://youtu.be/6L7xI3jO_GU",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Incline Flye",
          link: "https://youtu.be/UPGRju60F60",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Pec Dec Flye",
          link: "https://youtu.be/ZYM1mNayaeI",
          category_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Standing Barbell Shoulder Press",
          link: "https://youtu.be/n9RZ6FEthGU",
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated Barbell Shoulder Press",
          link: "https://youtu.be/dF9Pm_-2zmg",
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated Dumbbell Shoulder Press",
          link: "https://youtu.be/RGFdTZznnRs",
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "High Incline Dumbbell Press",
          link: "https://youtu.be/YIqmLutlM1g",
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Shoulder Press Machine",
          link: "https://youtu.be/W6kJbZeFssU",
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Standing Dumbbell Shoulder Press",
          link: "https://youtu.be/Ax_6UXGQo7o",
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Walking Lunge",
          link: "https://youtu.be/vNgwqFsVstY",
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Walking Lunge",
          link: "https://youtu.be/LRgZFHceZGo",
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Sumo Squat",
          link: "https://youtu.be/wjw-4R5VR20",
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Deficit Deadlift",
          link: "https://youtu.be/WWS1rPFPyiQ",
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "25's Deadlift",
          link: "https://youtu.be/7If7L0lAur8",
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Sumo Deadlift",
          link: "https://youtu.be/xp1IeyTOB4U",
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Deadlift",
          link: "https://youtu.be/euEPxA3gsDo",
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Hex Bar Deadlift",
          link: "https://youtu.be/f-_q_3tN6Yo",
          category_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Stiff-Legged Deadlift",
          link: "https://youtu.be/zbYgjREbdb0",
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Low Bar Good Morning",
          link: "https://youtu.be/Z3AC4mmiKhw",
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "High Bar Good Morning",
          link: "https://youtu.be/hzHJugCcT6g",
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "45 Degree Back Raise",
          link: "https://youtu.be/OMUGU1Vh8Ao",
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Lying Leg Curl",
          link: "https://youtu.be/m4KB9-Uo4Kc",
          category_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated Leg Curl",
          link: "https://youtu.be/BHxrogNaKoo",
          category_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Single-Leg Leg Curl",
          link: "https://youtu.be/SMln-yOUKSA",
          category_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Bent Over Row",
          link: "https://youtu.be/o2qSVwxiFk4",
          category_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Underhand EZ Bar Row",
          link: "https://youtu.be/ROIrNQJBKZ0",
          category_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Row to Chest",
          link: "https://youtu.be/tRT-cLlXJZ0",
          category_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "1-Arm Dumbbell Row",
          link: "https://youtu.be/Wdv_3ojsPhU",
          category_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Chest Supported Row",
          link: "https://youtu.be/4Idz7uwm3OU",
          category_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Row Machine",
          link: "https://youtu.be/J44yAQ_LXXU",
          category_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "2-Arm Dumbbell Row",
          link: "https://youtu.be/o1yPuXatVRs",
          category_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Row",
          link: "https://youtu.be/y47HOtqxZkg",
          category_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Medium Grip Bench Press",
          link: "https://youtu.be/Dl-by6_vATQ",
          category_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Wide Grip Bench Press",
          link: "https://youtu.be/ILToidt_G0U",
          category_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Flat Dumbbell Bench Press",
          link: "https://youtu.be/20_pP7oaH34",
          category_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Close Grip Bench Press",
          link: "https://youtu.be/3s_QUA4HcxI",
          category_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Flat Machine Bench Press",
          link: "https://youtu.be/cg4tsxQ1BP4",
          category_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Pushup",
          link: "https://youtu.be/TM_PeJIdQwE",
          category_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Close Grip Pushup",
          link: "https://youtu.be/PFtO-p5VLO0",
          category_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Skullcrusher",
          link: "https://youtu.be/hJLXuvZd05w",
          category_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "JM Press",
          link: "https://youtu.be/daSL236nYZs",
          category_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dips",
          link: "https://youtu.be/B48xWtzMHxk",
          category_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Assisted Dips",
          link: "https://youtu.be/a5_JKN7j7Ug",
          category_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Skullcrusher",
          link: "https://youtu.be/TtXlapucVxM",
          category_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Tricep Pushdown",
          link: "https://youtu.be/B33bKk_r5PU",
          category_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Rope Pushdown",
          link: "https://youtu.be/tu2Q82-HMg0",
          category_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Bar Skull",
          link: "https://youtu.be/gYbmiluG5Ho",
          category_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Medium Grip Bench Press",
          link: "https://youtu.be/zWRCV_td3I8",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Standing Barbell Shoulder Press",
          link: "https://youtu.be/n9RZ6FEthGU",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Wide Grip Bench Press",
          link: "https://youtu.be/MDuOnEyof1w",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated Barbell Shoulder Press",
          link: "https://youtu.be/dF9Pm_-2zmg",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Low Incline Dumbbell Press",
          link: "https://youtu.be/efDlxayx234",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated Dumbbell Shoulder Press",
          link: "https://youtu.be/RGFdTZznnRs",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Dumbbell Press",
          link: "https://youtu.be/LYZDsNv8kJ8",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "High Incline Dumbbell Press",
          link: "https://youtu.be/YIqmLutlM1g",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Close Grip Bench Press",
          link: "https://youtu.be/2JIPv1E5a0I",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Shoulder Press Machine",
          link: "https://youtu.be/W6kJbZeFssU",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Machine Bench Press",
          link: "https://youtu.be/eaI0E6ZcwM4",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Standing Dumbbell Shoulder Press",
          link: "https://youtu.be/Ax_6UXGQo7o",
          category_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Medium Grip Bench Press",
          link: "https://youtu.be/zWRCV_td3I8",
          category_id: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Wide Grip Bench Press",
          link: "https://youtu.be/MDuOnEyof1w",
          category_id: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Low Incline Dumbbell Press",
          link: "https://youtu.be/efDlxayx234",
          category_id: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Dumbbell Press",
          link: "https://youtu.be/LYZDsNv8kJ8",
          category_id: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Close Grip Bench Press",
          link: "https://youtu.be/2JIPv1E5a0I",
          category_id: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Incline Machine Bench Press",
          link: "https://youtu.be/eaI0E6ZcwM4",
          category_id: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "High Bar Squat",
          link: "https://youtu.be/2-o_-HTPhv8",
          category_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Close Stance Feet Forward Squats",
          link: "https://youtu.be/ppluAD4MHK8",
          category_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Machine Feet Forward Squat",
          link: "https://youtu.be/SYji94GabJg",
          category_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Leg Press",
          link: "https://youtu.be/mJSsWpuyiCM",
          category_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Hack Squat",
          link: "https://youtu.be/SOyO4LHjhX4",
          category_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Front Squat",
          link: "https://youtu.be/lNYA35p8XJQ",
          category_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Front Squat (Alernate Grip)",
          link: "https://youtu.be/uFEPuNtHoOU",
          category_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Facepull",
          link: "https://youtu.be/BvX7g1yr1pY",
          category_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Upright Row",
          link: "https://youtu.be/fbFISuP7Ezk",
          category_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Facepull",
          link: "https://youtu.be/d90AskSQcDc",
          category_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Upright Row",
          link: "https://youtu.be/KkpCTyjGlZo",
          category_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Facepull",
          link: "https://youtu.be/Ana4dJbCvxE",
          category_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Upright Row",
          link: "https://youtu.be/FoZM6vuuKBc",
          category_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Rear Lateral Raise",
          link: "https://youtu.be/c32OxRaEhxM",
          category_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Side Lateral Raise",
          link: "https://youtu.be/pg3hz43P09w",
          category_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Thumbs Down Lateral Raise",
          link: "https://youtu.be/7P2LTF73EOM",
          category_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Facepull",
          link: "https://youtu.be/BvX7g1yr1pY",
          category_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Upright Row",
          link: "https://youtu.be/fbFISuP7Ezk",
          category_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Facepull",
          link: "https://youtu.be/d90AskSQcDc",
          category_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Upright Row",
          link: "https://youtu.be/KkpCTyjGlZo",
          category_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Facepull",
          link: "https://youtu.be/Ana4dJbCvxE",
          category_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Upright Row",
          link: "https://youtu.be/FoZM6vuuKBc",
          category_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Rear Lateral Raise",
          link: "https://youtu.be/c32OxRaEhxM",
          category_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Side Lateral Raise",
          link: "https://youtu.be/pg3hz43P09w",
          category_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Thumbs Down Lateral Raise",
          link: "https://youtu.be/7P2LTF73EOM",
          category_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Upright Row",
          link: "https://youtu.be/fbFISuP7Ezk",
          category_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Upright Row",
          link: "https://youtu.be/KkpCTyjGlZo",
          category_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Upright Row",
          link: "https://youtu.be/FoZM6vuuKBc",
          category_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Side Lateral Raise",
          link: "https://youtu.be/pg3hz43P09w",
          category_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Thumbs Down Lateral Raise",
          link: "https://youtu.be/7P2LTF73EOM",
          category_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Shrug",
          link: "https://youtu.be/hR8aOS5LZjU",
          category_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Bent Over Shrug",
          link: "https://youtu.be/6DiJh6_jeoo",
          category_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Shrug",
          link: "https://youtu.be/z3yCDRGrQTM",
          category_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Bent Over Shrug",
          link: "https://youtu.be/S3NIBLmlKaU",
          category_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Skullcrusher",
          link: "https://youtu.be/hJLXuvZd05w",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "EZ Bar Overhead Tricep Extension",
          link: "https://youtu.be/U3SkMY6jw5M",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "JM Press",
          link: "https://youtu.be/daSL236nYZs",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Overhead Tricep Extension",
          link: "https://youtu.be/He-GN_4MAY4",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dips",
          link: "https://youtu.be/B48xWtzMHxk",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated EZ Bar Overhead Tricep Extension",
          link: "https://youtu.be/pOX1m37rOWo",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Assisted Dips",
          link: "https://youtu.be/a5_JKN7j7Ug",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated Barbell Overhead Tricep Extension",
          link: "https://youtu.be/aNzU6AYZiEs",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Dumbbell Skullcrusher",
          link: "https://youtu.be/TtXlapucVxM",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Overhead Tricep Extension",
          link: "https://youtu.be/B21LHpkamJM",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Tricep Pushdown",
          link: "https://youtu.be/B33bKk_r5PU",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Rope Pushdown",
          link: "https://youtu.be/tu2Q82-HMg0",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Bar Skull",
          link: "https://youtu.be/gYbmiluG5Ho",
          category_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Overhand Pullup",
          link: "https://youtu.be/NF4nbNsqreQ",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Parallel Pullup",
          link: "https://youtu.be/lFyDmuDjRts",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Underhand Pullup",
          link: "https://youtu.be/SmRa30Jci54",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Wide Grip Pullup",
          link: "https://youtu.be/HOWPPDueZY8",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Assisted Overhand Pullup",
          link: "https://youtu.be/ghHW6sETs-I",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Assisted Parallel Pullup",
          link: "https://youtu.be/UNo4yBbidG4",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Assisted Underhand Pullup",
          link: "https://youtu.be/2PC8eYTte5w",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Normal Grip Pulldown",
          link: "https://youtu.be/gQ179IUjMsQ",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Parallel Pulldown",
          link: "https://youtu.be/uMjeHo2_EwM",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Underhand Pulldown",
          link: "https://youtu.be/bxfHw1LvH24",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Wide-Grip Pulldown",
          link: "https://youtu.be/xyoFXl-k644",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Narrow Grip Pulldown",
          link: "https://youtu.be/QzjjwxZOVdE",
          category_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "EZ Bar Overhead Tricep Extension",
          link: "https://youtu.be/U3SkMY6jw5M",
          category_id: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Barbell Overhead Tricep Extension",
          link: "https://youtu.be/He-GN_4MAY4",
          category_id: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated EZ Bar Overhead Tricep Extension",
          link: "https://youtu.be/pOX1m37rOWo",
          category_id: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Seated Barbell Overhead Tricep Extension",
          link: "https://youtu.be/aNzU6AYZiEs",
          category_id: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          exercise: "Cable Overhead Tricep Extension",
          link: "https://youtu.be/B21LHpkamJM",
          category_id: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkInsert('exercises');
  }
};
