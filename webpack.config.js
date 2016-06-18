module.exports = {
    entry: './src/js/main.jsx',
    output: {
        filename: './root/js/app.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader', exclude: /node_modules/, }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    }
};
