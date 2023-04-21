const User = require("../models/user");

exports.getUsersWithLastNameStartingWithMAndQuoteLengthGreaterThan15AndEmailIncludesLastName =
	(req, res) => {
		User.find({
			last_name: /^M/,
			quote: { $exists: true, $type: "string", $regex: /^.{16,}$/ },
			email: {
				$regex: new RegExp(req.query.last_name, "i"),
			},
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
