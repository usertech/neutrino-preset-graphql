module.exports = (neutrino) => {
	neutrino.config.module
		.rule('graphql')
		.test(/\.(graphqls?|gql)$/)
		.include.add(/\/src\//)
		.end()
		.use('graphql')
		.loader('graphql-tag/loader')
		.end()
		.end()
		.end();
};
