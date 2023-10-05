import { getResults } from "../../functions/ChatGPT";

describe.skip('ChatGPT function', () => {
    it('should return a string', async () => {
        console.log(await getResults("Hello"));
        expect( await getResults("Hello")).not.toBeNull();
    })
})