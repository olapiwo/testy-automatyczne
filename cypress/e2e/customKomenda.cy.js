///<reference types= "cypress"/>

describe ("Komenda", () => {
    it("logowanie do strony", () => {
        cy.login("1234@1234.pl","1234321")
    })
})