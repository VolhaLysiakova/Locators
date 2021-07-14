import StudyPage from "../cypress/page-objects/studyPage"
import studyPage from "../cypress/page-objects/studyPage";

describe('Locators', () => {


    before(() => {
        //cy.visit('https://example.cypress.io/commands/actions')
    })

    it('Test', function () {

       cy.fixture('studyPageFixtures').then(studyPageFixtures =>{
           StudyPage.open()
           StudyPage.status200()
           StudyPage.fillInputs(studyPageFixtures.inputText1, studyPageFixtures.inputText2)
           StudyPage.clickButton()
           StudyPage.compareProductPrice()
           StudyPage.chooseElementFromDropdown()
        })


    });

})





