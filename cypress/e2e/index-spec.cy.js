{/* < reference types="cypress" /> */ }

describe('index', () => {
    it('declares json objects and arrays', () => {
        cy.openApp()

        const object = { "keyOne": "valueOne", "keyTwo": "valueTwo" }

        const array = ["one", "two", "three"]

        const objectArray = [{ "key": "value" }, { "keyTwo": "valueTwo" }, { "keyThree": "valueThree" }]

        const dataTypes = { "string": "stringValue", "number": 23, "date": "2023-05-15T08:30:00Z" }

        const json = {
            "FirstName": 'Léo',
            "LastName": 'Ferreira',
            "UserName": '@lahunakbal',
            "Email": 'leo.ferreira@mail.io',
            "Age": 35,
            "Students": [
                {
                    "FirstName": 'Sara',
                    "LastName": 'Connor',
                },
                {
                    "FirstName": 'Bruce',
                    "LastName": 'Willis',
                }
            ]
        }
        console.log(object.keyOne)
        console.log(object["keyTwo"])
        console.log(array[0])
        console.log(objectArray[2].keyThree)
        console.log(dataTypes)
        console.log(json.Students[0].FirstName)

        for (let i = 0; i < json.Students.length; i++) {
            var studentsFirstName = json.Students[i].FirstName
        }

        console.log(studentsFirstName)
    })
})