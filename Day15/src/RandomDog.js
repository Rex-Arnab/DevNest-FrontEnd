import { useState, useEffect } from 'react'

function RandomCat(){
	const [newCat, setNewCat] = useState('https://purr.objects-us-east-1.dream.io/i/0oKOv.jpg')
	const [ext, setExt] = useState('')
	useEffect(() => {
		fetch('https://619dg.sse.codesandbox.io/random/dog').then(resp => resp.json())
		.then(data => {
			setNewCat(data.url)
			setExt(data.ext)
		})
	},[])
	return (ext === ".mp4") ? <video src={newCat} controls /> : <img src={newCat} alt='new cat' />;
}

export default RandomCat;