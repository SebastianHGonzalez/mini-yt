import { fillMessage } from 'components/common/I18n';

function formatFillers(fillers = {}) {
  return new Intl.ListFormat('en-US').format(
    Object.entries(fillers).map(([k, v]) => `${k}=${v}`),
  );
}

describe(fillMessage, () => {
  const testCases = [
    {
      caseName: 'Supplied fillers',
      message: 'Lorem ${ipsum} dolor',
      fillers: {
        ipsum: 'sit',
      },
      expected: ['Lorem ', 'sit', ' dolor'],
    },
    {
      caseName: 'Missing fillers',
      message: 'Lorem ${ipsum} dolor',
      fillers: {},
      expected: ['Lorem ', 'ipsum', ' dolor'],
    },
    {
      caseName: 'Missmatched fillers',
      message: 'Lorem ${ipsum} dolor',
      fillers: {
        Lorem: 'sit',
      },
      expected: ['Lorem ', 'ipsum', ' dolor'],
    },
    {
      caseName: 'Fillers not present',
      message: 'Lorem ${ipsum} dolor',
      expected: ['Lorem ', 'ipsum', ' dolor'],
    },
    {
      caseName: 'Multiple fillers',
      message: '${Lorem} ${ipsum} ${dolor} sit',
      fillers: {
        Lorem: 'amet',
        ipsum: 'consectetur',
        dolor: 'adipisicing',
      },
      expected: ['amet', ' ', 'consectetur', ' ', 'adipisicing', ' sit'],
    },
    {
      caseName: 'Malformed keys',
      message: '${Lorem } ${ipsum} ${dolor} sit',
      fillers: {
        Lorem: 'amet',
        ipsum: 'consectetur',
        dolor: 'adipisicing',
      },
      expected: ['Lorem ', ' ', 'consectetur', ' ', 'adipisicing', ' sit'],
    },
  ];

  testCases.forEach(({
    caseName, message, fillers, expected,
  }) => {
    test(`${caseName}: given message "${message}"
    and fillers ${formatFillers(fillers)}
    should equal ${expected}`, () => {
      expect(fillMessage(message, fillers)).toEqual(expected);
    });
  });
});
