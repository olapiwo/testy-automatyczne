///<reference types= "cypress"/>

import base from "../pages/base";
import Search from "../pages/search";
import { searchPhrase } from "../fixtures/daneWyszukiwania.json"
describe("Wpisywanie tekstu w pole wyszukiwarki", () => {
  it("wpisywanie tekstu", () => {
    base.openHomePage(), 
    Search.frazaWyszukiwania("boze");
    cy.wait(3000);
    cy.get("input#search_query_top").clear();
    daneWyszukiwania.searchPhrase(searchPhrase)
  });
});
