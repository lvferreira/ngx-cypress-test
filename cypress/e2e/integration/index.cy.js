import { navTo, onNavPage } from "../../support/pages/nav"
import date from "../../support/pages/date"
import forms from "../../support/pages/forms"
import tables from "../../support/pages/tables"

describe('end-to-end spec', () => {

    beforeEach('opens app', () => {
        cy.openApp()
    })

    // it('test app w/ page object model', () => {
    //     navTo.formsPage()
    //     navTo.datepckrPage()
    //     navTo.dialogPage()
    //     navTo.smartTablePage()
    //     navTo.toastrPage()
    //     navTo.tooltipPage()
    // })

    it('submit inline basic form common date', () => {
        const user = {
            firstName: 'Léo',
            lastName: 'Ferreira',
            userName: '@lahunakbal',
            email: 'leo.ferreira@mail.io',
            age: 35
        }
        const newAge = 43
        const days = 4
        const dayMin = 7
        const dayMax = 21

        // navTo.formsPage()
        // forms.submitInLineForm('Jack Lane', 'ljack@mail.io')
        // forms.submitBasicForm('ljack@mail.io', 'pwd@123')

        navTo.datepckrPage()
        date.pickCommonDate(days)
        date.pickRangeDate(dayMin, dayMax)

        // navTo.smartTablePage()
        // tables.addNewRecord(user)
        // tables.updateAgeByFirstName(newAge, user.firstName)
        // tables.deleteRowByIndex(0)
    })
})