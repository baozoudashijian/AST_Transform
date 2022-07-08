import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import generate from "@babel/generator"

const code = `let a = 'let'; let b = 2`
console.log(1)
const ast = parse(code, { sourceType: 'module' })

console.log(JSON.parse(JSON.stringify(ast)))