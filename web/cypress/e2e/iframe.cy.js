describe('iframe', ()=>{
    it('Deve poder tocar o vídeo de exemplo', ()=>{
        cy.start()
        cy.submitLoginForm('papito@webdojo.com','katana123')

        cy.goTo('Video','Video')
        
        cy.wait(3000)//espera explicita para garantir o carregamento do IFrame
        
        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iFramePlayer')

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')


    })    
})