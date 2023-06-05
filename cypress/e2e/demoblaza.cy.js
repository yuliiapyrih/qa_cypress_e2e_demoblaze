/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  beforeEach(() => {
    cy.visit('/');
    cy.task('generateUser')
      .then(generateUser => {
        user = generateUser;
      });
  });

  it('should provide an ability to register user, to log in user and to add Samsung Galaxy s6 in cart', () => {

    cy.get('#signin2')
      .click();
    cy.wait(4000);
    cy.get('#sign-username')
      .type(user.username);
    cy.get('#sign-password')
      .type(user.password);
    cy.contains('.btn-primary', 'Sign up')
      .click();
    
    cy.get('#login2')
      .click();
    cy.wait(4000);
    cy.get('#loginusername')
      .type(user.username);
    cy.get('#loginpassword')
      .type(user.password);
    cy.contains('.btn-primary', 'Log in')
      .click();
    
    cy.wait(3000);
    
    cy.contains('.hrefch', 'Samsung galaxy s6')
      .click();
    cy.contains('.btn', 'Add to cart')
      .click();

    cy.contains('.nav-link', 'Cart')
      .click();
    cy.wait(3000);
    cy.contains('td', 'Samsung galaxy s6')
      .should('exist');
  });
});
