import  Utils  from '@/utils/utils';

describe('Utils', () => {
  it('calculates area correctly', () => {
    const bbox = [0, 0, 5, 5];
    const area = Utils.calculateArea(bbox);
    expect(area).toBe('25.00');
  });

  it('generates random number between 7 and 10', () => {
    const delay = Utils.getRandomNumber();
    expect(delay).toBeGreaterThanOrEqual(7000);
    expect(delay).toBeLessThanOrEqual(10000);
  });
});
