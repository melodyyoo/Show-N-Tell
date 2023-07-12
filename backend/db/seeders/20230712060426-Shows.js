'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
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
   options.tableName = 'Shows';
   await queryInterface.bulkInsert(options, [
    {
      name: "Black Mirror",
      image: "https://m.media-amazon.com/images/M/MV5BZTgyNTBkNzctN2I3NC00NTA1LWJiMDMtYzA2MmYyZjc1NWQzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      banner: "https://ichef.bbci.co.uk/news/976/cpsprodpb/FDE7/production/_130099946_black_mirror_n_s6_e2_00_23_14_13.png",
      genre: "Drama",
      year: "2011-",
      director: "Charlie Brooker",
      synopsis: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
      userId: 1
    },
    {
      name: "The Haunting of Hill House",
      image: "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_FMjpg_UX1000_.jpg",
      banner: "https://occ-0-1432-768.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaxEl83KSCOJL5YJlCI3GZ9Phdq-H3dQsuNe5D6_ZLlqDRq8afP8nYMR8SswnlhOgbDQRSKT55j9avVQcsssOpn4ehdo10CEJVcK.jpg",
      genre: "Horror",
      year: "2018",
      director: "Mike Flanagan",
      synopsis: "Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
      userId:2
    },
    {
      name: "The Office",
      image: "https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/library/theoffice/mainpage/office-vertical-art.jpg/_jcr_content/renditions/original.jpeg",
      banner: "https://m.media-amazon.com/images/M/MV5BMzVkN2RhMTctZGNkYS00MzdlLTk4YzEtMjlkODAzZGRmMDkzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      genre: "Sitcom",
      year: "2005-2013",
      director: "Greg Daniels",
      synopsis: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
      userId:3
    },
    {
      name: "The Bachelorette",
      image: "https://media.glamour.com/photos/645e8f3d89245a56462c4518/master/w_2560%2Cc_limit/BCT_S20_KA_Roses_1080x1350_V4_Exclusive.jpg",
      banner: "https://www.tvinsider.com/wp-content/uploads/2023/07/charity-bachelorette-1014x570.jpg",
      genre: "Reality TV",
      year: "2003-",
      director: "Leslye Headland",
      synopsis: "A woman meets a number of men and tries to narrow them down to one who could steal her heart.",
      userId:4
    },
    {
      name: "Bridgerton",
      image: "https://m.media-amazon.com/images/M/MV5BNjk4MDdhODctMmFhYi00ZTNhLThlN2UtN2NhZGY0OGFlMWEwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
      banner: "https://imgix.bustle.com/wmag/2021/01/BRIDGERTON_108_Unit_01959R.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
      genre: "Romance",
      year: "2020-",
      director: "Chris Van Dusen",
      synopsis: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society. Inspired by Julia Quinn's best selling novels.",
      userId:5
    },
    {
      name: "Avatar the Last Airbender",
      image: "https://flxt.tmsimg.com/assets/p186109_b_v8_aa.jpg",
      banner: "https://occ-0-56-1380.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWa6GUEhbPN67UWEf3hf9cgJqo-ChmjDXtoTDyrkoxTL9V1HexawqkAmBR13c-sxJAK83eB5NiB3dn2tkBATvfh1HzXnc6B1kuFw.jpg",
      genre: "Family",
      year: "2005-2008",
      director: "Michael Dante DiMartino",
      synopsis: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
      userId: 1
    },
    {
      name: "Bluey",
      image: "https://m.media-amazon.com/images/M/MV5BMDBiNDI3YjQtNDdkNS00ZDliLTlmMmQtMDE4ZWM1ZGIyNjljXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
      banner: "https://cdn.vox-cdn.com/thumbor/Fx2H5R9Ln2kPZ1nnERq9EpPYWTA=/0x0:2000x1125/1400x1050/filters:focal(860x419:1180x739):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/70798886/Bluey_S2_Iconic_00_001.0.png",
      genre: "Family",
      year: "2018-",
      director: "Joe Brumm",
      synopsis: "The slice-of-life adventures of an Australian Blue Heeler Cattle Dog puppy as she has fun with her family and friends in everyday situations.",
      userId:2
    },
    {
      name: "Succession",
      image: "https://m.media-amazon.com/images/M/MV5BZTY0YjU0NTUtMGRmNS00NDMyLWI2MzYtNjM2MmM1M2FkMjkyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg",
      banner: "https://media.cnn.com/api/v1/images/stellar/prod/230126123530-01-succession-season-4.jpg",
      genre: "Drama",
      year: "2018-2023",
      director: "Jesse Armstrong",
      synopsis: "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.",
      userId:3
    },
    {
      name: "Jury Duty",
      image: "https://flxt.tmsimg.com/assets/p24256448_b_v13_aa.jpg",
      banner: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1295ae46c2c6a61b0a19c6b999f11046d3e40b18b7352953ff0f407df28642b5._RI_SX720_FMjpg_.jpg",
      genre: "Reality TV",
      year: "2023",
      director: "Lee Eisenberg",
      synopsis: "Chronicling the inner workings of an American jury trial through the eyes of juror Ronald Gladden, who doesn't realize that everyone, except him, is an actor.",
      userId:4
    },
    {
      name: "Twenty Five Twenty One",
      image: "https://m.media-amazon.com/images/M/MV5BNWYzODM2NGEtOWUyZi00MmEyLWFmYmItZDI3NDYzMGI0NWI2XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_FMjpg_UX1000_.jpg",
      banner: "https://www.cheatsheet.com/wp-content/uploads/2022/04/Actor-Kim-Tae-ri-as-Hee-do-in-Twenty-Five-Twenty-One-finale.jpg",
      genre: "Romance",
      year: "2022",
      director: "Kim Seon-tae",
      synopsis: "In a time when dreams seem out of reach, a teen fencer pursues big ambitions and meets a hardworking young man who seeks to rebuild his life.",
      userId:5
    },
    {
      name: "How I Met Your Mother",
      image: "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_.jpg",
      banner: "https://media.gq.com/photos/55828af6e52bc4b477a979c7/master/w_1600%2Cc_limit/blogs-the-feed-how-i-met-your-mother-hate.jpg",
      genre: "Sitcom",
      year: "2005-2014",
      director: "Carter Bays",
      synopsis: "A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.",
      userId:1
    },
    {
      name: "The Walking Dead",
      image: "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      banner: "https://static01.nyt.com/images/2022/11/20/arts/20twd-1/20twd-1-superJumbo.jpg",
      genre: "Horror",
      year: "2010-2022",
      director: "Frank Darabont",
      synopsis: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
      userId:2
    },
    {
      name: "The Summer I Turned Pretty",
      image: "https://m.media-amazon.com/images/M/MV5BOTBkZGJiYzktMTdkMS00ZWViLWI0YjItNmQwOTE5MjZmYThlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      banner: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/b7a291cc0a1b1860d0f20e355964aa221d91bdd0593fec62f45beb5ad60529ca._RI_.jpg",
      genre: "Romance",
      year: "2022-",
      director: "Jenny Han",
      synopsis: "A love triangle between one girl and two brothers. A story about first love, first heartbreak, and the magic of that one perfect summer.",
      userId:3
    },
    {
      name: "Steven Universe",
      image: "https://flxt.tmsimg.com/assets/p9471669_b_v10_be.jpg",
      banner: "https://tvline.com/wp-content/uploads/2019/08/steven-universe-movie-ending-explained.jpg?w=620&h=420&crop=1",
      genre: "Family",
      year: "2013-2019",
      director: "Rebecca Sugar",
      synopsis: "A team of intergalactic warriors fights to protect the Earth, but the combination of three highly trained beings and one quirky young boy leaves the team struggling to overcome the dangerous scenarios that are put in front of them.",
      userId:4
    },
    {
      name: "The Bear",
      image: "https://www.goldderby.com/wp-content/uploads/2023/05/The-Bear-Season-2-Key-Art-e1683567152496.jpg",
      banner: "https://assets.fxnetworks.com/cms-next/production/ac59c9d4-eb9f-44ca-aeed-9c45db736983.jpg",
      genre: "Drama",
      year: "2022-",
      director: "Christopher Storer",
      synopsis: "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.",
      userId:5
    },
    {
      name: "Prisonbreak",
      image: "https://flxt.tmsimg.com/assets/p185128_b_v9_ag.jpg",
      banner: "https://deadline.com/wp-content/uploads/2016/05/brothers_104_hires1.jpg",
      genre: "Drama",
      year: "2005-2017",
      director: "Paul T. Schuering",
      synopsis: "A structural engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence by breaking themselves out from the inside.",
      userId:1
    },
    {
      name: "Ted Lasso",
      image: "https://m.media-amazon.com/images/M/MV5BMTdmZjBjZjQtY2JiNS00Y2ZlLTg2NzgtMjUzMGY2OTVmOWJiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      banner: "https://pyxis.nymag.com/v1/imgs/7fe/b9d/cba3c24c67d07815678ebd331d2391f77f-Ted-Lasso-Photo-030901.jpg",
      genre: "Sitcom",
      year: "2020-2023",
      director: "Brendan Hunt",
      synopsis: "American college football coach Ted Lasso heads to London to manage AFC Richmond, a struggling English Premier League football team.",
      userId:2
    },
    {
      name: "Keeping Up With the Kardashians",
      image: "https://m.media-amazon.com/images/M/MV5BMjJhMzUyYzQtMWZmYy00MGQ0LTlhMjMtMDkxOTFiZjRjNmFiXkEyXkFqcGdeQXVyMTI5NzE3NDQ2._V1_FMjpg_UX1000_.jpg",
      banner: "https://images.gawker.com/1523217507204761672/c_scale,fl_progressive,q_80,w_800.png",
      genre: "Reality TV",
      year: "2007-2021",
      director: "Ryan Seacrest",
      synopsis: "A peek inside the exploits and privileged private lives of the blended Kardashian-Jenner family, including sisters Kim, Kourtney, Khloé, Kendall and Kylie.",
      userId:3
    },
    {
      name: "Normal People",
      image: "https://m.media-amazon.com/images/M/MV5BNzMzYmRiNGEtMDg5OC00OGZmLWFmNDktYzRlZTFkZmZiMjAzXkEyXkFqcGdeQXVyMTE2OTE2MzE1._V1_FMjpg_UX1000_.jpg",
      banner: "https://media.newyorker.com/photos/5ec2d7a40fe2fbfb61a298c8/16:9/w_2136,h_1201,c_limit/Russell-NormalPeople-3.jpg",
      genre: "Romance",
      year: "2020",
      director: "Lenny Abrahamson",
      synopsis: "Follows Marianne and Connell, from different backgrounds but the same small town in Ireland, as they weave in and out of each other's romantic lives.",
      userId:4
    },
    {
      name: "American Horror Story",
      image: "https://m.media-amazon.com/images/M/MV5BOWFlOWE1OGEtOTVlMi00M2JmLWJlMGEtOWVjOGFhOTNlYTZiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      banner: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/10/21/17/American-Horror-Story.jpg",
      genre: "Horror",
      year: "2011-",
      director: "Ryan Murphy",
      synopsis: "An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, a slasher summer camp, a bleak beach town and desert valley, and NYC.",
      userId:5
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
