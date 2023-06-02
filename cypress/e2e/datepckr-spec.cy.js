import page from "../support/pages/date"
import { selectDayFromCurrent } from "../support/helpers"

describe('datepckr spec', () => {
    it('asserts property', () => {
        page.goToDatePckr()

        cy.contains('nb-card', 'Common Datepicker')
            .find('input')
            .then(input => {
                let days = 361
                cy.wrap(input).click()
                let dateAssert = selectDayFromCurrent(days)
                cy.wrap(input)
                    .invoke('prop', 'value')
                    .should('contain', dateAssert)
                cy.wrap(input)
                    .should('have.value', dateAssert)
            })
    })
})