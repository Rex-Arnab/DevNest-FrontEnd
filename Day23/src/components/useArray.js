import { useCallback, useState } from 'react'

export const useArray = (initial) => {
    const [value, setValue] = useState(initial)
    const [cats, setCat] = useState([])
    const fetchNewCat = () => {
        fetch('https://aws.random.cat/meow').then(resp => {
            return resp.json()
        }).then(data => {
            console.log(data.file);
            setCat((prev) => [...prev, data.file])
        })
    }
    return {
        value,
        cats,
        fetchCat: useCallback(() => fetchNewCat()),
        setValue,
        add: useCallback((a) => setValue((v) => [...v, a])),
        clear: useCallback((a) => setValue(() => []))
    }
}