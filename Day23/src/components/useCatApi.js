import { useCallback, useState } from 'react'

export const useCatApi = initial => {
    const [pets, setPets] = useState([])
    const [Foxprocessing, setFoxProcessing] = useState(false)
    const [Dogprocessing, setDogProcessing] = useState(false)
    const [Catprocessing, setCatProcessing] = useState(false)
    const fetchNewCat = () => {
        setCatProcessing(true)
        fetch('https://aws.random.cat/meow').then(resp => {
            return resp.json()
        }).then(data => {
            setPets((prev) => [...prev, data.file])
            setCatProcessing(false)
        })
    }
    const fetchNewDog = () => {
        setDogProcessing(true)
        fetch('https://random.dog/woof.json').then(resp => {
            return resp.json()
        }).then(data => {
            setPets((prev) => [...prev, data.url])
            setDogProcessing(false)
        })
    }
    const fetchNewFox = () => {
        setFoxProcessing(true)
        fetch('https://randomfox.ca/floof/').then(resp => {
            return resp.json()
        }).then(data => {
            setPets((prev) => [...prev, data.image])
            setFoxProcessing(false)
        })
    }
    return {
        Catprocessing,
        Dogprocessing,
        Foxprocessing,
        pets,
        fetchCat: useCallback(() => fetchNewCat()),
        fetchDog: useCallback(() => fetchNewDog()),
        fetchFox: useCallback(() => fetchNewFox()),
        clearList: useCallback(() => setPets(() => [])),
    }

}