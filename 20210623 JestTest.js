const add = require("../add")

describe("Add Function ", ()=> {

    it("shoul add two numbers", ()=>{
        // setup
        let x = 1
        let y = 2
        // act
        let actual = add(x, y)
        // assert
        expect(actual).toBe(3)
    })

    it.skip("shoul add two positive numbers", ()=>{
        // setup
        let x = 4
        let y = 5
        // act
        let actual = add(x, y)
        // assert
        expect(actual).toBe(8)
    })

    it("shoul add two negative numbers", ()=>{
        // setup
        let x = -16
        let y = -7
        // act
        let actual = add(x, y)
        // assert
        expect(actual).toBe(-23)
    })


    it("shoul add two negative numbers", ()=>{
        // setup
        let x = -16
        let y = -7
        // act
        let actual = add(x, y)
        // assert
        expect(actual).toBe(-23)
    })


    it("shoul add two negative numbers", ()=>{
        // setup
        let x = -16
        let y = -7
        // act
        let actual = add(x, y)
        // assert
        expect(actual).toBe(-23)
    })

    it("shoul add two negative numbers", ()=>{
        // setup
        let x = -16
        let y = -7
        // act
        let actual = add(x, y)
        // assert
        expect(actual).toBe(-23)
    })


})
