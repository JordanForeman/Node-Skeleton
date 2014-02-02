var mongoose = require('mongoose'),
	passportLocalMongoose = require('passport-local-mongoose'),
	Schema = mongoose.Schema,
	userSchema = new Schema({

		name: String,
		joinDate: {
			type: Date,
			default: Date.now
		}

	});

userSchema.plugin(passportLocalMongoose, 
{
	usernameField: 'email',
});

userSchema.statics.getById = function(userID){
	var id = mongoose.Types.ObjectId(userID);
	return this.findOne({_id: id});
};

User = mongoose.model('user', userSchema);

module.exports = User;
