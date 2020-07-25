const Manager = require('../lib/Manager.js');

test('Creates a new manager object', () => {
  const manager = new Manager('Tony', '101', 'tony-soprano1999@aol.com', '3');

  expect(manager.name).toBe('Tony');
  expect(manager.id).toBe('101');
  expect(manager.email).toBe('tony-soprano1999@aol.com');
  expect(manager.officeNum).toBe('3');
})