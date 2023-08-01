import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // to not write these extensions when importing files
  }
}