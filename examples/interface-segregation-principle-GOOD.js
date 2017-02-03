function sendMessage(message) {
  console.log(message);
}


function makeRating(obj) {
  let rating = 0;

  const get = () => rating;
  const set = (stars) => rating = stars;

  return {
    get,
    set
  };
}

function makeFeedback() {
  const feedback = [];

  const get = () => feedback;
  const add = (message) => feedback.push(message);

  return {
    get,
    add
  };
}

// Implementations

function makeFeedbackMessage() {
  var feedback = makeFeedback();

  function share(message) {
    feedback.add(message);
  }

  function send() {
    sendMessage(feedback.get());
  }

  return {
    share,
    send
  };
}


function makeRatingMessage() {
  var ratings = makeRating();

  function rate(stars) {
    ratings.set(stars);
  }

  function send() {
    sendMessage(ratings.get());
  }

  return {
    rate,
    send
  };
}
