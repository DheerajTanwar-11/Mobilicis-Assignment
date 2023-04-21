const User = require("../models/user");

exports.getUsersWithCarBrandAndNoDigitsInEmail = (req, res) => {
	User.find({
		car: { $in: ["BMW", "Mercedes", "Audi"] },
		email: { $not: /\d/ },
	})
		.then((users) => {
			if (!users.length) {
				return res.status(404).json({
					message: "Users not found",
				});
			}
			res.status(200).json(users);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({
				message: "Internal server error",
			});
		});
};
