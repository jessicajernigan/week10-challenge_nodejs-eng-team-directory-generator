const Engineer = require('../lib/Engineer.js');

test('Creates a new engineer object', () => {
  const engineer = new Engineer('Silvio', '100', 'silvio-dante1999@hotmail.com', 'silviodante');

  expect(engineer.name).toBe('Silvio');
  expect(engineer.eid).toBe('100');
  expect(engineer.email).toBe('silvio-dante1999@hotmail.com');
  expect(engineer.github).toBe('silviodante');
})