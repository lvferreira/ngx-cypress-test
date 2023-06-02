import { selectDayFromCurrent } from "../../helpers"

class DatesPage {

    goToDatePckr() {
        cy.visit("/")
        cy.title()
            .should("eq", "ngx-admin Demo Application")
        cy.get("div .user-name")
            .should("have.text", "Nick Jones")

        cy.contains("Forms").should("be.visible").click()
        cy.contains("Datepicker").should("be.visible").click()
    }

    pickCommonDate(days) {
        cy.contains('nb-card', 'Common Datepicker')
            .find('input')
            .then(input => {
                cy.wrap(input).click()
                let dateAssert = selectDayFromCurrent(days)
                cy.wrap(input)
                    .invoke('prop', 'value')
                    .should('contain', dateAssert)
                cy.wrap(input)
                    .should('have.value', dateAssert)
            })
    }

    pickRangeDate(min, max) {
        cy.contains('nb-card', 'Datepicker With Range')
            .find('input')
            .then(input => {
                cy.wrap(input).click()
                let dateAssertMin = selectDayFromCurrent(min)
                let dateAssertMax = selectDayFromCurrent(max)
                const finalDate = dateAssertMin + ' - ' + dateAssertMax
                cy.wrap(input)
                    .invoke('prop', 'value')
                    .should('contain', finalDate)
                cy.wrap(input)
                    .should('have.value', finalDate)
            })
    }

}
export default new DatesPage()