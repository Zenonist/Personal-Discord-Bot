import { getResults } from '../../functions/WolframAlpha';

describe.skip('WolframAlpha function', () => {
    it('should return 2', async () => {
        expect(await getResults('1+1')).toBe('2');
    },10000)

    it('should return ThrustSSC', async () => {
        expect(await getResults('what is the fastest car')).toBe('ThrustSSC');
    })

    it('should return error', async () => {
        expect(await getResults('asdfasdf')).toBe('Check your spelling, and use English');
    })
})

describe.skip('Temp test case', () => {
    it('should return true', async () => {
        expect(1+1).toBe(2);
    })
})