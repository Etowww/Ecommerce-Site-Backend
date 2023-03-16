# Ecommerce-Site-Backend

## Description
E-commerce platforms like Shopify provide a variety of services to businesses and websites of all sizes. Since E-commerce platforms are extremely prevalent in the industry it is important as developer we understand the fundamental architecture of e-commerce sites.

The goal of this project was to take a working Express.js API and configure it to use Sequelize to interact with a MySQL database. Essentially creating a basic E-commerce Site Backend.

## Installation
If you would like to run this application on your native device first clone the repository.
After you have cloned repository navigate to the root of your directory with the cloned code.
Run `npm install` to get the required dependencies. Once that's done navigate into your MySQL by
typing `mysql -u root -p` and then entering in your mySQL password. Once inside the shell run 
`SOURCE ./db/schema.sql`. After you have sourced your schema exit the MySQL shell and run
`npm run seed` this will seed your database. After the database has been seeded you can run
`node server.js` to spin up your server at `http://localhost:3001/`.

I will attach below a video demonstrating these installation steps:

https://drive.google.com/file/d/1H4RVJpxqbbWQ51kOrC30Esrihg3WZw9D/view?usp=share_link

## Usage

This video will show you how to "use" the app or essentially test the API routes to the database in Insomnia:

https://drive.google.com/file/d/12yeprfP3u-2rVvbUB8mBr-u4o1X8ira_/view?usp=share_link


## Credits
Starter code provide by the University of Arizona FullStack Web Development Bootcamp.

## License
MIT License

Copyright (c) [2023] [EvanTowlerton]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## How to Contribute
N/A (This was strictly for demonstrating how a e-commerce website backend might function)

## Tests
N/A
