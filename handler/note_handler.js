const Node = require("./../models/notes")
const Persist = require("./../core/persist");
const cacheManager = require("./../core/cache")
const PathUtils = require("./../utils/path_utils")
const uuid = require("uuid");

class NodeHandler {

  static save(id, title, content) {
    let type = 'note';
    let note = new Note();
    if (!id) {
      note.id = uuid.v1();
      note.createTime = (new Date() / 1);
    } else {
      let note = note.detail(id);
      note.createTime = note.createTime;
      note.updateTime = (new Date() / 1);
    }

    note.title = title;
    note.content = content;
    
    let persist = new Persist();
    console.log(note);
    
    persist.saveData(path, note);
    cacheManager.remove(id);
    return id;
  }

  static detail(id) {
    let type = 'note';
    let path = PathUtils.buildPath(type, id);
    let persist = new Persist();
    let data = cacheManager.get(id);
    if (!data) {
      data = persist.readData(path);
      if (!data) {
        cacheManager.set(id, data);
      }
    }
    return data;
  }

  static list() {
    let type = 'note';
    let persist = new Persist();
    var lists = persist.list();
    let notes = Array();
    let _self = this;
    if(null == lists || lists.length == 0) {
        return notes;
    }
    lists.forEach(function (e) {
      let note = _self.detail(e);
      console.log(note);
      notes.push(note);
      let path = PathUtils.buildPath(type, id);
      cacheManager.set(path, note);
    });
    return notes;
  }

  static del(id) {
    let type = 'note';
    let persist = new Persist();
    let path = PathUtils.buildPath(type, id)
    persist.del(path);
    cacheManager.remove(id);
  }


}

module.exports = NodeHandler;