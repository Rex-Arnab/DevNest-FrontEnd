import { useState, useEffect } from 'react'

function RandomCat(){
	const [newCat, setNewCat] = useState('https://purr.objects-us-east-1.dream.io/i/0oKOv.jpg')
	const [ext, setExt] = useState('')
	useEffect(() => {
		fetch('https://csb-619dg-lkypw81z0-rex-arnab.vercel.app/api/randomDog.js').then(resp => resp.json())
		.then(data => {
			setNewCat(data.url)
			setExt(data.ext)
		})
	},[])
	return (ext === ".mp4") ? <video src={newCat} controls /> : <img src={newCat} alt='new cat' />;
}

export default RandomCat;