const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNum) {

    super(name, id, email);
    this.officeNum = officeNum;
  }
  getOfficeNum() {
    return `Office #: ${this.officeNum}`;
  }

  getRole() {
    return 'Manager'
  }
}

module.exports = Manager;