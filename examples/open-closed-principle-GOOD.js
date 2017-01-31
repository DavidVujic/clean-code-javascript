/*global fetch */
function makeAjaxAdapter() {
  function request(url) {
    // ... make an http request, do AJAX work and return promise
  }

  return {
    request
  };
}

function makeNodeAdapter() {
  function request(url) {
    // ... make an request, do NODE work and return promise
  }

  return {
    request
  };
}

function makeHttpRequester(adapter) {
  function fetch(url) {
    return adapter.request(url).then((response) => {
      // transform response and return
    });
  }

  return {
    fetch
  };
}

// example usage
const adapter = makeNodeAdapter();
const requester = makeHttpRequester(adapter);
requester.fetch('http://github.com').then((res) => console.log(res));
