'use strict';

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   options.tableName = "Comments";
   await queryInterface.bulkInsert(options,[
    {
      body: "I've been hooked from the very first season, and it's impressive how the show manages to keep us engaged with its diverse and compelling storylines.",
      reviewId: 1,
      userId: 3
    },
    {
      body: "the most recent season was alright tho......",
      reviewId: 1,
      userId: 4
    },
    {
      body: "I personally liked the Haunting of Bly Manor more. Victoria Pedretti's performance was more impressive in that series.",
      reviewId: 2,
      userId: 5
    },
    {
      body: "Definitely messed with me I couldn't sleep alone for a week T_T",
      reviewId: 2,
      userId: 6
    },
    {
      body: "100% fax no printer",
      reviewId: 3,
      userId: 5
    },
    {
      body: "Yeah I cried when it was over. No other show has made me laugh so hard!!",
      reviewId: 3,
      userId: 2
    },
    {
      body: "can we just all just agree that tyler was perfect for her",
      reviewId: 4,
      userId: 1
    },
    {
      body: "umm Hannah was classy the whole season what are you talking about",
      reviewId: 4,
      userId: 2
    },
    {
      body: "if it's cheesy call me a mouse because I've been eating this show up :P",
      reviewId: 5,
      userId: 4
    },
    {
      body: "🥰😍😘",
      reviewId: 5,
      userId: 6
    },
    {
      body: "I'm a little worried about how the live action will turn out tbh",
      reviewId: 6,
      userId: 2
    },
    {
      body: "I fear Nickelodeon peaked during the ATLA era 😔",
      reviewId: 6,
      userId: 4
    },
    {
      body: "Same with my kids! Whenever I turn it on it gets them to stop crying haha!",
      reviewId: 7,
      userId: 4
    },
    {
      body: "Call me a kid because this show also makes me laugh out loud😝",
      reviewId: 7,
      userId: 6
    },
    {
      body: "Succession returned for a darkly funny, whip-smart, and brilliantly performed second run that leaves us begging for more and assured that the show is the best thing on television. Treachery has rarely felt so good.",
      reviewId: 8,
      userId: 3
    },
    {
      body: "Roman shined, Shiv and Tom demonstrated the importance of why couples need to communicate or you will find yourself on completely different pages.",
      reviewId: 8,
      userId: 4
    },
    {
      body: "Hahaha so I wasn't the only one who didn't catch that until the end",
      reviewId: 9,
      userId: 1
    },
    {
      body: "They literally told you before every episode how could you not have known",
      reviewId: 9,
      userId: 2
    },
    {
      body: "By no means was it easy for her. The breakup was what was best for the both of them!!",
      reviewId: 10,
      userId: 3
    },
    {
      body: "I think the gut wrenchingly painful ending is what made this show memorable for me",
      reviewId: 10,
      userId: 1
    },
    {
      body: "AGREED!!! JUSTICE FOR TRACY",
      reviewId: 11,
      userId: 4
    },
    {
      body: "Yeah they tried to make Ted and Robin happen a million times throughout the show I was over it by the end",
      reviewId: 11,
      userId: 5
    },
    {
      body: "no carol slander in this house",
      reviewId: 12,
      userId: 5
    },
    {
      body: "agreed... don't make promises you can't keep girl",
      reviewId: 12,
      userId: 1
    },
    {
      body: "I'm surprised you even made it that far in the show",
      reviewId: 12,
      userId: 2
    },
    {
      body: "yeah the entire soundtrack is just taylor swift's discography",
      reviewId: 13,
      userId: 3
    },
    {
      body: "no offense but I got a seizure trying to read this",
      reviewId: 14,
      userId: 6
    },
    {
      body: "YES CHEF",
      reviewId: 15,
      userId: 2
    },
    {
      body: "Yup. I've worked in a kitchen for 32 years and the show pretty much depicts the kitchen perfectly.",
      reviewId: 15,
      userId: 4
    },
    {
      body: "yeah I binged all 5 seasons in a week. the cliffhangers were just too good",
      reviewId: 16,
      userId: 5
    },
    {
      body: "Yeah I can finally understand the hype of this show after watching it",
      reviewId: 17,
      userId: 2
    },
    {
      body: "was rooting for Ted and the team the whole way through :')",
      reviewId: 17,
      userId: 3
    },
    {
      body: "Kim there are people dying",
      reviewId: 18,
      userId: 6
    },
    {
      body: "And I'll still watch 😔",
      reviewId: 18,
      userId: 3
    },
    {
      body: "I thought it was pretty accurate to the book",
      reviewId: 19,
      userId: 5
    },
    {
      body: "Murder House was EASILY the best season",
      reviewId: 20,
      userId: 5
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Comments'
    await queryInterface.bulkDelete(options)
  }
};
