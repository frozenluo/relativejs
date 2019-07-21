const relativeTo = require('../index');
test('test same directory', () => {
    expect(relativeTo('a', 'b')).toBe('b');
});

test('parent directory', () => {
    expect(relativeTo('/Users/parent', '/Users/another/child')).toBe('another/child');
});

test('sidebling directory', () => {
    expect(relativeTo('/Users/one/childA', '/Users/another/childB')).toBe('../another/childB');
});

test('ignore root slash case', () => {
    expect(relativeTo('parentA/childA', 'parentB/childB')).toBe('../parentB/childB');
});
