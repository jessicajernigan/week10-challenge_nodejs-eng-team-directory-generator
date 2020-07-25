const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, eid, email, college) {

    super(name, eid, email);
    this.college = college;
  }
}

module.exports = Intern;