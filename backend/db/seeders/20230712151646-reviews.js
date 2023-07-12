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
    options.tableName = 'Reviews';
    await queryInterface.bulkInsert(options, [
      {
        body:"This has been a truly adventurous journey of 6 seasons. Each of them unique giving us taste of horror, comedy, dark comedy, wild, politics, suspense and most importantly AI and Technological advancement.",
        watchedDate: "2023-06-12",
        showId: 1,
        userId: 2,
        rating: 5
      },
      {
        body:"I can only speak from my personal experience of watching this incredibly thought provoking series.  This is not your regular horror film.  A lot of psychological work went into the making of this that puts horror at a whole new level.",
        watchedDate: "2023-05-10",
        showId: 2,
        userId: 1,
        rating: 4
      },
      {
        body:"OMG!!!  There  is no doubt  that, this is the  beeest ever sitcom drama  u will ever watch.I might not be as critical at noticong the details but boss, believe me u won't either.I've watched  a lot of series but this has been the best!",
        watchedDate: "2023-03-21",
        showId: 3,
        userId: 4,
        rating:4
      },
      {
        body:"I think that this season of The Bachelorette was a bit much. The finale made me look at Hannah a little differently than I did during the season. I don’t approve of what Jed did, BUT she acts like he cheated on her.",
        watchedDate: "2023-04-10",
        showId: 4,
        userId: 3,
        rating:1
      },
      {
        body:"It can be awfully cheesy but it still doesn't shy away on how you'll continue watching. I wouldn't say it's an Oscar-winning series with deep under layers of meaning so if that's you're type then there's no need to watch it if you don't relate to my description.",
        watchedDate: "2023-01-02",
        showId: 5,
        userId: 1,
        rating: 3
      },
      {
        body: "HOLY!!!  WOW! WHAT AN AMAZING TV SHOW!  This is actually the most successful TV show Nickelodeon has ever created.  It has now become my most favorite TV show ever!  I really love how this TV show focuses on bringing others together than blowing them and things up.",
        watchedDate: "2023-05-04",
        showId: 6,
        userId: 5,
        rating: 5
      },
      {
        body:"My two kids, aged 2 & 5 (boy & girl) absolutely love this show and as an adult it's one show that I actually don't mind sitting down and watching with them. They actually laugh out loud at some of the episodes which they don't do with other shows.",
        watchedDate: "2023-03-20",
        showId: 7,
        userId: 3,
        rating: 4
      },
      {
        body: "Love love love love this series - the characters, the acting, the script and the mind-blowing season 2 finale. Its not a morality play but we get the lessons. There's nothing like it on TV at the moment.",
        watchedDate: "2023-02-13",
        showId: 8,
        userId: 2,
        rating: 3
      },
      {
        body:"I liked it for a cute sitcom and was confused every time they said one person was not an actor.  When I found out at the same time in the series that Ronald did what actually happened,  I cried because of how wonderful of a person he is.",
        watchedDate: "2023-06-05",
        showId: 9,
        userId: 5,
        rating: 3
      },
      {
        body:"I am editing this review after watching last episode. I liked the thoughts of Na he do and was happy that they supported each other but watching last episode, I can say that they showed the very selfish side of Na hee do. When Beak jin really required her supported she decided to break up. ",
        watchedDate: "2022-09-08",
        showId: 10,
        userId: 4,
        rating: 2
      },
      {
        body:"This show got the REAL FRICKIN' FUNNY MOMENTS for me, but i hated the ending. I know this world is too cruel for too many happy endings but this! this is a comedy, sooooooooooooo AUDIENCE GOING FOR COMEDIES FINDING IT HARD TO DEAL WITH MESSY ENDINGS AND NOT HAPPY ENDINGS!!! I came to watch HIMYM bcs it's a comedy, and i expect to be happy, smile reaching my ears after i finished, but N0! You all got to make the endings hard.",
        watchedDate: "2022-10-10",
        showId: 11,
        userId: 3,
        rating: 1
      },
      {
        body:"this is how i feel about carol in s10, i can't see anyone rooting for her this season to be honest, she doesn't caare about anybody but herself ans she put everyone in danger this season and didn't care!!! we all now know she is a liar who doesn't keep her word, and yes i'm talking about her promise to neegan. he went way out of his way for everyone, mainly himself but still he kept his word!!!!!",
        watchedDate: "2021-10-03",
        showId: 12,
        userId: 4,
        rating: 2
      },
      {
        body:"Okay, so lemme just say this. From the first episode, i was fully hooked. The characters were hilarious and the plot was pretty good overall. ALTHOUGH, I feel like this show is just too Gen Z. They use way too many popular tiktok sounds and stuff to try and fit with the whole party and fun theme i guess. ",
        watchedDate: "2023-02-14",
        showId: 13,
        userId: 2,
        rating:4
      },
      {
        body:"Its alright... The character arcs are kinda bad cuase they all just end with the characters ignoring there probloms and no grouth (Besides peridots where there arc came to a good conclusion). CHracters are alright. ITs kinda bland to look at.",
        watchedDate: "2022-03-22",
        showId: 14,
        userId: 5,
        rating: 3
      },
      {
        body: "The usual formula for making slice of life dramas feels very common and oversaturated in a lot of streaming shows nowadays where you can see clearly the absence of passion. I'm happy to say that The Bear pleasantly surprised me in that regard. I've never been much of an enthusiast about watching dime a dozen dramas but this show is so well put together to the point where you actually feel like you're in a real heavily busy kitchen with real flesh and blood people.",
        watchedDate: "2022-12-10",
        showId: 15,
        userId: 3,
        rating: 5
      },
      {
        body:"The stong point of 'Prison Break' is that despite several, evident loopholes in the storyline, once we start watching this series, it keeps us hooked on to it until the last episode of the 5th season. The thrill is too tempting to resist watching it.",
        watchedDate: "2020-04-12",
        showId: 16,
        userId: 4,
        rating: 4
      },
      {
        body:"This show is heartwarming and purely inspirational. I like how Ted establishes his care for the team of AFC Richmond and all of us. Specifically, the characters were built up to be better than before, as friends and family." ,
        watchedDate: "2022-01-23",
        showId: 17,
        userId: 1,
        rating:4
      },
      {
        body:"This show isn't worth even one star. It's all for attention, and it's clearly fake. How is this even reality? They're busy boosting their body parts and sitting on mountains of cash, and anytime something 'serious' or 'life-changing' happens people just go bananas over it because of how famous they are. They're not real people. They're fabrications of a perfect world.",
        watchedDate: "2022-07-05",
        showId: 18,
        userId: 5,
        rating: 1
      },
      {
        body: "This is a brilliantly written script with absolutely no hope.  Two broken souls that are trapped perpetually in their brokenness.  Yes the stupidity of adolescence gets in their way but for how genuinely deep and intuitive these characters are, they are godless.",
        watchedDate: "2023-04-04",
        showId: 19,
        userId: 1,
        rating:3
      },
      {
        body: "I'm giving the show three stars because for what it is, I get why it's so popular. I enjoyed the first two seasons a lot, they were very good. The third was sort of boring to me and the fourth was better than the third for sure. But from season five and on I lost all interest.",
        watchedDate: "2022-10-30",
        showId: 20,
        userId: 2,
        rating: 3
      },
      {
        body: "I've learned things from this show. Steven Universe is by far one of the most beautifully crafted shows out there. Although the audience is generally leaned towards kids, there are serious topics and lessons involved. ",
        watchedDate: "2022-09-09",
        showId: 14,
        userId: 2,
        rating: 5
      },
      {
        body: "Very intriguing episodes, makes one think about how our society is stitched together and what kind of incentives does it take to govern behaviour and outcomes in a society. Some things like socioeconomic hierarchy, incentives and privilege are common underlying topics that fascinates the audiance despite showing similar characteristics in outcomes across various universes.",
        watchedDate: "2023-03-02",
        showId: 1,
        userId: 6,
        rating: 4
      },
      {
        body: "Very hilarious and refreshing limited series! The premise involves a fake trial and brilliant improv actors, all of whom surround the single, unsuspecting hero who thinks he's being filmed in a documentary for a real trial. It works so well because Ronald is a genuinely sweet and regular guy and we get to watch him rise to the challenges thrown at him.",
        watchedDate: "2023-06-10",
        showId: 9,
        userId: 6,
        rating: 5
      },
      {
        body: "One of the best kdrama existing out here and I swear by it. Honestly I first started watching this drama for NJH but Kim Tae Ri was the one I fell for in this drama. NJH was the best no doubts but Kim Tae Ri was the one who stole the show since the very first episode.",
        watchedDate: "2022-08-01",
        showId: 10,
        userId: 6,
        rating: 5
      },
      {
        body: "the cam guy REALLY TALKS LIKE PETER KAVINSKY OMG ok ok okkk sooo ive watched 7 eps in one seating. i get why some people say that this is just a waste of time. but for a 21 year old like me😭😭😭 i need this type of waste once in a while.",
        watchedDate: "2023-02-20",
        showId: 13,
        userId: 6,
        rating: 3
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "Reviews"
    await queryInterface.bulkDelete(options)
  }
};
