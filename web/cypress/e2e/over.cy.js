describe('SimulandoMouseover', () => {
    it('Deve mostrar texto ao passar o mouse link instagram', () => {
        cy.login()

        cy.contains('Isso é Mouseover!')
            .should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!')
            .should('exist')

    })
})