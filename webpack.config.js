module.exports = {
    entry: "./src/react-radio-buttons-group.jsx",
    output: {
        filename: 'bundle.js',
        library: 'ReactRadioButtonsGroup',
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
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
