describe('Home test', () => {
  it('Goes to the home page', () => {
    cy.visit('/home')

    cy.get('#mat-select-0').click();

    // 2. Selecciona la primera opción del dropdown
    cy.get('mat-option').first().click();

    // 3. Opcional: Verifica que el valor seleccionado se muestre en el mat-select
    cy.get('#mat-select-0').should('contain.text', 'Laboratorios');

    cy.get('#mat-input-0')
    .click()
    .clear()    
    .type('10'); 
    
    cy.contains('button', 'Reservar').click();
  })
})