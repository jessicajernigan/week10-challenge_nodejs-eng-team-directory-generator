const Employee = require('../lib/Employee.js');

test('Creates a new Employee object', () => {
  const employee = new Employee('Paulie', '99', 'paulie-walnuts69@hotmail.com');

  expect(employee.name).toBe('Paulie');
  expect(employee.id).toBe('99');
  expect(employee.email).toBe('paulie-walnuts69@hotmail.com');
})

