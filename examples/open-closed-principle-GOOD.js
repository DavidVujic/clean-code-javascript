function makeAdapter(name) {
  // ..
  return {
    name,
  };
}

function makeAjaxAdapter() {
  let adapter = makeAdapter('ajaxAdapter');

  adapter.request = function (url) {
    // ... request, do ajax adapter work and return promise
  }

  return adapter;
}

function makeNodeAdapter() {
  let adapter = makeAdapter('nodeAdapter');

  adapter.request = function (url) {
    // ... request, do node adapter work and return promise
  }

  return adapter;
}

function makeHttpRequester(adapter) {
  fetch(url) {
    return adapter.request(url).then((response) => {
      // transform response and return
    });
  }

  return {
    fetch,
  }
}

// example usage
const adapter = makeNodeAdapter();
const requester = makeHttpRequester(adapter);
requester.fetch('http://github.com').then((res) => console.log(res));
