export default class PesquisaPage {

  constructor() {
    this.button_menu_pesquisa = '#menu-item-226'
    this.field_name = '#nf-field-5'
    this.field_surname = '#nf-field-6'
    this.field_email = '#nf-field-7'
    this.field_email_confirmation = '#nf-field-8'
    this.field_phone = '#nf-field-17'
    this.radio_age = '[type="radio"]'
    this.select_how_long_area = '#nf-field-11'
    this.select_need_to_improve = '#nf-field-13-3'
    this.field_programming_language = '#nf-field-14'
    this.textarea_career_summary = '#nf-field-15'
    this.button_send = '#nf-field-16'
  }

  visitHomePage(url) {
    cy.visit(Cypress.env('URL'))
  }

  accessSearchMenu() {
    cy.get(this.button_menu_pesquisa).click();
  }

  fillSurveyForm() {
    cy.get(this.field_name ).type('Isa')
    cy.get(this.field_surname ).type('Alves')
    cy.get(this.field_email).type('isa@teste.gmail.com')
    cy.get(this.field_email_confirmation).type('isa@teste.gmail.com')
    cy.get(this.field_phone).type('1198767868')
    cy.get(this.radio_age).check('18-30', {force: true})
    cy.get(this.select_how_long_area).select('mais-de-5-anos')
    cy.get(this.select_need_to_improve).check('lideranca', {force: true})
    cy.get(this.field_programming_language).type('JS, Ruby e Python')
    cy.get(this.textarea_career_summary).type('teste')
    cy.get(this.button_send).click()
  }
}
