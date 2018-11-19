let store = { drivers: [], passengers: [], trips: [] };

let driverId    = 0;
let tripId      = 0;
let passengerId = 0;

class Driver {
  constructor (name) {
    this.id   = ++driverId;
    this.name = name;


    store.drivers.push(this);
  }

  passengers() {
     return store.passengers;
  }

  trips() {
    return store.trips;
  }
}

////////////////////////////////////////////////

class Passenger {
  constructor (name) {
    this.id   = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }

  drivers() {
    return store.drivers;
  }

  trips() {
    return store.trips;
  }
}

/////////////////////////////////////////////////

class Trip {
  constructor (driver, passenger) {
    this.id          = ++tripId;
    this.driverId    = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }

  setDriver (driver) {
    this.driverId = driver.id;
  }

  setPassenger (passenger) {
    this.passengerId = passenger.id;
  }

  driver () {
    return store.drivers.find(
      function (driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
  }

  passenger () {
    return store.passengers.find(
      function (passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
}
