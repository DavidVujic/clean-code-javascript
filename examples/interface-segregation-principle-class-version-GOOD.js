// "interfaces"
function postMessage(message) {
  console.log(message);
}

class Rating {
  constructor() {
    this._rating = 0;
  }

  get() {
    return this._rating;
  }

  set(stars) {
    this._rating = stars;
  }
}

class Feedback {
  constructor() {
    this._feedback = [];
  }

  get() {
    return this._feedback;
  }

  add(message) {
    this._feedback.push(message);
  }
}
// "clients"
class MessageForFeedback {
  constructor() {
    this._feedback = new Feedback();
  }

  share(message) {
    return this._feedback.add(message);
  }

  get() {
    return this._feedback.get();
  }
}

class MessageForRating {
  constructor() {
    this._ratings = new Rating();
  }

  rate(stars) {
    return this._ratings.set(stars);
  }

  send() {
    postMessage(this._ratings.get());
  }
}

// example usage
const feedback = new MessageForFeedback();
feedback.share('Good job!');
const result = feedback.get();

const ratings = new MessageForRating();
ratings.rate(5);
ratings.send();
