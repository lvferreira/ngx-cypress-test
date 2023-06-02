import page from "../support/pages/forms"

describe("form spec", () => {
  it("locator types", () => {
    // cy.visit("/")
    // cy.title()
    //   .should("eq", "ngx-admin Demo Application")
    // cy.get("div .user-name")
    //   .should("have.text", "Nick Jones")

    // cy.contains("Forms").should("be.visible").click()
    // cy.contains("Form Layouts").should("be.visible").click()

    // cy.wait(5)
    page.goToForms()

    //by Tag Name
    cy.get('input')

    //by Id
    cy.get('#inputEmail')

    //by Class (name)
    cy.get('.input-full-width')

    //by Attribute (name)
    cy.get('[placeholder]')

    //by Attribute (name && value)
    cy.get('[placeholder="Email"]')

    //by Class (value)
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by Tag (name && attribute value)
    cy.get('input[placeholder="Email"]')

    //by Attributes
    cy.get('[placeholder="Email"][type="email"]')

    //by Tag (name, attribute value, id && class)
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width')
  })
  it('find web elements', () => {
    page.goToForms()

    cy.get('[data-cy="gridButton"]').should('be.visible')

    cy.contains('Sign in')
    cy.contains('[status="warning"]', 'Sign in')

    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()

    cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
  })
  it('save command subject', () => {
    page.goToForms()

    cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

    cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email')
    cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

    cy.contains('nb-card', 'Using the Grid')
      .then(gridForm => {
        const emailLabelGrid = gridForm.find('[for="inputEmail1"]').text()
        const passwordLabelGrid = gridForm.find('[for="inputPassword2"]').text()
        expect(emailLabelGrid).to.equal('Email')
        expect(passwordLabelGrid).to.equal('Password')

        cy.contains('nb-card', 'Basic form')
          .then(basicForm => {
            const passwordLabelBasic = basicForm.find('[for="exampleInputPassword1"]').text()
            expect(passwordLabelGrid).to.equal(passwordLabelBasic)

            cy.wrap(basicForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
          })
      })


  })
  it('invoke command', () => {
    page.goToForms()

    //#1
    cy.get('[for="exampleInputEmail1"]')
      .should('contain', 'Email address')
      .should('have.class', 'label')

    //#2
    cy.get('[for="exampleInputEmail1"]')
      .then(label => {
        expect(label.text()).to.equal('Email address')
        expect(label).to.have.class('label')
        expect(label).to.have.text('Email address')
      })

    //#3
    cy.get('[for="exampleInputEmail1"]')
      .invoke('text')
      .then(text => {
        expect(text).to.equal('Email address')
      })

    cy.contains('nb-card', 'Basic form')
      .find('nb-checkbox')
      .click()
      .find('.custom-checkbox')
      .invoke('attr', 'class')
      // .should('contain', 'checked')
      .then(value => {
        expect(value).to.contain('checked')
      })

  })
  it('check element', () => {
    page.goToForms()
    cy.contains('nb-card', 'Using the Grid')
      .find('[type="radio"]')
      .then(radioButtons => {
        cy.wrap(radioButtons)
          .first()
          .check({ force: true })
          .should('be.checked')

        cy.wrap(radioButtons)
          .eq(1)
          .check({ force: true })

        cy.wrap(radioButtons)
          .first()
          .should('not.be.checked')

        cy.wrap(radioButtons)
          .eq(2)
          .should('be.disabled')
      })

  })
})
