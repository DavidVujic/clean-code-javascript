/*global makeAjaxCall, makeHttpCall */
class AjaxAdapter {
  constructor() {
    this.name = 'ajaxAdapter';
  }
}

class NodeAdapter {
  constructor() {
    this.name = 'nodeAdapter';
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === 'ajaxAdapter') {
      return makeAjaxCall(url).then((response) => {
        // transform response and return
      });
    } else if (this.adapter.name === 'nodeAdapter') {
      return makeHttpCall(url).then((response) => {
        // transform response and return
      });
    }
  }
}
