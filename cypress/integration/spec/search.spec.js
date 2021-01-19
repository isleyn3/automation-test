import pesquisaPO from "../../pagesObjects/pesquisaPage";
let pesquisaPage = new pesquisaPO()

describe('Pesquisa -QA', function() {
  beforeEach(function(){
     pesquisaPage.visitHomePage()
     cy.fixture('search').then(function(data){
       this.data=data
    })
  })

  it('Devo preencher a pesquisa com dados obrigatórios válidos', function() {
      pesquisaPage.accessSearchMenu()
      pesquisaPage.fillInTheNameField(this.data.name)
      pesquisaPage.fillInTheSurnameField(this.data.surname)
      pesquisaPage.fillInTheEmailField(this.data.email)
      pesquisaPage.fillInTheEmailConfirmationField(this.data.email)
      pesquisaPage.fillInThePhoneField(this.data.phone)
      pesquisaPage.fillInTheAgeField(this.data.age)
      pesquisaPage.fillInTheFieldOfHowLongArea(this.data.how_long_area)
      pesquisaPage.fillInTheFieldWhatNeedsToImprove(this.data.improvement_area)
      pesquisaPage.fillInTheLanguageField(this.data.programming_language)
      pesquisaPage.fillInTheTieldOfTheCareerField(this.data.career_summary)
      pesquisaPage.sendTheForm()
})

  it('Então deve ser direcionado para uma página de sucesso', () => {
      cy.contains('Pesquisa – QA').should('be.visible')
  })
})
