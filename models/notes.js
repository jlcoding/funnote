const Persist = require("./../core/persist").Persist;
const uuid = require("uuid");

/**
 * 笔记实体
 */
class Note {
  constructor() {  
    this.id = -1
    this.title = '';
    this.content = '';
    this.createTime = -1;
  }

  save(title, content) {
    this.id = uuid.v1();
    this.title = title;
    this.content = content;
    this.createTime = (new Date() / 1);
    let persist = new Persist();
    persist.saveData(this.id, this);
    return this.id;
  }

  detail(id) {
    let persist = new Persist();
    return persist.readData(id);
  }

  list() {
    let persist = new Persist();
    return persist.list();

  }
}



exports.Note = Note;