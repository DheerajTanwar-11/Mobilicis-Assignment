const User = require("../models/user");

exports.getTop10Cities = async (req, res) => {
	try {
		const result = await User.aggregate([
			{
				$group: {
					_id: "$city",
					userCount: { $sum: 1 },
					avg_income: { $avg: "$income" },
				},
			},
			{ $sort: { userCount: -1 } },
			{ $limit: 10 },
		]);

		if (!result.length) {
			return res.status(404).json({
				message: "Data not found",
			});
		}

		res.status(200).json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Internal server error",
		});
	}
};
