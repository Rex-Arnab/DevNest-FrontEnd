import { useState } from 'react'

function RandomCat(){
	const [newCat, setNewCat] = useState('')
	fetch('https://aws.random.cat/meow').then(resp => resp.json())
	.then(data => {
		setNewCat(data.file)
	})
	return <img src={newCat} alt='new cat' />;
}

export default RandomCat;