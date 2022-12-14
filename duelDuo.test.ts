
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
    await driver.sleep(2000)
    
})


test('Add to Duo button displays player-duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.css('.bot-btn')).click()
    await driver.findElement(By.css('.bot-btn')).click()
    const duoDiv = await driver.findElement(By.id('player-duo')) //added
    expect(duoDiv.isdisplayed).toBeTruthy //added

    await driver.findElement(By.id('duel')).click()
    await driver.sleep(2000)
})

//     const duoDiv = await driver.findElement(By.id('player-duo'))

//    expect(duoDiv).toBe(true)
 
//     await driver.sleep(4000) 
// })
// ----------







