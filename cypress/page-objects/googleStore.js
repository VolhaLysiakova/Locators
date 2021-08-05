import Chance from 'chance';

var chance = new Chance();

class GoogleStore {

    open() {
        cy.visit(`${Cypress.env('googleStoreUrl')}/us/collection/accessories_wall`);
    }

    get searchIcon() {
        return cy.get('.header-search-icon');
    }

    get searchInput() {
        return cy.get('input[aria-label="Search Google Store"]');
    }

    getProductFromSearch() {
        return cy.get('a.card-link-target')
    }

    getProductName() {
        return cy.get('div.AUA6Fc').invoke('text')
    }

    getProductPrice() {
        return cy.get('div.TUGUrd span').first().invoke('text')
    }

    getBuyButton() {
        return cy.get('.Nv5u7c').first()
    }

    get colorOptions() {
        return cy.get('div[data-test="swatchesContainer"]')
    }

    getProductColor(item_object) {
        return cy.get('div[data-test="color-label"]').invoke('text')
    }

    get addToCartButton() {
        return cy.get('div[jsaction="JIbuQc:iyfjo(EcdUac)"]')
    }

    get goToCartButton() {
        return cy.get('div[jsaction="JIbuQc:IXVHne"]')
    }

    performSearch(productToSearch) {
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`);
    }

    goToProductPage(productName) {
        this.getProductFromSearch().contains(`${productName}`).click()
    }

    clickBuyButton() {
        this.getBuyButton().click()
    }

    buyAnyColor() {
        let number = 0;
        this.colorOptions.find('button').then((button) => {
            number = button.length
            cy.log(number)
            cy.get('div[data-test="swatchesContainer"] > button').eq(chance.integer({min: 0, max: number - 1})).click()
        })
    }

    addToCartAnyColor() {
        this.addToCartButton.click()
    }

    goToCart() {
        this.goToCartButton.click()
    }
}

export default new GoogleStore()