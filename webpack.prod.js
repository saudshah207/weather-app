import common from "./webpack.common.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { merge } from "webpack-merge";

export default merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
