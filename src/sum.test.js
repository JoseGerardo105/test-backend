const sum = require('./sum');

test('suma 1 + 2 para obtener 3', () => {
    expect(sum(1, 2)).toBe(3);
});