"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltRounds = 10;
    const plainPasswords = ["mustafa","TestMe","pupilfirst", "testadmin"]; 
    const hashedPasswords = await Promise.all(
      plainPasswords.map((password) => bcrypt.hash(password, saltRounds))
    );
    const users = [
      {
        name: "Mustafa",
        email: "mustafa.bharmal178@gmail.com",
        password: hashedPasswords[0],
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "testme",
        email: "testme@gmail.com",
        password: hashedPasswords[1],
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "wdcoach",
        email: "wdcoach@gmail.com",
        password: hashedPasswords[2],
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "testadmin",
        email: "testadmin@gmail.com",
        password: hashedPasswords[3],
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return await queryInterface.bulkInsert("Users", users);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

 
