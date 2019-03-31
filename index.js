const Note = require("./models/notes");
const NoteHandler = require("./handler/note_handler");

function list() {
    let note = new Note();
    let lists = NoteHandler.list();
    var html = '';
    
    lists.forEach(function(e) {
        var template = '<li class="col-md-12" onclick="detail(\'' + e.id + '\')">' + e.title + '</li><hr/>';
        html += template;
    });
    var list = document.getElementById('list');    
    list.innerHTML = html;
    console.log(html);
}

function detail(id) {
    let noteDetail = NoteHandler.detail(id);
    document.getElementById("id").value = id;
    document.getElementById("title").value = noteDetail.title;
    document.getElementById("content").value = noteDetail.content;
    document.getElementById("createTime").value = noteDetail.createTime;
    document.getElementById("updateTime").value = noteDetail.updateTime;
}

function saveNote() {
    let id = document.getElementById("id").value;
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    id = NoteHandler.save(id, title, content);
    console.log(id);
    list();
}

function del() {
    let id = document.getElementById("id").value;
    NoteHandler.del(id);
    list();
}

