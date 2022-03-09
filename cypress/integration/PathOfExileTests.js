describe('Visit pathofexile.com', () => {
    it('Open pathofexile.com', () => {
        cy.visit('https://pathofexile.com')
    })
})

describe('Test the Home button', () => {
    it('Click the Home button and check the URL', () => {
        cy.get('li#nav-home').click()
//        cy.contains('Home').click()
        cy.url().should('include', 'https://www.pathofexile.com')
    })
})

describe('Test the Game button', () => {
    it('Click the Game button and check the URL', () => {
        cy.get('li#nav-game').click()
        cy.url().should('include', '/game')
        cy.get('li#nav-home').click()
    })
})

describe('Test the Video button', () => {
    it('Hover the Game button, click Video, and check the URL', () => {
        cy.contains('Game').trigger('mouseover')
//        cy.contains('Game').invoke('show')
//        cy.contains('Videos').should('be.visible')
//        cy.url().should('include', '/videos')
    })
})

describe('Swap to trade and back again', () => {
    it('Click the trade button, check url, click back to main site button, and check url again', () => {
        cy.get('li#nav-trade').click()
        cy. wait(2000)
        cy.url().should('include', '/trade')
        cy.wait(2000)
        cy.get('div.linkBack').click()
        cy.wait(2000)
        cy.url().should('include', 'https://www.pathofexile.com')
    })
})