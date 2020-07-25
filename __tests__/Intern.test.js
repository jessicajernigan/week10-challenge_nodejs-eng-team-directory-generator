const Intern = require('../lib/Intern.js');

test('Creates a new intern object', () => {
  const intern = new Intern('Christopher', '102', 'chris-moltisanti1969@yahoo.com', 'NJ Community College');

  expect(intern.name).toBe('Christopher');
  expect(intern.eid).toBe('102');
  expect(intern.email).toBe('chris-moltisanti1969@yahoo.com');
  expect(intern.college).toBe('NJ Community College');
})