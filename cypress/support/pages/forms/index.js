

class FormsPage {

    goToForms() {
        cy.visit("/")
        cy.title()
            .should("eq", "ngx-admin Demo Application")
        cy.get("div .user-name")
            .should("have.text", "Nick Jones")

        cy.contains("Forms").should("be.visible").click()
        cy.contains("Form Layouts").should("be.visible").click()
    }

    submitInLineForm(name, email) {
        cy.contains('nb-card', 'Inline form').find('form').then(form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({ force: true })
            cy.wrap(form).submit()
        })
    }

    submitBasicForm(email, password) {
        cy.contains('nb-card', 'Basic form').find('form').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').check({ force: true })
            cy.wrap(form).submit()
        })
    }
}
export default new FormsPage()