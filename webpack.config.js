module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: 'bundle.js',
        library: 'ReactRadioButtonsGroup',
        libraryTarget: 'umd',
        path: 'build'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
