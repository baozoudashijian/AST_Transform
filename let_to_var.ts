// 运行代码：node -r ts-node/register --inspect-brk let_to_var.ts
import { parse } from "@babel/parser"
import traverse from "@babel/traverse"
import generate from "@babel/generator"

const code = `let a = 'let'; let b = 2`
const ast = parse(code, { sourceType: 'module' })
traverse(ast, {
    enter: item => {
        if(item.node.type === 'VariableDeclaration') {
            item.node.kind = 'var'
        }
    }
})
const result = generate(ast, {}, code)

console.log(ast)
console.log(result)
console.log(result.code)