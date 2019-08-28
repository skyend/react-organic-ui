module.exports = function (api) {
    api.cache(true);

    const presets = [
        "@babel/preset-typescript",
        "@babel/preset-react",
        [
            '@babel/preset-env',
            {
                modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
            },
        ],
    ];
    const plugins = [

        'babel-plugin-optimize-clsx',
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        '@babel/plugin-transform-runtime',
        'babel-plugin-transform-react-constant-elements',
        'babel-plugin-transform-dev-warning',
        ['babel-plugin-react-remove-properties', { properties: ['data-mui-test'] }],
        [
            'babel-plugin-transform-react-remove-prop-types',
            {
                mode: 'unsafe-wrap',
            },
        ],
    ];

    return {
        presets,
        plugins
    };
}

