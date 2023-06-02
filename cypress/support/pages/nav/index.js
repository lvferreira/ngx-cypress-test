import { menuItem } from "../../helpers"

export class NavPage {
    // homePage() {
    //     cy.visit("/")
    //     cy.title()
    //         .should("eq", "ngx-admin Demo Application")
    //     cy.get("div .user-name")
    //         .should("have.text", "Nick Jones")
    // }

    formsPage() {
        // cy.contains("Forms").should("be.visible").click()

        // cy.contains('a', 'Forms').then(menu => {
        //     cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name')
        //         .then(attr => {
        //             if (attr.includes('left')) {
        //                 cy.wrap(menu).click()
        //             }
        //         })
        // })
        menuItem('Forms')
        cy.contains("Form Layouts")
            .should("be.visible").click()
    }

    datepckrPage() {
        // cy.contains("Forms").should("be.visible").click()

        // cy.contains('a', 'Forms').then(menu => {
        //     cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name')
        //         .then(attr => {
        //             if (attr.includes('left')) {
        //                 cy.wrap(menu).click()
        //             }
        //         })
        // })
        menuItem('Forms')
        cy.contains("Datepicker")
            .should("be.visible").click()
    }

    dialogPage() {
        menuItem('Modal & Overlays')
        cy.contains("Dialog").should("be.visible").click()
    }

    toastrPage() {
        menuItem('Modal & Overlays')
        cy.contains("Toaster").should("be.visible").click()
    }

    tooltipPage() {
        menuItem('Modal & Overlays')
        cy.contains("Tooltip").should("be.visible").click()
    }

    smartTablePage() {
        menuItem('Tables & Data')
        cy.contains("Smart Table").should("be.visible").click()
    }
}

export const navTo = new NavPage()