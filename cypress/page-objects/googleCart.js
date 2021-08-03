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

    checkProductQuantity() {
        this.getProductQuantity().should('contain', '1')

    }

    selectProductQuantity() {
        return cy.get('select[jsname="YBXNZc"]').select(['3'])
    }

 

    getTotalPrice() {
        return cy.get('span[jsname="hMdCqe"]')
    }

    getButtonRemove() {
        return cy.get('button[jsname="uXqWSe"]')
    }

    getColorInCart() {
        return cy.get('.cart-lineitem-title .roboto-header-text-9')
    }

    clearCart() {
        this.getButtonRemove().click()
    }

    get yourCartIsEmpty() {
        return cy.get('.ghost-center-wrap .your-cart-is-empty')

    }

    checkIfTheCartIsEmpty() {
        this.yourCartIsEmpty.should('include.text', 'Your cart is empty')
    }


   
}

export default new GoogleCart()