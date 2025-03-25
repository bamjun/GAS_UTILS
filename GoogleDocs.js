class GoogleDocs {
  constructor(docId = "") {
    this.docId = docId;
  }

  clearAddText(contentText = "text") {
    var doc = DocumentApp.openById(this.docId);
    var body = doc.getBody();
    body.clear()
    body.appendParagraph(contentText);
    const doc_page_url = `https://docs.google.com/document/d/${this.docId}/edit`
    Logger.log(`doc_page_url : ${doc_page_url}`)

  }

  addText(contentText = "text") {
    var doc = DocumentApp.openById(this.docId);
    var body = doc.getBody();
    body.appendParagraph(contentText);
    const doc_page_url = `https://docs.google.com/document/d/${this.docId}/edit`
    Logger.log(`doc_page_url : ${doc_page_url}`)

  }

  getSheetTitleFromUrl(url) {
    try {
      const matches = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
      if (!matches || matches.length < 2) {
        throw new Error('올바른 스프레드시트 URL이 아닙니다.');
      }
  
      const docSheetId = matches[1];
      const file = DriveApp.getFileById(docSheetId);
      
      return file.getName(); // 스프레드시트의 제목 반환
    } catch (e) {
      Logger.log('오류: ' + e.message);
      return null;
    }
  }

}


this.GoogleDocs = GoogleDocs;