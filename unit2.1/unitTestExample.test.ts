import { describe, it} from "@jest/globals"
//This line is telling our system that we are looking for describe and it from the jest libraries
describe("Testing math", () => {
//describe is where we hold our test cases 
//() => {} means we are starting a function for javascript
    it("should do some simple math", () => {
        expect(10).toBeGreaterThan(5)
        expect(5).toBeLessThan(10)
        expect(5).toEqual(5)
        expect(5 === 5).toBeTruthy()
    })
})