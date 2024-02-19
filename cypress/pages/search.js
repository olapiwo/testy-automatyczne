import { searchPhrase } from "../fixtures/daneWyszukiwania.json"

class Search {
    get searchBox() {
        return cy.get("input#search_query_top")
    }
    frazaWyszukiwania(wartosc) {
        this.searchBox.type(wartosc)
    }
}

export default new Search