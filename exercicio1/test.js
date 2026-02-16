import { unique, groupBy, sumBy } from "./arrayUtils.js";

// =======================
// TESTES unique
// =======================

console.log("Teste unique:");

console.log(unique([1, 2, 2, 3]));
console.log(unique(["a", "b", "a", "c"]));

// =======================
// TESTES groupBy
// =======================

console.log("\nTeste groupBy:");

const produtos = [
  { nome: "Camiseta", tipo: "roupa" },
  { nome: "Calça", tipo: "roupa" },
  { nome: "Notebook", tipo: "eletronico" }
];

console.log(groupBy(produtos, "tipo"));

const pessoas = [
  { nome: "Ana", cidade: "SP" },
  { nome: "João", cidade: "RJ" },
  { nome: "Maria", cidade: "SP" }
];

console.log(groupBy(pessoas, "cidade"));

// =======================
// TESTES sumBy
// =======================

console.log("\nTeste sumBy:");

const vendas = [
  { valor: 10 },
  { valor: 5 },
  { valor: 20 }
];

console.log(sumBy(vendas, "valor"));

const notas = [
  { nota: 7 },
  { nota: 8 },
  { nota: 10 }
];

console.log(sumBy(notas, "nota"));
