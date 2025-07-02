describe('Valoration form test', () => {
  it('Goes to valoration form', () => {
    cy.visit('/home')
    cy.visit('/booked_resoruces')
    cy.contains('a', 'Valorar').click(); 

    cy.get('mat-select').click();
    cy.get('mat-option').then(options => {
      const index = Math.floor(Math.random() * options.length);
      cy.wrap(options[index]).click();
    });

    cy.get('.mat-mdc-form-field-infix textarea').type('Buen servicio, muy amables');

    cy.get('[type="submit"]')
      .should('exist').and('be.visible')
      .and('be.enabled')
      .click();

    //cy.url().should('include', '/booked_resoruces');
  })
})