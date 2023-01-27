const creator = () => {
	return {
		postcssPlugin: 'gird-pulgin',
		Declaration(decl) {
			if (decl.prop.toLowerCase().includes('gird')) {
				decl.prop = decl.prop.toLowerCase().replaceAll('gird', 'grid');
			}
		}
	};
};

creator.postcss = true;
module.exports = creator;
