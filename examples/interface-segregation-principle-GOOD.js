// "interfaces"
function postMessage(message) {
  console.log(message);
}

function makeRating() {
  let stars = 0;

  const get = () => stars;
  const set = (numberOfStars) => stars = numberOfStars;

  return {
    get,
    set
  };
}

function makeFeedback() {
  const messages = [];

  const get = () => messages;
  const add = (message) => messages.push(message);

  return {
    get,
    add
  };
}

// "clients"

function messageForFeedback() {
  var feedback = makeFeedback();

  const share = (message) => feedback.add(message);

  return {
    share,
    get: feedback.get
  };
}

function messageForRating() {
  var ratings = makeRating();

  const rate = (stars) => ratings.set(stars);
  const send = () => postMessage(ratings.get());

  return {
    rate,
    send
  };
}

// usage
const feedback = messageForFeedback();
feedback.share('Good job!');
const results = feedback.get();

const ratings = messageForRating();
ratings.rate(5);
ratings.send();
