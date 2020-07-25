const Employee = require('../lib/Employee.js');

test('Creates a new Employee object', () => {
  const employee = new Employee('Paulie', '99');

  expect(employee.name).toBe('Paulie');
  expect(employee.eid).toBe('99');
})

