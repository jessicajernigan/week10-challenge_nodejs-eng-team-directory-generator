const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, eid, email, github) {

    super(name, eid, email);
    this.github = github;
  }
}

module.exports = Engineer;