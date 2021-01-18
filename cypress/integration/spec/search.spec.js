import pesquisaPO from "../../pagesObjects/pesquisaPage";
let pesquisaPage = new pesquisaPO()

describe('Pesquisa -QA', () => {
  beforeEach(() => {
     pesquisaPage.visitHomePage()
  })

  it('Preencher pesquisa com dados obrigatórios válidos', () => {
      pesquisaPage.accessSearchMenu()
      pesquisaPage.fillSurveyForm()
      cy.contains('Pesquisa – QA').should('be.visible')
  })

//  it('Então deve ser direcionado para uma página de sucesso', () => {
//      expect('#post-2').to.have.text('Pesquisa – QA')
//  })
})
