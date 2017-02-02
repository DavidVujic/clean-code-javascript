function makeMessage(obj) {
  function send() {
    console.log(obj);
  }
  return {
    send
  };
}

function makeRating(obj) {
  obj.stars = 0;

  function rate(stars) {
    obj.stars = stars;
  }

  return {
    rate
  };
}

function makeFeedback(obj) {
  obj.feedback = [];

  function share(message) {
    obj.feedback.push(message);
  }

  return {
    share
  };
}

function makeFeedbackMessage() {
  var obj = {};
  var message = makeMessage(obj);
  var feedback = makeFeedback(obj);

  return {
    share: feedback.share,
    send: message.send
  };
}

function makeUserMessage() {
  var obj = {};
  var message = makeMessage(obj);
  var feedback = makeFeedback(obj);
  var rating = makeRating(obj);

  return {
    share: feedback.share,
    rate: rating.rate,
    send: message.send
  };
}
