module.exports = {
	root: './build',

	autoprefixerConfig: ['last 3 version', '> 1%'],
	sassGlobConfig: ['**/_f1.scss', 'recursive/*.scss', 'import/**'],
	breakpointSassConfig: ['./node_modules/breakpoint-sass/stylesheets'],
	susyConfig: ['./node_modules/susy/sass']
};