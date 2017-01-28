function makeAirplane(config) {
  function getMaxAltitude() {
    return config.altitude;
  }

  function getPassengerCount() {
    return config.passengers;
  }

  function getFuelExpenditure() {
    return config.fuelExpenditure;
  }

  function getCruisingAltitude() {
    return config.cruisingAltitude;
  }

  return {
    getMaxAltitude,
    getPassengerCount,
    getFuelExpenditure,
    getCruisingAltitude
  };
}

function makeBoeing777(config) {
  const plane = makeAirplane(config);

  plane.getCruisingAltitude = () =>
    plane.getMaxAltitude() - plane.getPassengerCount();

  return plane;
}

function makeAirForceOne(config) {
  const plane = makeAirplane(config);

  plane.getCruisingAltitude = () =>
    plane.getMaxAltitude();

  return plane;
}

function makeCessna(config) {
  const plane = makeAirplane(config);

  plane.getCruisingAltitude = () =>
    plane.getMaxAltitude() - plane.getFuelExpenditure();

  return plane;
}

// example usage
const config = {
  altitude: 1000,
  passengers: 200,
  fuelExpenditure: 10,
  cruisingAltitude: 800
}

const cessna = makeCessna(config);
