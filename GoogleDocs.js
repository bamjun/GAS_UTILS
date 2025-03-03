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

}


this.GoogleDocs = GoogleDocs;