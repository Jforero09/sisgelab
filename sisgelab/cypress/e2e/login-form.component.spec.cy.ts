describe('Login form test', () => {
  it('Visits the login-form page', () => {
    cy.visit('/')
    
    cy.contains('SisGeLab').should('be.visible');
    cy.contains('Sistema de Gestion de Laboratorios').should('be.visible');
    cy.contains('Codigo Estudiantil').should('be.visible');
    cy.contains('Contraseña').should('be.visible');
    cy.contains('¿Aún no tienes una cuenta?').should('be.visible');
    cy.contains('Registrate aqui').should('be.visible');

    cy.get('[formcontrolname="code"]')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'type', 'text') 
      .and('have.attr', 'placeholder', 'Codigo'); 

    cy.get('[formcontrolname="password"]')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'type', 'password') 
      .and('have.attr', 'placeholder', 'Contraseña');

    cy.get('[type="submit"]')
      .should('exist')
      .and('be.visible')
      .and('be.disabled'); 
  })

  it('Put the credentials and log in, redirecting to home', () => {
    cy.visit('/'); 

    const validCode = '20211020015'; 
    const validPassword = 'validPasswordABC!'; 

    cy.get('[formcontrolname="code"]').type(validCode);
    cy.get('[formcontrolname="password"]').type(validPassword, { log: false });
    cy.get('[type="submit"]').click();

    cy.url().should('include', '/home');
    cy.contains('Reservar Recursos').should('be.visible');
  });
})
