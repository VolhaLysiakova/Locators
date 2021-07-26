before(() => {

    cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916')
        .its('body').as("items")

})

it('Number of items - perform with before', function () {

    cy.log("Total amount of products: " + this.items.products.length)
    cy.log(this.items.products[0])

})


it('Number of items - method WRAP', function () {

    cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916')
        .then((response) => {

        cy.wrap(response.body).as("product");

    })

    cy.get("@product").then(productList => {
        cy.log("Total amount of products: " + productList.products.length)
        cy.log(productList.products[0])

    })

})

