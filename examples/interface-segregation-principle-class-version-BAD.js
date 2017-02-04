class Message {
  constructor() {
    this._feedback = [];
    this._rating = 0;
  }

  setRating(stars) {
    this._rating = stars;
  }

  addFeedback(message) {
    this._feedback.push(message);
  }

  getFeedback() {
    return this._feedback;
  }

  getRating() {
    return this._rating;
  }

  postMessage(message) {
    console.log(message);
  }
}

// "clients"
class MessageForFeedback extends Message {

  share(message) {
    return super.addFeedback(message);
  }

  get() {
    return super.getFeedback();
  }
}
