import GoogleStore from "../cypress/page-objects/googleStore"
import GoogleCart from "../cypress/page-objects/googleCart"
import {product} from "ramda";

describe('Tests for google store', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
        //failing the test
        return false
    })

    before(() => {

        cy.fixture('productSingleColor').then(data => {
            cy.wrap(data).as('productData')
        })

        cy.get('@productData').then((productData) => {
            productData.goods.forEach(product => {

                cy.log('GIVEN User is at Accessories page')
                GoogleStore.open()

                cy.log('WHEN user performs search')
                GoogleStore.performSearch(product.name)
                GoogleStore.getProductFromSearch(product.url)

                cy.log('AND user goes to the product page')
                GoogleStore.goToProductPage(product.name)
                
                GoogleStore.getProductName().then(productName => {
                    cy.wrap(productName).as('productName')
                })

                GoogleStore.getProductPrice().then(productPrice => {
                    cy.wrap(productPrice).as('productPrice')
                    cy.log('AND user clicks button buy')
                    GoogleStore.clickBuyButton()
                })
                
            })
        })
    })

    it('Google Cart', function () {

            cy.log('THEN added product is displayed in the cart')
            GoogleCart.getProductNameInCart().should('include.text', this.productName)

            cy.log('THEN product price is correct')
            //GoogleCart.getProductPriceInCart().should('include.text', item.price)

            cy.log('THEN product quantity is correct')
            GoogleCart.checkProductQuantity(1)

            cy.log('THEN total price is correct')
            GoogleCart.getTotalPrice().should('include.text', this.productPrice.replace('From $', ''))

            let quantity = 3

            cy.log(`WHEN user changes product quantity from 1 to ${quantity}`)
            GoogleCart.selectProductQuantity(quantity)

            cy.log('THEN total price is correct')
            GoogleCart.getTotalPrice().should('include.text', this.productPrice.replace('From $', '') * quantity)
      
    })
})

