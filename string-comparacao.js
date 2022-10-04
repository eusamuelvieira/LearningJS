const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//----------------
const cidade2 = "belo horizonte";
const input2 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade2 === inputMinusculo); // true
//métodos de string nativos do JavaScript em ação, o toLowerCase() que converte todos os caracteres da string informada (no caso, input) para letras minúsculas 

//--------------------------
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
