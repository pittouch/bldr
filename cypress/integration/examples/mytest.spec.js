describe("Testing Boldergram", function() {
  it("Visit home,then testing different functionality on user page", function() {
    cy.visit("/");
    cy.get(".user")
      .first()
      .click();

    cy.get(".btn")
      .click()
      .click();

    cy.get(".profile__identity> i")
      .click()
      .click();

    cy.get(".profile__header>div> i")
      .click()
      .click();

    cy.get(".show-comment").click();
    cy.get("input").type("Hello, World{enter}");
    cy.get(".show-comment").click();
    cy.get(".close-position").click();
  });
});

describe("Testing Boldergram", function() {
  it("Media Queries", function() {
    cy.viewport("iphone-6", "landscape");
    cy.visit("/");
    cy.get(".user")
      .first()
      .click();

    cy.get(".btn")
      .click()
      .click();

    cy.get(".profile__identity> i")
      .click()
      .click();

    cy.get(".show-comment").click({ force: true });
    cy.get("input").type("Hello, World{enter}", { force: true });
    cy.get(".show-comment").click({ force: true });
    cy.get(".close-position").click();

    cy.viewport("ipad-2", "landscape");
    cy.visit("/");
    cy.get(".user")
      .first()
      .click();

    cy.get(".btn")
      .click()
      .click();

    cy.get(".profile__identity> i")
      .click()
      .click();

    cy.get(".show-comment").click({ force: true });
    cy.get("input").type("Hello, World{enter}", { force: true });
    cy.get(".show-comment").click({ force: true });
    cy.get(".close-position").click();
  });
});
