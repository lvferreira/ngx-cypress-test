

class ModalsPage {

    goToDialog() {
        cy.visit("/")
        cy.title()
            .should("eq", "ngx-admin Demo Application")
        cy.get("div .user-name")
            .should("have.text", "Nick Jones")

        cy.contains("Modal & Overlays").should("be.visible").click()
        cy.contains("Dialog").should("be.visible").click()
    }

    goToToster() {
        cy.visit("/")
        cy.title()
            .should("eq", "ngx-admin Demo Application")
        cy.get("div .user-name")
            .should("have.text", "Nick Jones")

        cy.contains("Modal & Overlays").should("be.visible").click()
        cy.contains("Toaster").should("be.visible").click()
    }

    goTooltip() {
        cy.visit("/")
        cy.title()
            .should("eq", "ngx-admin Demo Application")
        cy.get("div .user-name")
            .should("have.text", "Nick Jones")

        cy.contains("Modal & Overlays").should("be.visible").click()
        cy.contains("Tooltip").should("be.visible").click()
    }

}
export default new ModalsPage()
