import Person from 'modules/module_two';
import Server from 'modules/server';

jest.mock('modules/server');

describe('Test Person class', () => {
  test('Test Person creation', () => {
    let person = new Person('alfred', 'brose');
    expect(person.firstname).toBe('alfred');
    expect(person.lastname).toBe('brose');
  });

  test('Test firstname setter', () => {
    let person = new Person('Alfred', 'Brose');
    person.firstname = 'Alfonso';

    expect(person.firstname).toBe('Alfonso');
  });

  test('Test lastname setter', () => {
    let person = new Person('Alfred', 'Brose');
    person.lastname = 'Müller';

    expect(person.lastname).toBe('Müller');
  });

  test('Test hardcoded server dependency', () => {
    let person = new Person('Alfred', 'Brose');
    Server.mockClear();
    person.call();
    expect(Server).toHaveBeenCalledTimes(1);
  });
});

