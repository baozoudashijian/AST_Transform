import { parse } from "@babel/parser"
import * as babel from "@babel/core"
import * as fs from "fs"

const code = fs.readFileSync('./fileToES5/test.js').toString()
const ast = parse(code, { sourceType: 'module' })
console.log(code)
babel.transformFromAstAsync(ast, code, {
    presets: ['@babel/preset-env']
}).then((result: any) => {
    console.log(result.code)
    fs.writeFileSync('./fileToES5/test.es5.js', result.code)
})