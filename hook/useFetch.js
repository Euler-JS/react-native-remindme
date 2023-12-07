import { useState, useEffect } from 'react'
import axios from 'axios'


const useFetch = (endpoint, query) => {
    console.log("Query ", query, "point ", endpoint);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    // const axios = require('axios');
    const apiUrl = "https://api.juris.co.mz/api/";
    const apiMedia = "https://api.juris.co.mz";
    const rotas = ["categorias", "perguntas", "respostas", "curiosidades"];
  

const options = {
  method: 'GET',
  url: `https://api.juris.co.mz/api/${endpoint}`,
  params: {
    ...query
  },
  headers: {
    'X-RapidAPI-Key': '6e94ac0b8dmsh996b2a2d5aeb30dp136726jsn631eeb1d765e',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

const fetchData = async () => {
    setIsLoading(true)

    try {
	const response = await axios.request(options);
    if(query?.query === 'popular'){
        setData((response.data).slice(0,3))
    }
    else if(query?.query === 'categorias'){
        setData((response.data).filter(categoria=> categoria.lei  === query?.lei))
    } else if(query?.query === 'perguntas'){
        setData((response.data).filter(pergunta=> pergunta.categoria  === query?.categoria))
    } else if(query?.query === 'respostas'){
        setData((response.data).filter(resposta=> resposta.pergunta  === parseInt(query?.resposta)))
        console.log("[] ", data);
    } else {
       setData(response.data) 
    }
    
    setIsLoading(false)
    } catch (error) {
        setError(error)
        alert('There is an error')
        console.error(error);
    } finally {
        console.log("*** ",query);
        setIsLoading(false)
    }
}

useEffect(() => {
    console.log("Fetch data");
    fetchData();
}, [])

const refetch = () => {
    setIsLoading(true)
    fetchData()
}

return {data, isLoading, error, refetch}

}

export default useFetch;