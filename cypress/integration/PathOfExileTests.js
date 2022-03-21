/*
describe('Visit pathofexile.com', () => {
    it('Open pathofexile.com', () => {
        cy.visit('https://pathofexile.com')
    })
})
*/
describe('Test the "Home" button', () => {
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

describe('Click "Game" and make sure all infopanels are visible', () => {
    it('Click "Game", check "layoutBox" 0-5 and make sure they are visible', () => {
        cy.visit('/')
        cy.get('li#nav-game').click()
        /*
        cy.get('div.layoutBox1.layoutBoxFull.defaultTheme').each(($el) => {
            should('be.visible')
        })
        for (let i = 0; 0 < 5; i++) {
            cy.get('div.layoutBox1.layoutBoxFull.defaultTheme').eq(i).should('be.visible')
        }
        */
        cy.get('div.layoutBox1.layoutBoxFull.defaultTheme').eq(0).should('be.visible')
        cy.get('div.layoutBox1.layoutBoxFull.defaultTheme').eq(1).should('be.visible')
        cy.get('div.layoutBox1.layoutBoxFull.defaultTheme').eq(2).should('be.visible')
        cy.get('div.layoutBox1.layoutBoxFull.defaultTheme').eq(3).should('be.visible')
        cy.get('div.layoutBox1.layoutBoxFull.defaultTheme').eq(4).should('be.visible')
        cy.get('div.layoutBox1.layoutBoxFull.defaultTheme').eq(5).should('be.visible')
        
    })
})

describe('Click "Shop" and make sure all categories are visible', () => {
    it('Click "Shop", check "category" 0-7 and make sure they are visible', () => {
        cy.visit('/')
        cy.get('li#nav-shop').click()
        cy.get('div.category').eq(0).should('be.visible')
        cy.get('div.category').eq(1).should('be.visible')
        cy.get('div.category').eq(2).should('be.visible')
        cy.get('div.category').eq(3).should('be.visible')
        cy.get('div.category').eq(4).should('be.visible')
        cy.get('div.category').eq(5).should('be.visible')
        cy.get('div.category').eq(6).should('be.visible')
        cy.get('div.category').eq(7).should('be.visible')
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

describe('Make sure news items are visible', () => {
    it('Check news item 1-3 exists and are visible', () => {
        cy.visit('/')
        cy.get('div.newsListItem').eq(0).should('exist').and('be.visible')
        cy.get('div.newsListItem').eq(1).should('exist').and('be.visible')
        cy.get('div.newsListItem').eq(2).should('exist').and('be.visible')
    })
})

describe('Click on "Contact Support" and check to see if support items are clickable and exist', () => {
    it('Click "Contact Support", click "Gameplay Help Forum" and check url. Click "Contact Support", click "Bug Reports forum" and check url. Click "Contact Support", check to see riot mail is visible', () => {
        cy.visit('/')
        cy.get('a.statusItem').eq(2).click()
        cy.get('p').eq(1).find('a').eq(0).click()
        cy.url().should('include', '/forum/view-forum/gameplay-discussion')
        cy.get('a.statusItem').eq(2).click()
        cy.get('p').eq(1).find('a').eq(1).click()
        cy.url().should('include', '/forum/view-forum/bug-reports')
        cy.get('a.statusItem').eq(2).click()
        cy.get('p').eq(4).find('a').eq(0).should('exist').and('be.visible')
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