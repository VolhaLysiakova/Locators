export const createGig_apiCall = (sessionToken, body) => {
    return cy.request({
        method: 'POST', url: `${Cypress.env("googleStoreUrl")}`,
        headers:
            {
                'session-token': sessionToken,
                'Content-Type': 'application/json',
                'Accept': 'application/json;version=3'
            },
        body: body
    })
}