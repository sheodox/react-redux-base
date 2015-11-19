module.exports = {
    entry: __dirname + '/src/client/client.js',
    output: {
        path: __dirname + '/build/client',
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};