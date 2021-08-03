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

    performSearch(productToSearch) {
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`);
    }

    getProductFromSearch() {
        return cy.get('a.card-link-target')
    }

    goToProductPage(productName) {
        this.getProductFromSearch().contains(`${productName}`).click()
    }

    getProductName(item_object) {
        return cy.get('div.AUA6Fc').invoke('text').then((text) =>{
            item_object['title'] = text;
        })
    }

    getProductPrice(item_object) {
        return cy.get('div.TUGUrd span').first().invoke('text').then((text) =>{
            item_object['price'] = text.replace('From $', '');
        });
    }

    getButtonBuy() {
        return cy.get('.Nv5u7c').first()
    }

    clickButtonBuy() {
        this.getButtonBuy().click()
    }



    get colors() {
        return cy.get('div[data-test="swatchesContainer"]')
    }

    buyAnyColor (item_object) {
        let number = 0;
        this.colors.find('button').then((button) => {
            number = button.length
            cy.log(number)
            cy.get('div[data-test="swatchesContainer"] > button').eq(chance.integer({min: 0, max: number-1})).click()
        })
    }

    getProductColor(item_object) {
        return cy.get('div[data-test="color-label"]').invoke('text').then((text) =>{
            item_object['color'] = text.replace('Color: ', '');
        });
    }

    get buttonAddToCart() {
        return cy.get('div[jsaction="JIbuQc:iyfjo(EcdUac)"]')
    }

    addToCartAnyColor(){
       cy.contains('Add To Cart').should('be.visible')
        this.buttonAddToCart.click()
    }

    get buttonGoToCart() {
        return cy.get('div[jsaction="JIbuQc:IXVHne"]')
    }
    
    goToCart() {
        this.buttonGoToCart.click()
    }


}

export default new GoogleStore()