const pokemon = process.argv[2];

// Verifica se o usuário informou o nome
if (!pokemon) {
  console.log("⚠️ Informe o nome de um Pokémon!");
  process.exit(1);
}

// Função para buscar dados na API
async function buscarPokemon(nome: string) {
  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);

    if (!resposta.ok) {
      console.log("❌ Pokémon não encontrado.");
      return;
    }

    const dados = await resposta.json();

    const nomeFormatado = dados.name.toUpperCase();
    const altura = dados.height / 10; // decímetros → metros
    const peso = dados.weight / 10;   // hectogramas → kg
    const tipos = dados.types.map((t: any) => t.type.name).join(", ");

    console.log("\n📦 Pokémon:", nomeFormatado);
    console.log("📏 Altura:", altura, "m");
    console.log("⚖️ Peso:", peso, "kg");
    console.log("🔥 Tipo(s):", tipos, "\n");

  } catch (erro) {
    console.log("⚠️ Erro de conexão com a PokéAPI.");
  }
}

buscarPokemon(pokemon);
