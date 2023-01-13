const express = require("express");
const router = express.Router();
const Note = require("../models/note");


router.post("/create", async (req, res) => {
    const note = new Note({
        title: req.body.title,
        content: req.body.content,
        is_archived: false
    });

    try {
        try {
            await note.save();
            res.status(201).json({ message: "Note added successfully" });
        } catch (requestError) {
            res.status(400).json({ message: requestError.message });
        }
    } catch (serverError) {
        res.status(500).json({ message: serverError.message });
    }
});

router.patch("/edit/:id", getNote, async (req, res) => {
    try {
        const updatedNote = await res.note.update({
            title: req.body.title,
            content: req.body.content
        });
        res.json(updatedNote);
    } catch (requestError) {
        res.status(400).json({ message: requestError.message });
    }
});

router.delete("/delete/:id", getNote, async (req, res) => {
    await res.note.remove();
    res.json({ message: "Note deleted successfully" });
});

router.patch("/archive/:id", getNote, async (req, res) => {
    try {
        const updatedNote = await res.note.update({is_archived: true});
        res.json(updatedNote);
    } catch (requestError) {
        res.status(400).json({ message: requestError.message });
    }
});

router.patch("/unarchive/:id", getNote, async (req, res) => {
    try {
        const updatedNote = await res.note.update({is_archived: false});
        res.json(updatedNote);
    } catch (requestError) {
        res.status(400).json({ message: requestError.message });
    }
});

// Active notes
router.get("/", async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (serverError) {
        res.status(500).json({ message: serverError.message });
    }
});

// Non-active notes
router.get("/archived", async (req, res) => {
    try {
        const notes = await Note.find({is_archived: true});
        res.json(notes);
    } catch (serverError) {
        res.status(500).json({ message: serverError.message });
    }
});


// Middleware: Checking if note exists
// Returns a Note object
async function getNote(req, res, next) {
    let note;

    try {
        note = await Note.findById(req.params.id);
        if (note == null) {
            return res.status(404).json({ message: "Cannot find note" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

    // Setting the found (in the database) note as the note to work with
    res.note = note;

    // Passing to the next middleware, or the endpoint if there's no other
    next();
}


module.exports = router;