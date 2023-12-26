import { getResults } from "../../functions/Gemini";

describe.skip('Gemini function', () => {
    it('should return a string', async () => {
        console.log(await getResults("Hello"));
        expect( await getResults("Hello")).not.toBeNull();
    })
})