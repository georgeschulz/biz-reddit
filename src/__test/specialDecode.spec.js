import specialDecode from "../app/helpers/specialDecode";

describe("Special decode function", () => {
    it("Should turn &amp; to &", () => {
        const input = "This is a test &amp; another test";
        const output = "This is a test & another test";
        expect(specialDecode(input)).toEqual(output);
    })
})