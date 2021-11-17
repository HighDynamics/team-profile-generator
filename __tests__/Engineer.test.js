const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('should create an Engineer object', () => {
    const expected = {
      name: 'Daniel',
      id: 7,
      email: 'daniel@example.com',
      github: 'HighDynamics',
    };

    const result = new Engineer(
      'Daniel',
      7,
      'daniel@example.com',
      'HighDynamics'
    );

    expect(result).toEqual(expected);
  });

  it('should return github username', () => {
    const expected = 'HighDynamics';

    const result = new Engineer(
      'Daniel',
      7,
      'daniel@example.com',
      'HighDynamics'
    ).getGithub();

    expect(result).toBe(expected);
  });

  it('should return "Engineer"', () => {
    const expected = 'Engineer';

    const result = new Engineer(
      'Daniel',
      7,
      'daniel@example.com',
      'HighDynamics'
    ).getRole();

    expect(result).toBe(expected);
  });
});
