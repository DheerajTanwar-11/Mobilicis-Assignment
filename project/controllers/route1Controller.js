const User = require("../models/user");

exports.getUsersWithIncomeBelowFiveAndCarBrand = (req, res) => {
	User.find({ income: { $lt: 5 }, car: { $in: ["BMW", "Mercedes"] } })
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
