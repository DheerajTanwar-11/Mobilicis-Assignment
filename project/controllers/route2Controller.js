const User = require("../models/user");

exports.getMaleUsersWithPhonePriceAboveTenThousand = (req, res) => {
	User.find({ gender: "Male", phone_price: { $gt: 10000 } })
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
