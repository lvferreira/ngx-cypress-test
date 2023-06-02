

class MainPage {

    goToMain() {
        cy.visit("/")
        cy.title()
            .should("eq", "ngx-admin Demo Application")
        cy.get("div .user-name")
            .should("have.text", "Nick Jones")
    }

}
export default new MainPage()