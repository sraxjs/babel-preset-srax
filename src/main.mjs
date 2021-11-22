export default function (babel) {
    return {
        plugins: [
            ['@sraxjs/babel-plugin-transform-srax'],
            ['@babel/plugin-transform-react-jsx', {
                throwIfNamespace: true,
                pragma: 'Srax.JSX.createElement'
            }],
            ['@babel/plugin-transform-runtime', {
                corejs: 3
            }],
            ['@babel/plugin-proposal-decorators', {
                legacy: true
            }],
            ['@babel/plugin-proposal-class-properties', {
                loose: false
            }]
        ]
    }
};