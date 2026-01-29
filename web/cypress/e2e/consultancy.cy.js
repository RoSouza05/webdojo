import { personal, company } from '../fixtures/consultancy.json'

describe('FormularioDeConsultoria', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    })

    it('Deve solicitar consultoria Individual', () => {
        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()
        cy.validateConsultancyForm()
    })

    it('Deve solicitar consultoria In Conpany', () => {

        cy.fillConsultancyForm(company)
        cy.submitConsultancyForm()
        cy.validateConsultancyForm()
    })

    it('Deve verificiar os campos obrigatórios', () => {
        cy.submitConsultancyForm()
        const requiredFields = [
            {label: 'Nome Completo', message:'Campo obrigatório'},
            {label: 'Email', message:'Campo obrigatório'},
            {label: 'termos de uso', message:'Você precisa aceitar os termos de uso'}    
        ]

        requiredFields.forEach(({label,message}) =>{
            cy.contains('label', label)
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', message)
            .and('have.class', 'text-red-400')
            .and('have.css', 'color', 'rgb(248, 113, 113)')
        })

     
    })

})  