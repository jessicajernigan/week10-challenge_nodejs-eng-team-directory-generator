const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, eid, email, officeNum) {

    super(name, eid, email);
    this.officeNum = officeNum;
  }
}

module.exports = Manager;