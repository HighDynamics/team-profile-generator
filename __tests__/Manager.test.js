const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('should create a Manager object', () => {
    const expected = {
      name: 'Daniel',
      id: 7,
      email: 'daniel@example.com',
      officeNumber: 1,
    };

    const result = new Manager('Daniel', 7, 'daniel@example.com', 1);

    expect(result).toEqual(expected);
  });

  it('should return "Manager"', () => {
    const expected = 'Manager';

    const result = new Manager('Daniel', 7, 'daniel@example.com', 1).getRole();

    expect(result).toBe(expected);
  });
});
