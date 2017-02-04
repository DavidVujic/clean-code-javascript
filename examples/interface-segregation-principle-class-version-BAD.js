class Message {
  constructor() {
    this._feedback = [];
    this._rating = 0;
  }

  addFeedback(message) {
    this._feedback.push(message);
  }

  getFeedback() {
    return this._feedback;
  }

  // this method makes no sense to the Feedback subclass
  getRating() {
    return this._rating;
  }

  // this method makes no sense to the Feedback subclass
  setRating(stars) {
    this._rating = stars;
  }

  // this method makes no sense to the Feedback subclass
  postMessage(message) {
    console.log(message);
  }
}

class MessageForFeedback extends Message {
  share(message) {
    return super.addFeedback(message);
  }

  get() {
    return super.getFeedback();
  }
}
