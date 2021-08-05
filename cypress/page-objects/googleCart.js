class GoogleCart {

    getProductNameInCart() {
        return cy.get('.cart-lineitem-title .roboto-header-text-9')
    }

    getProductPriceInCart() {
        return cy.get('div[jsname="dDu6Ab"]')
    }

    getProductQuantity() {
        return cy.get('option[selected="true"]').invoke('text')
    }

    getTotalPrice() {
        return cy.get('span[jsname="hMdCqe"]')
    }

    getRemoveButton() {
        return cy.get('button[jsname="uXqWSe"]')
    }

    getColorInCart() {
        return cy.get('.cart-lineitem-title .roboto-header-text-9')
    }

    get yourCartIsEmpty() {
        return cy.get('.ghost-center-wrap .your-cart-is-empty')
    }

    checkProductQuantity() {
        this.getProductQuantity().should('contain', '1')
    }

    selectProductQuantity(number) {
        return cy.get('select[jsname="YBXNZc"]').select([`${number}`])
    }

    clearCart() {
        this.getRemoveButton().click()
    }

    checkIfTheCartIsEmpty() {
        this.yourCartIsEmpty.should('include.text', 'Your cart is empty')
    }

    clearCartAnyCase() {
        cy.get('body').then($body => {
            if ($body.find('button[jsname="uXqWSe"]').length) {
                this.clearCart()
            }
        })
    }


}

export default new GoogleCart()