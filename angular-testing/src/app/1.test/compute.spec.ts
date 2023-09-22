import { compute } from "./calculator";

describe("compute test suit",()=>{

    beforeAll(()=>{
        console.log("Before all ...")
    })

    afterAll(()=>{
        console.log("After all ...")
    })

    it('should return 0 if input is less than 0',()=>{
        let result=compute(-1);
        expect(result).toBe(0);
    })
    it('should return 2 if input is 1',()=>{
        let result=compute(1);
        expect(result).toBe(2);
    })
});