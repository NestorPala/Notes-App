const express = require("express");
const router = express.Router();

// Importing the database
const { Note } = require("../db");


router.post("/create", async (req, res) => {
    const newNote = {
        title: req.body.title,
        content: req.body.content,
        is_archived: false
    };
    const note = await Note.create(newNote);
    res.json(note);
});

router.patch("/edit/:id", async (req, res) => {
    await Note.update(
        {
            title: req.body.title,
            content: req.body.content
        },
        {
            where: {
                id: req.params.id
            }
        }
    );
    res.json("Note edited sucessfully!");
});

router.delete("/delete/:id", async (req, res) => {
    await Note.destroy({
        where: {
            id: req.params.id
        }
    });
    res.json("Note deleted sucessfully!");
});

router.patch("/archive/:id", async (req, res) => {
    await Note.update(
        {
            is_archived: true,
        },
        {
            where: {
                id: req.params.id
            }
        }
    );
    res.json("Note archived sucessfully!");
});

router.patch("/unarchive/:id", async (req, res) => {
    await Note.update(
        {
            is_archived: false,
        },
        {
            where: {
                id: req.params.id
            }
        }
    );
    res.json("Note un-archived sucessfully!");
});

// Active notes
router.get("/", async (req, res) => {
    const notes = await Note.findAll();
    res.json(notes);
});

router.get("/archived", async (req, res) => {
    const archivedNotes = await Note.findAll({
        where : {
            is_archived: true
        }
    });
    res.json(archivedNotes);
});


module.exports = router;