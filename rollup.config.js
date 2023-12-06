import commonjs from "@rollup/plugin-commonjs";

const configNames = ["common", "typescript", "react"];
const config = [];

for (const name of configNames) {
    config.push({
        input: `./src/${name}.js`,
        output: [
            {
                file: `dist/cjs/${name}.cjs`,
                format: "cjs"
            },
            {
                file: `dist/esm/${name}.mjs`,
                format: "esm"
            }
        ],
        plugins: [
            commonjs()
        ]
    })
}

export default config;
