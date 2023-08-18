# Show-N-Tell
Inspired by Letterboxd, Show 'N Tell is a site that allows users to rate and review their favorite TV shows. Full CRUD functionality is currently available for shows, reviews, and comments.

Check out Show 'N Tell [here](https://show-n-tell.onrender.com/)!

## Index

[MVP Feature List](https://github.com/melodyyoo/Show-N-Tell/wiki/MVP-Feature-List) | [Database Schema](https://github.com/melodyyoo/Show-N-Tell/wiki/Database-Schema-Image) | [Wireframes](https://github.com/melodyyoo/Show-N-Tell/wiki/Wireframes) | [API Documentation](https://github.com/melodyyoo/Show-N-Tell/wiki/API-Documentation)

## Technologies Used

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Shows
![shows-gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTR1cHc0YzZscDEydzRqY3BkaHY1Mzg3czhyMmE2am51eG4waGZuNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AdWUhqxv1JycWVSZEI/giphy.gif)

## Reviews
![reviews-gif](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2ZjemJqZDE5MTQ3Z2R5aGxudGNxYzVoaGF0aHV5aGRvaGd3c3FnYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Du9OWlkMkQM7LDasKa/giphy.gif)

## Getting started

1. Clone this repository: https://github.com/melodyyoo/Show-N-Tell
2. Install denpendencies into the Backed and the Frontend by making a terminal for each one and then run the following:
   * backend (In base of directory):
       * ` Pipenv install `
   * frontend :
       * ` npm install `
3. Create a .env file using the .envexample provided

4. Set up your database with information from your .env and then run the following to create your database, migrate, and seed (base directory):
   * ` Pipenv shell `
   * ` flask db init `
   * ` flask db migrate `
   * ` flask db upgrade `
   * ` flask seed all `
5. Start the app for both backend and frontend using:
   * backend :
       * ` npm start`
   * frontend :
       * ` npm start `
## Amazon Web Services S3
   * For setting up your AWS refer to this [guide](https://github.com/jdrichardsappacad/aws-s3-pern-demo)
