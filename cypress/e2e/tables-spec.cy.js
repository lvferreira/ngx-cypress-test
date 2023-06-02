import page from "../support/pages/tables"

describe('tables spec', () => {
    it('smart tables', () => {
        page.goToTables()

        //1
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('20')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '20')
        })

        //2
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow => {
            let user = {
                firstName: 'Léo',
                lastName: 'Ferreira',
                userName: '@lahunakbal',
                email: 'leo.ferreira@mail.io',
                age: 35
            }
            cy.wrap(tableRow).find('[placeholder="First Name"]').type(user.firstName)
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type(user.lastName)
            cy.wrap(tableRow).find('[placeholder="Username"]').type(user.userName)
            cy.wrap(tableRow).find('[placeholder="E-mail"]').type(user.email)
            cy.wrap(tableRow).find('[placeholder="Age"]').type(user.age)

            cy.wrap(tableRow).find('.nb-checkmark').click()
        })
        cy.get('tbody tr').first().find('td').then(tableColumns => {
            let user = {
                firstName: 'Léo',
                lastName: 'Ferreira',
                userName: '@lahunakbal',
                email: 'leo.ferreira@mail.io',
                age: 35
            }
            cy.wrap(tableColumns).eq(2).should('contain', user.firstName)
            cy.wrap(tableColumns).eq(3).should('contain', user.lastName)
            cy.wrap(tableColumns).eq(4).should('contain', user.userName)
            cy.wrap(tableColumns).eq(5).should('contain', user.email)
            cy.wrap(tableColumns).eq(6).should('contain', user.age)
        })

        //3
        const age = [20, 30, 40, 200]

        cy.wrap(age).each(age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each(tableRow => {
                if (age == 200) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })


    })
})