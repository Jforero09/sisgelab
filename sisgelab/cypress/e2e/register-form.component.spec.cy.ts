describe('Register test', () => {
  it('should fill out the registration form and submit it', () => {
    cy.visit('/');
    cy.contains('a', 'Registrate aqui').click(); 

    const newUserName = 'Juan Perez';
    const newStudentCode = '202512345';
    const newPassword = 'NewSecurePassword123!';

    cy.get('[formcontrolname="name"]')
      .should('exist').and('be.visible')
      .type(newUserName)
      .should('have.value', newUserName);

    cy.get('[formcontrolname="code"]')
      .should('exist').and('be.visible')
      .type(newStudentCode)
      .should('have.value', newStudentCode);

    cy.get('[formcontrolname="password"]')
      .should('exist').and('be.visible')
      .and('have.attr', 'type', 'password')
      .type(newPassword, { log: false }) 
      .should('have.value', newPassword);

    cy.get('[type="submit"]')
      .should('exist').and('be.visible')
      .and('be.enabled')
      .click();

    cy.contains('¡Registro exitoso!')
    cy.contains('El usuario fue registrado correctamente')

    cy.url().should('include', '/');
  });
})