

class TablesPage {

    goToTables() {
        cy.visit("/")
        cy.title()
            .should("eq", "ngx-admin Demo Application")
        cy.get("div .user-name")
            .should("have.text", "Nick Jones")

        cy.contains("Tables & Data").should("be.visible").click()
        cy.contains("Smart Table").should("be.visible").click()
    }

    updateAgeByFirstName(age, firstName) {
        cy.get('tbody').contains('tr', firstName).then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type(age)
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', age)
        })
    }

    addNewRecord(user) {
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type(user.firstName)
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type(user.lastName)
            cy.wrap(tableRow).find('[placeholder="Username"]').type(user.userName)
            cy.wrap(tableRow).find('[placeholder="E-mail"]').type(user.email)
            cy.wrap(tableRow).find('[placeholder="Age"]').type(user.age)

            cy.wrap(tableRow).find('.nb-checkmark').click()
        })
        cy.get('tbody tr').first().find('td').then(tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', user.firstName)
            cy.wrap(tableColumns).eq(3).should('contain', user.lastName)
            cy.wrap(tableColumns).eq(4).should('contain', user.userName)
            cy.wrap(tableColumns).eq(5).should('contain', user.email)
            cy.wrap(tableColumns).eq(6).should('contain', user.age)
        })
    }

    deleteRowByIndex(index) {
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(index).find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    }

}
export default new TablesPage()