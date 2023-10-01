import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(optiions: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // to not write these extensions when importing files
        preferAbsolute: true,
        modules: [optiions.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}, // можно указать '@'
    };
}
