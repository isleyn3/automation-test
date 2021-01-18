const faker = require("faker");

module.exports = (on, config) => {
	on("task", {
		freshUser() {
			user = {
				username: faker.name.firstName()
			};
			return user;
		},
	});
};
