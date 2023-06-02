

export function menuItem(groupName) {
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name')
            .then(attr => {
                if (attr.includes('left')) {
                    cy.wrap(menu).click()
                }
            })
    })
}

export function selectDayFromCurrent(days) {
    let date = new Date()
    date.setDate(date.getDate() + days)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleString('en-US', { month: 'short' })
    let futureYear = date.getFullYear()
    let dateAssert = futureMonth + ' ' + futureDay + ', ' + date.getFullYear()
    cy.log(date)
    cy.log(futureDay)
    cy.log(futureMonth)
    cy.log(futureYear)
    cy.log(dateAssert)

    cy.get('nb-calendar-navigation')
        .invoke('attr', 'ng-reflect-date')
        .then(date => {
            if (!date.includes(futureMonth) || !date.includes(futureYear)) {
                cy.get('[data-name="chevron-right"]').click()
                selectDayFromCurrent(days)
            } else {
                //cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
                cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
            } // nb-calendar-range-day-cell [class="range-cell ng-star-inserted"]
        })
    return dateAssert
}