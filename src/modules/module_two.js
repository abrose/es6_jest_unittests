import Server from './server';

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  set firstname(value) {
    this._firstname = value;
  }

  set lastname(value) {
    this._lastname = value;
  }


  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  call() {
    let server = new Server('https://google.de');
    server.connect();
  }
}

export default Person;
