describe('Rick and Morty characters', () => {
	beforeEach(() => {
		cy.visit('/characters')
		cy.fixture('characters')
			.then((json) => {
				cy.intercept('GET', '/api/character**', json)
			})
			.as('characters')
		cy.wait('@characters')
	})

	it('displays all characters', () => {
		// check quantity
		cy.get(
			'[data-context=characters-view] [data-context=characters] [data-context=thumbnail]'
		)
			.should('have.length', 20)
			.eq(0)
			.as('first_thumbnail')

		// check first character info
		cy.get('@first_thumbnail')
			.find('[data-context=image]')
			.should(
				'have.attr',
				'src',
				'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
			)

		cy.get('@first_thumbnail')
			.find('[data-context=name]')
			.should('contain', 'Rick Sanchez')

		cy.get('@first_thumbnail')
			.find('[data-context=specie]')
			.should('contain', 'Human')
	})

	it('can search a character from name from search button', () => {
		cy.get('[data-context=characters-view] [data-context=search-input]')
			.should('have.attr', 'placeholder', 'Search...')
			.type('test')
		cy.get(
			'[data-context=characters-view] [data-context=search-btn]'
		).click()
		// check url params
		cy.wait('@characters').then((xhr) => {
			expect(xhr.request.url).to.deep.eq(
				'https://rickandmortyapi.com/api/character?name=test'
			)
		})
	})

	it('can search a character from name from enter key', () => {
		cy.get('[data-context=characters-view] [data-context=search-input]')
			.should('have.attr', 'placeholder', 'Search...')
			.type('hello{enter}')
		// check url params
		cy.wait('@characters').then((xhr) => {
			expect(xhr.request.url).to.deep.eq(
				'https://rickandmortyapi.com/api/character?name=hello'
			)
		})
	})
})
