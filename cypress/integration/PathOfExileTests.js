/*
describe('Visit pathofexile.com', () => {
    it('Open pathofexile.com', () => {
        cy.visit('https://pathofexile.com')
    })
})
*/
describe('Test the Home button', () => {
    it('Click the Home button and check the URL', () => {
        cy.visit('/')
        cy.get('li#nav-home').click()
        cy.url().should('include', 'https://www.pathofexile.com')
    })
})

describe('Test the Game button', () => {
    it('Click the Game button and check the URL', () => {
        cy.visit('/')
        cy.get('li#nav-game').click()
        cy.url().should('include', '/game')
    })
})

/*
describe('Test the Video button', () => {
    it('Hover the Game button, click Video, and check the URL', () => {
        cy.visit('/')
        cy.get('li#nav-game').find('a > span').trigger('mouseover')
//        cy.get('div.dropDown').eq(1).should('be.visible')
        cy.contains('Videos').should('be.visible')        
//       cy.url().should('include', '/videos')
    })
})
*/

describe('Swap to trade and back again', () => {
    it('Click the trade button, check url, click back to main site button, and check url again', () => {
        cy.visit('/')
        cy.get('li#nav-trade').click()
        cy. wait(1000)
        cy.url().should('include', '/trade')
        cy.wait(1000)
        cy.get('div.linkBack').click()
        cy.wait(1000)
        cy.url().should('include', 'https://www.pathofexile.com')
    })
})

describe('Change the langue', () => {
    it('Click the Brazillian flag, check the URL, and swap back again.', () => {
        cy.visit('/')
        cy.get('span.br-lang').click()
        cy.url().should('include', 'br.pathofexile.com')
        cy.get('span.us-lang').click()
    })
})

describe('Navigate to patch notes', () => {
    it('Click on Forum, click on Patch Notes thread and confirm url', () => {
        cy.visit('/')
        cy.get('li#nav-forum').click()
        cy.get('[data-id=366]').contains('Patch Notes').click()
        cy.url().should('include', '/forum/view-forum/patch-notes')
    })
})

describe('Click events and check they are there', () => {
    it('Click on Events, check to see if "Events Schedule" and the calander is visible', () => {
        cy.visit('/')
        cy.get('li#nav-events').click()
        cy.contains('Events Schedule').should('be.visible')
        cy.get('div.entries').should('be.visible')
    })
})

describe('Click the Shop and make sure currency is 0 ', () => {
    it('Click on Shop, check to see that PoE Currency is 0', () => {
        cy.visit('/')
        cy.get('li#nav-shop').click()
        cy.get('div.coins.FontinRegular').contains('0')
    })
})

/*
describe('Try to log in and fail', () => {
    it('Click Log In button, type in fake account details, try to log in and fail', () => {
        cy.visit('/')
        cy.visit('https://pathofexile.com/login')
//        cy.get('a#pcButton').click()
//        cy.get('a.statusItem').eq(0).click()
        cy.wait(3000)
        cy.url().should('include', '/login')
        cy.get("input#login_email").focus()
    })
})
*/