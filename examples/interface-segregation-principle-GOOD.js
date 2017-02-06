// several "interfaces", separated by feature
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

// example usage: different "clients", composed with features that makes sense
const feedback = makeFeedback();
feedback.add('Good job!');

const ratings = makeRating();
ratings.set(5);

postMessage(feedback.get());
postMessage(ratings.get());
