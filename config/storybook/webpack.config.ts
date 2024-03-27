// doing this because storybook (like jest)
// does not understand absolute paths
import webpack, { RuleSetRule, DefinePlugin } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths:BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', 'tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    // add css modules
    config.module.rules.push(buildCssLoaders(true));
    return config;
};
