var config = {
	local: {
		mode: 'local',
		port: 3000,
		host: 'localhost',
		dbPort: 27017,
		dbName: 'DB'
	},
	staging: {
		mode: 'staging',
		port: 4000,
		host: 'localhost',
		dbPort: 27017,
		dbName: 'DB'
	},
	production: {
		mode: 'production',
		port: 5000,
		host: 'localhost',
		dbPort: 27017,
		dbName: 'DB'
	}
}

module.exports = function(mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
}
