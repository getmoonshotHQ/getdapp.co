describe('index', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the header', () => {
		cy.get('header').should('contain', 'powered by')
	});
});