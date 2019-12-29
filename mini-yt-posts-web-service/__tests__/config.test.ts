import getConfig from 'config';

describe(getConfig, () => {
  it('gives a PORT config number', () => {
    const { PORT } = getConfig();

    expect(Number.isSafeInteger(+PORT)).toBeTruthy();
  });
});
