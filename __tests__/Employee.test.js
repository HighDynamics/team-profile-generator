const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('should create an Employee object', () => {
    const expected = {
      name: 'Daniel',
      id: 7,
      email: 'daniel@example.com',
    };

    const result = new Employee('Daniel', 7, 'daniel@example.com');

    expect(result).toEqual(expected);
  });

  it('should return the name', () => {
    const expected = 'Daniel';

    const result = new Employee('Daniel', 7, 'daniel@example.com').getName();

    expect(result).toBe(expected);
  });

  it('should return the ID', () => {
    const expected = 7;

    const result = new Employee('Daniel', 7, 'daniel@example.com').getId();

    expect(result).toBe(expected);
  });

  it('should return the email', () => {
    const expected = 'daniel@example.com';

    const result = new Employee('Daniel', 7, 'daniel@example.com').getEmail();

    expect(result).toBe(expected);
  });

  it('should return "Employee"', () => {
    const expected = 'Employee';

    const result = new Employee('Daniel', 7, 'daniel@example.com').getRole();

    expect(result).toBe(expected);
  });
});
