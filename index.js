const Note = require("./models/notes").Note

function list() {
    let note = new Note();
    console.log(note.list());
}

function detail() {
    let note = new Note();
    console.log(note.detail(document.getElementById("id").value));
}

function saveNote() {
    let note = new Note();
    let id = note.save(document.getElementById("title").value, document.getElementById("content").value);
    console.log(id);
}
