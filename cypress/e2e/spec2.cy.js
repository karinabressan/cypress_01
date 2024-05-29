// 1. Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;
describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('a', 'Ver pets disponíveis para adoção').click();
  
    })
  })