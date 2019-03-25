const Note = require("./models/notes").Note

let note = new Note();
// let id = note.save("静夜思", "床前明月光，疑是地上霜。举头望明月，低头思故乡");
// console.log(id);

console.log(note.detail("13948bf0-4f24-11e9-8713-93251fe8c19f"));