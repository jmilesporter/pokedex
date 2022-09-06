	export async function load({ params}) {

		const id = params.id;
		const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(api); 
		const pokemon = await res.json();
		return { pokemon  };
	}
