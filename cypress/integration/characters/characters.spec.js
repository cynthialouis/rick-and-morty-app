/* eslint-disable no-undef */
describe('Rick and Morty characters', () => {
	beforeEach(() => {
		cy.fixture('characters')
			.then((json) => {
				cy.intercept('GET', '/api/character**', json)
			})
			.as('characters')
		cy.visit('/characters')
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

	it('can search a character from name', () => {
		cy.get('[data-context=characters-view] [data-context=search-input]')
			.should('have.attr', 'placeholder', 'Search...')
			.type('t')
		// check url params
		cy.wait('@characters').then((xhr) => {
			expect(xhr.request.url).to.deep.eq(
				'https://rickandmortyapi.com/api/character?page=1&name=t'
			)
		})
	})

	it('can navigate with pagination', () => {
		cy.get('[data-context=characters-view] [data-context=pagination]').as(
			'pagination'
		)

		cy.get('@pagination')
			.find('[data-context=results]')
			.should('contain', 'Showing 1 to 20 of 826 results')

		// on first page, previous button is disabled
		cy.get('@pagination')
			.find('[data-context=previous-btn]')
			.should('have.attr', 'disabled', 'disabled')

		// going on next page
		cy.get('@pagination').find('[data-context=next-btn]').click()
		// check url params
		cy.wait('@characters').then((xhr) => {
			expect(xhr.request.url).to.deep.eq(
				'https://rickandmortyapi.com/api/character?page=2'
			)
		})

		// add a search on name
		cy.get(
			'[data-context=characters-view] [data-context=search-input]'
		).type('h')
		// check url params
		cy.wait('@characters').then((xhr) => {
			expect(xhr.request.url).to.deep.eq(
				'https://rickandmortyapi.com/api/character?page=1&name=h'
			)
		})
	})

	it('opens a character details page on click on his thumbnail', () => {
		cy.fixture('character')
			.then((json) => {
				cy.intercept('GET', '/api/character/1', json)
			})
			.as('character')

		cy.get(
			'[data-context=characters-view] [data-context=characters] [data-context=thumbnail]'
		)
			.eq(0)
			.click()
		cy.wait('@character')
		cy.url().should('eq', `${Cypress.config().baseUrl}/characters/1`)

		// check info
		cy.get('[data-context=character-view]').should('exist')
		cy.get('[data-context=name]').should('contain', 'Rick')
		cy.get('[data-context=badge] [data-context=status]').should(
			'contain',
			'Human (Alive)'
		)
		cy.get('[data-context=type]').should('contain', 'Ceci est un type')
		cy.get('[data-context=image]').should(
			'have.attr',
			'src',
			'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
		)
		cy.get('[data-context=origin]').should('contain', 'Earth (C-137)')
		cy.get('[data-context=location]').should('contain', 'Citadel of Ricks')
		cy.get('[data-context=episodes]').should('contain', '51 episodes')

		// navigate back to characters page
		cy.get('[data-context=page-header] [data-context=title]')
			.should('contain', 'Rick and Morty characters')
			.click()
		cy.url().should('eq', `${Cypress.config().baseUrl}/characters`)
		cy.wait('@characters')
	})

	it('can filter on status', () => {
		cy.get(
			'[data-context=characters-view] [data-context=statuses-filter] input'
		)
			.should('have.length', 3)
			.eq(0)
			.check()

		// check url params
		cy.wait('@characters').then((xhr) => {
			expect(xhr.request.url).to.deep.eq(
				'https://rickandmortyapi.com/api/character?page=1&status=alive'
			)
		})

		// add a search on name
		cy.get(
			'[data-context=characters-view] [data-context=search-input]'
		).type('r')
		// check url params
		cy.wait('@characters').then((xhr) => {
			expect(xhr.request.url).to.deep.eq(
				'https://rickandmortyapi.com/api/character?page=1&name=r&status=alive'
			)
		})
	})
})
