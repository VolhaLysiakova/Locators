import StudyPage from "../cypress/page-objects/studyPage"

describe('Locators', () => {


    before(() => {
        //cy.visit('https://example.cypress.io/commands/actions')
    })

    it('Test', function () {

        StudyPage.open()
        StudyPage.status200()
        StudyPage.fillInputs()
        StudyPage.clickButton()
        StudyPage.compareProductPrice()

        StudyPage.chooseElementFromDropdown()

    });

})





