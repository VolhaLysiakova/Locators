import GoogleStore from "../cypress/page-objects/googleStore"
import GoogleCart from "../cypress/page-objects/googleCart"
//import {product} from "ramda";
import products from "../../Locators/cypress/fixtures/products.json"

describe('Tests for google store', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        //returning false here prevents Cypress from
        //failing the test
        return false
    })

    products.goods.forEach(product => {

        it(`${product.color} product - Test for Google Store`, function () {

            cy.log('GIVEN User is at Accessories page')
            GoogleStore.open()

            cy.log('WHEN user performs search')
            GoogleStore.performSearch(product.name)
            GoogleStore.getProductFromSearch(product.url)

            cy.log('AND user goes to the product page')
            GoogleStore.goToProductPage(product.name)

            GoogleStore.getProductName().then(productName => {

                GoogleStore.getProductPrice().then(productPrice => {

                    cy.log('AND user clicks button buy')
                    GoogleStore.clickBuyButton()

                    if (product.multicolor) {

                        cy.log('AND user chooses color of the product')
                        GoogleStore.buyAnyColor()

                        GoogleStore.getProductColor().then(productColor => {

                            cy.log('AND user adds product to the cart')
                            GoogleStore.addToCartAnyColor()
                            GoogleStore.goToCart()

                            cy.log('THEN color is correct')
                            GoogleCart.getColorInCart().should('include.text', productColor.replace('Color: ',''))
                        })
                    }

                    cy.log('THEN added product is displayed in the cart')
                    GoogleCart.getProductNameInCart().should('include.text', productName)

                    cy.log('THEN product price is correct')
                    GoogleCart.getProductPriceInCart().should('include.text', productPrice.replace('From $', ''))

                    cy.log('THEN total price is correct')
                    GoogleCart.getTotalPrice().should('include.text', productPrice.replace('From $', ''))

                })
            })

            cy.log('THEN product quantity is correct')
            GoogleCart.checkProductQuantity(1)

        })
    })

    afterEach(() => {
        GoogleCart.clearCartAnyCase()
        GoogleCart.checkIfTheCartIsEmpty()
    })

})
