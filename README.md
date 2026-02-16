# Exercícios de Aquecimento - TypeScript e Node.js

Este projeto contém exercícios práticos para introdução ao **TypeScript**, execução com **Node.js**, organização de projetos no **VSCode** e manipulação de dados via linha de comando.

---

## 📋 Descrição

O objetivo destes exercícios é praticar:

* Configuração de ambiente TypeScript
* Estruturação de projetos em múltiplas pastas
* Manipulação de arrays e funções utilitárias
* Uso de módulos ES
* Execução de scripts via terminal
* Consumo de API externa (PokéAPI)
* Uso de argumentos de linha de comando (`process.argv`)

---

## 🗂️ Estrutura do Projeto

```
aquecimento-em-typescript/
├── exercicio1/
│   ├── arrayUtils.ts
│   ├── teste.ts
│   └── package.json
│
├── exercicio2/
│   ├── arrayUtils.ts
│   ├── teste.ts
│   ├── tsconfig.json
│   └── package.json
│
├── exercicio3/
│   ├── pokedex.ts
│   ├── tsconfig.json
│   └── package.json
│
└── README.md
```

Cada exercício possui sua própria configuração, permitindo execução independente.

---

# 🎯 Objetivos dos Exercícios

---

## 🧩 Exercício 1 — Funções Utilitárias de Array

### 🎯 Objetivo

Implementar funções utilitárias para manipulação de arrays em TypeScript.

### 📚 Conceitos abordados

* Tipagem genérica (`<T>`)
* Funções utilitárias reutilizáveis
* Manipulação de arrays
* Módulos ES (`export` / `import`)

### 🛠 Implementação

Funções criadas em `arrayUtils.ts`:

* `unique` → remove valores duplicados
* `groupBy` → agrupa itens por chave
* `sumBy` → soma valores numéricos por propriedade

### ▶️ Como executar

```bash
cd exercicio1
npx ts-node teste.ts
```

---

## 🧩 Exercício 2 — Uso de Módulos e Tipagem

### 🎯 Objetivo

Importar e utilizar funções utilitárias com tipagem correta e organização modular.

### 📚 Conceitos abordados

* Importação com extensão `.js` no NodeNext
* Configuração `tsconfig.json`
* `moduleResolution: NodeNext`
* Correção de erros comuns do TypeScript

### ▶️ Como executar

```bash
cd exercicio2
npx ts-node teste.ts
```

---

## 🧩 Exercício 3 — Pokédex via Linha de Comando

### 🎯 Objetivo

Criar um script que busca informações de um Pokémon usando a PokéAPI.

### 📚 Conceitos abordados

* Uso de `process.argv`
* Consumo de API com `fetch`
* Async/Await
* Tratamento de erros
* Tipos do Node (`@types/node`)

### 🛠 Implementação

Arquivo: `pokedex.ts`

O script:

1. Recebe o nome do Pokémon pelo terminal
2. Consulta a PokéAPI
3. Exibe dados formatados

### ▶️ Como executar

```bash
cd exercicio3
npx ts-node pokedex.ts pikachu
```

### 📌 Exemplo de saída

```
📦 Pokémon: PIKACHU
📏 Altura: 0.4 m
⚖️ Peso: 6 kg
🔥 Tipo(s): electric
```

---

# 🛠 Tecnologias Utilizadas

* Node.js 18+
* TypeScript
* ts-node
* PokéAPI
* VSCode

---

# 🚀 Como Executar o Projeto

## ✅ Pré-requisitos

* Node.js instalado
* VSCode
* npm

---

## 🔧 Instalar dependências (em cada exercício)

```bash
npm install
```

Para o exercício 3:

```bash
npm install --save-dev @types/node
```

---

## ▶️ Executar os exercícios

### Exercício 1

```bash
cd exercicio1
npx ts-node teste.ts
```

### Exercício 2

```bash
cd exercicio2
npx ts-node teste.ts
```

### Exercício 3

```bash
cd exercicio3
npx ts-node pokedex.ts pikachu
```

---

# 🧠 Conceitos Aprendidos

## 📦 TypeScript

* Tipagem estática
* Generics
* Interfaces e tipos
* Configuração do compilador

## 🧩 Módulos ES

* `export` e `import`
* Resolução de módulos no NodeNext
* Extensões obrigatórias (`.js`)

## ⚙️ Node.js + CLI

* `process.argv`
* Scripts executados via terminal
* Tipos do Node (`@types/node`)

## 🌐 Consumo de API

* Requisições HTTP com `fetch`
* Async/Await
* Tratamento de erros

---
## 👤 Autor

Beatriz Mazzucatto Seabra

---

**Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Câmpus Guarulhos.**  
**Desenvolvimento para Dispositivos Móveis- Prof. Douglas Andrade de Paula.**
