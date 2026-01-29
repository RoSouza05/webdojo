import { getTodayDateBR } from "../support/utils"

describe('Login', () => {

  it.only('Deve logar com sucesso', () => {
    cy.start()
    cy.viewport('iphone-xr')
    cy.submitLoginForm('papito@webdojo.com', 'katana123')
    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

      cy.getCookie('login_date').should('exist')
      cy.getCookie('login_date').should((cookie)=>{
        expect(cookie.value).to.eq(getTodayDateBR())
      })

      cy.window().then((win)=>{
        const token = win.localStorage.getItem('token')
        expect (token).to.match(/^[a-f0-9]{32}$/)
      })
  })

  it('Não deve logar com senha inválida', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana12')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

  it('Não deve logar com e-mail não cadastrado', () => {
    cy.start()
    cy.submitLoginForm('roberta-94@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

})