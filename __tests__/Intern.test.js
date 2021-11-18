const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('should return an Intern object', () => {
    const expected = {
      name: 'Daniel',
      id: 7,
      email: 'daniel@example.com',
      school: 'Kansas University',
    };

    const result = new Intern(
      'Daniel',
      7,
      'daniel@example.com',
      'Kansas University'
    );

    expect(result).toEqual(expected);
  });

  it('should return a school', () => {
    const expected = 'Kansas University';

    const result = new Intern(
      'Daniel',
      7,
      'daniel@example.com',
      'Kansas University'
    ).getSchool();

    expect(result).toBe(expected);
  });

  it('should return "Intern"', () => {
    const expected = 'Intern';

    const result = new Intern(
      'Daniel',
      7,
      'daniel@example.com',
      'Kansas University'
    ).getRole();

    expect(result).toBe(expected);
  });
});
