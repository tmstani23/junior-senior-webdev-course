const googleSearch = require('./script');

dbMock = [
    'dog.com',
    '_cheesepuff.com',
    'disney.com',
    'dogpictures.com'
]

//group together similar tests using describe function
describe('googleSearch', () => {
    //test name and expected output
    it('this is a silly test', () => {
        expect('hello').toBe('hello')
    });
    //test googleSearch function to see if inputs are equal to expected values
    it('is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
    });
    
    it('check undefined and null input', () => {
        expect(googleSearch(null, dbMock)).toEqual([])
        expect(googleSearch(undefined, dbMock)).toEqual([])
    });

    it('does not return more than three matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    });
})

