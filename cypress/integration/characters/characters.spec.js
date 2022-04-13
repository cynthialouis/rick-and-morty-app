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
})
