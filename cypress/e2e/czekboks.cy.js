///<reference types= "cypress"/>

import Home from "../pages/Home";
import base from "../pages/base";
import women from "../pages/women";
describe("Zaznaczanie pola w zakladce Women", () => {
    it("wejście w zakładkę Women", () => {
        base.openHomePage(),
        cy.wait(1000),
        Home.clickOnWomenTab(),
        cy.url().should("include", "id_category=3&controller=category")
    })
    it("Zaznaczenie rozmiaru L", () => {
        women.checkSizeL(),
        women.sizeL.should("be.checked"),
        cy.wait(2000),
        women.checkAllType()
    })
    it("ustawianie wyników w kolejności alfabetycznej", () => {
        cy.get("#selectProductSort").select("name:asc")
    })
})