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
    switch (config.type) {
      case '777':
        return getMaxAltitude() - getPassengerCount();
      case 'Air Force One':
        return getMaxAltitude();
      case 'Cessna':
        return getMaxAltitude() - getFuelExpenditure();
    }
  }

  return {
    getMaxAltitude,
    getPassengerCount,
    getFuelExpenditure,
    getCruisingAltitude
  }
}
