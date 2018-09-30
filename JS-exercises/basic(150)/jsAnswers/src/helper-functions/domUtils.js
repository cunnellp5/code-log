exports.domUtils = {
  createAndSetAnchor(name) {
    var a = document.createElement('a')
    a.setAttribute("name", name);
    a.setAttribute('href', '#' + name);
    return a;
  },
  createAndSetHR() {
    return document.createElement('hr');
  },
  createAndSetMainDiv(string) {
    var div = document.createElement('div');
    div.innerText = string;
    return div;
  },
  createCodeBlock(string) {
    var code = document.createElement('pre')
    code.innerHTML = string;
    return code;
  },
  generateHTML(div, codeToText, a, hr){
    div.appendChild(codeToText);
    var body = document.getElementsByTagName('body')[0];
    return body.append(a, hr, div);
  },
  masterCreator(string, question, blockocode) {
    var a = this.createAndSetAnchor(string);
    var hr = this.createAndSetHR();
    var div = this.createAndSetMainDiv(question);
    var codeToText = this.createCodeBlock(blockocode);
    return this.generateHTML(div, codeToText, a, hr);
  }
}
