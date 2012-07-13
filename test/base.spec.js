define([

	'src/base'

], function(Base) {

	describe('It should fail', function() {
		it('should fail', function() {
			throw new Error;
		})
	});

});
