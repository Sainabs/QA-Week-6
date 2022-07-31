
// import { Builder, Capabilities, By } from "selenium-webdriver"
// require('chromedriver')

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const {Builder, Capabilities} = require('selenium-webdriver')

const { By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})

afterAll(async () => {
await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})



test('Draw button displays choices', async () => {
  
    await driver.findElement(By.id('draw')).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()

    expect(displayed).toBe(true)
    await driver.sleep(4000)
    
})


// test('Add to Duo button displays player-duo', async () => {
  
//     await driver.findElement(By.id('Add to Duo')).click()
//     const player = await driver.findElement(By.id('player-duo'))
//     const displayed = await player.isDisplayed()

//     expect(displayed).toBe(true)
//     await driver.sleep(4000) 
// })
// ----------
// test('Add to Duo button displays player-duo', async () => {
  
//     await driver.findElement(By.className('bot-card outline')).click()
//     const player = await driver.findElement(By.id('player-duo'))
//     const displayed = await player.isDisplayed()

//     expect(displayed).toBe(true)
//     await driver.sleep(4000) 
// })

// cy.get('[class^=btn]').click({ multiple: true })
// //     // For this line you'll need to put the name of the search bar which you can find by inspecting that element in Chrome
// //     let searchBar = await driver.findElement(By.name('q'))
    
// //     // This time you'll just finish this string with something you want to search on Google, make sure you leanve that \n !
// //     await searchBar.sendKeys('Top Gun\n')

// //     // This line will pause our automation so you can see your search!
// //     await driver.sleep(2000)


// // let searchBar = await driver.findElement(By.name('q'))

// // const draw = async (driver, drawChoices) => {

    
// //     await driver.findElement(By.name('choices')).sendKeys(`${drawChoices}\n`)

// //     let resultsText = await driver.findElement(By.id('res')).getText()
// //     expect(resultsText.toLowerCase()).toContain(drawChoices.toLowerCase())
    
// //     await driver.findElement(By.name('choices')).clear()
// //     await driver.findElement(By.name('choices')).sendKeys('typhlosion\n')


// // }

// // // const draw = async (driver, choices) => {
// // //     await driver.findElement(By.name('div')).sendKeys(`${choices}\n`)

// // // }




