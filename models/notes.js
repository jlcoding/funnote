const Persist = require("./../core/persist");
const cacheManager = require("./../core/cache")
const uuid = require("uuid");

/**
 * 笔记实体
 */
class Note {

  constructor(id, title, content) {  
    this.id = id
    this.title = title;
    this.content = content;
    this.createTime = -1;
  }

  save() {
    if(!this.id) {
      this.id = uuid.v1();
    }
    this.createTime = (new Date() / 1);
    let persist = new Persist();
    console.log(this);
    persist.saveData(this.id, this);
    cacheManager.remove(this.id);
    return this.id;
  }

  detail(id) {
    let persist = new Persist();
    let data = cacheManager.get(id);
    if(!data) {
      data = persist.readData(id);
      if(!data) {
        cacheManager.set(id, data);
      }
    }
    return data;
  }

  list() {
    let persist = new Persist();
    var lists = persist.list();
    let notes = Array();
    let _self = this;
    lists.forEach(function(e) {
      let note = _self.detail(e);
      console.log(note);
      notes.push(note);
      cacheManager.set(note.id, note);
    });
    return notes;
  }

  del() {
    let persist = new Persist();
    persist.del(this.id);
    cacheManager.remove(this.id);
  }
}

module.exports = Note;