class base {
    openHomePage() {
        cy.visit("/")
    }
}
export default new base()