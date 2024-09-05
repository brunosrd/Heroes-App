import LoginPage from '../pages/loginPage'


const selectorsList = {
  buttonLogin: ".gap-8",
}


describe('Cy Heroes', () => {
  it('Login - Success', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectorsList.buttonLogin).eq(1).click()

  })
})