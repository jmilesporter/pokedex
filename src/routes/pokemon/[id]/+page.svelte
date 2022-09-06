<script>
	export let data;

	let pokemon = data.pokemon;
	function parseTypes(types) {
		let typeList = [];
		types.forEach((type) => {
			type.type.name = type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
			return typeList.push(type.type.name);
		});
		return typeList.join(', ');
	}
	export let types = parseTypes(pokemon.types);
	console.log(types);
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
	<p>
		Type: <strong>{types}</strong> | Height: <strong>{pokemon.height}</strong> | Weight:
		<strong>{pokemon.weight}</strong>
	</p>
	<img class="card-image" src={pokemon.sprites['front_default']} alt={pokemon.name} />
</div>
