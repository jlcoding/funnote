/**
 * 笔记实体
 */
class Note {

  constructor() {  
    this.id = '#none';
    this.title = '#none';
    this.content = '#none';
    this.createTime = -1;
    this.updateTime = -1;
    this.etag = '#none';
  }
}

module.exports = Note;