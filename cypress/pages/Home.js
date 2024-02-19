class Home {
    get WomenTab() {
        return  cy.get('a[Title="Women"]')
    }

clickOnWomenTab() {
    this.WomenTab.click()
    }
}

export default new Home()