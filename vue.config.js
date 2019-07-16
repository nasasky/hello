module.exports = {

    chainWebpack: config => {
        config.optimization.minimize(true);
        config.optimization.splitChunks({
            chunks: 'all'
        })
    }
}