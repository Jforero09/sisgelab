describe('Home test', () => {
  it('Goes to the home page', () => {
    cy.visit('/home')

    const matSelectPrefix = '#mat-select-';

    const selectIds = [0, 1, 2, 3];

    selectIds.forEach(id => {
      const selector = `${matSelectPrefix}${id}`;
      
      cy.get(selector)
        .should('exist')     
        .and('be.visible')
        .and('not.be.empty'); 

      cy.get(selector).click();

      cy.get('mat-option[role="option"]')
        .should('have.length.gt', 0)
        .its('length')
        .then((optionCount) => {
          const randomIndex = Cypress._.random(0, optionCount - 1); 
          cy.get('mat-option[role="option"]')
            .eq(randomIndex) 
            .click(); 
        });
    });

    cy.get('[type="submit"]')
      .should('exist')
      .and('be.visible')
      .click();
  })
})