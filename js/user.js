export default class User {
  constructor(email, name) {
    this._id = email;
    this._name = name;
  }

  greeting() {
    return `Hello, my name is ${this._name}`;
  }
}
