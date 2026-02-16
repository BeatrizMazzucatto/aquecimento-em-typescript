import { unique, groupBy, sumBy } from "./arrayUtils.js";

// unique
console.log(unique([1, 2, 2, 3]));
console.log(unique(["a", "b", "a"]));

// groupBy
const produtos = [
  { nome: "Camiseta", tipo: "roupa" },
  { nome: "Notebook", tipo: "eletronico" }
];

console.log(groupBy(produtos, "tipo"));

// sumBy
const vendas = [{ valor: 10 }, { valor: 5 }];
console.log(sumBy(vendas, "valor"));

