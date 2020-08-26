var path = require('path');

module.exports = {
    
    entry: path.resolve(__dirname, "src"),
    
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                use: ['eslint-loader'],
                exclude: /node_modules/,
            }
            
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}