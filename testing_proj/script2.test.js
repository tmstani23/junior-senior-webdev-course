const fetch = require('node-fetch');
const swapi = require('./script2.js')


// it('calls swapi to get people', (done) => {
//     //checks to make sure there are x number of expect tests
//         //This is useful in async functions to make sure the tests are actually being run
//     expect.assertions(2);
//     swapi.getPeople(fetch)
//         .then(
//             data => {
//                 //console.log(data)
//                 expect(data.count).toEqual(82)
//                 expect(data.results.length).toBeGreaterThan(5)
//                 //done is a jest function that waits for the promise to finish before completing execution
//                 done();
//             }
//         )
// })

it('getPeople returns count and results', (done) => {
    //Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output.  The output can also be mocked as below in the json promise return.  This reduces test time as the actual api call isn't made.
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 82,
                results: [0,1,2,3,4,5]
            })
        }))
    
    
    swapi.getPeople(mockFetch).then(data => {
        expect.assertions(4);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
        //mock.calls.length returns the number of arguments passed to the mockFetch function
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(5);
        done();
    })
})