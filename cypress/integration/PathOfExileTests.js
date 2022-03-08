describe('Visit pathofexile.com', () => {
    it('Open pathofexile.com', () => {
        cy.visit('https://pathofexile.com')
    })
})

describe('Test the Home button', () => {
    it('Click the Home button and check the URL', () => {
        cy.contains('Home').click()
        cy.url().should('include', 'https://www.pathofexile.com')
    })
})

describe('Test the Game button', () => {
    it('Click the Game button and check the URL', () => {
        cy.contains('Game').click()
        cy.url().should('include', '/game')
    })
})

describe('Test the Video button', () => {
    it('Hover the Game button, click Video, and check the URL', () => {
        cy.contains('Game').trigger('mousedown')
//        cy.contains('Game').invoke('show')
        cy.contains('Videos').click()
        cy.url().should('include', '/videos')
    })
})