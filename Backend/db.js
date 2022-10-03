const Sequelize = require('sequelize');

// Importing the models
const NoteModel = require("./models/note.model");

const notes_db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

const Note = NoteModel(notes_db, Sequelize);

notes_db
.sync({force: false})
.then(() => console.log("Tables synced"));

module.exports = { 
    Note 
};