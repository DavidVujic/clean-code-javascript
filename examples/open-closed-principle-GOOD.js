function makeAjaxAdapter() {
  // ..
  function request(url) {
    // ... request, do ajax work and return promise
  }

  return {
    request,
  };
}

function makeNodeAdapter() {
  // ..
  function request(url) {
    // ... request, do node work and return promise
  }

  return {
    request,
  };
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
