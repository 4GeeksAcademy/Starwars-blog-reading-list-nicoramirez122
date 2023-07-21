const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas:[],
			vehiculos:[], 
			infoPersonaje: {},
            infoPlaneta: {},
            infoVehiculo: {},
            favoritos: [],
		},
		actions: {
			obtenerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => setStore({
					personajes: data.results
				}))
				.catch(err => console.error(err))
			},
			
			obtenerPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results
                    }))
                    .catch(err => console.error(err))
			},

			infoPersonaje: (theid) => {
                fetch(`https://www.swapi.tech/api/people/${theid}`)
                    .then(res => res.json())
                    .then(data => setStore({
                        infoPersonaje: data.result
                    }))
                    .catch(err => console.error(err))
            },
            infoPlaneta: (theid) => {
                fetch(`https://www.swapi.tech/api/planets/${theid}`)
                    .then(res => res.json())
                    .then(data => setStore({
                        infoPlaneta: data.result
                    }))
                    .catch(err => console.error(err))
            },
            añadirFavoritos: (item) => {
                const store = getStore();
                setStore({
                    favoritos: [...store.favoritos, item]
                })
            },
            borrarFavoritos: (borrarItem) => {
                const store = getStore();
                const newFavoritos = store.favoritos.filter((item) => item !== borrarItem)
                setStore({
                    favoritos: newFavoritos
                })
            },
		}			
	}
};

export default getState;