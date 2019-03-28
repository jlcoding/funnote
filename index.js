const Note = require("./models/notes");

function list() {
    let note = new Note();
    let lists = note.list();
    var html = '';
    
    lists.forEach(function(e) {
        var template = '<li onclick="detail(\'' + e.id + '\')">' + e.title + '</li>';
        html += template;
    });
    var list = document.getElementById('list');    
    list.innerHTML = html;
}

function detail(id) {
    let note = new Note();
    let noteDetail = note.detail(id);
    document.getElementById("id").value = id;
    document.getElementById("title").value = noteDetail.title;
    document.getElementById("content").value = noteDetail.content;
}

function saveNote() {
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    id = new Note(id, title, content).save();
    console.log(id);
    list();
}

function del() {
    let id = document.getElementById("id").value;
    new Note(id, null, null).del();
    list();
}

