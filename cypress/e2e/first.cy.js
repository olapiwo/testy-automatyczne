///<reference types= "cypress"/>

describe("Mój pierwszy test :3", () => {
  it("Otworzenie str. google.com", () => {
    cy.visit("https://google.com");
  });
});
