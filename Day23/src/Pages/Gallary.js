
const Image = ({pets}) => {
    return (
        <div className="images">
        <h1>Pets Image Gallary</h1>

        <button onClick={() => {
            pets.fetchCat()
        }}>{(pets.Catprocessing ? "Please Wait" : "random.cat")}</button>

        <button onClick={() => {
            pets.fetchDog()
        }}>{(pets.Dogprocessing ? "Please Wait" : "random.dog")}</button>

        <button onClick={() => {
            pets.fetchFox()
        }}>{(pets.Foxprocessing ? "Please Wait" : "random.fox")}</button>

        <button onClick={() => {
            pets.clearList()
        }}>clear</button>
        

        <div className='gallary'>
        {
            pets.pets.map((pet, ind) => {
            return (pet.endsWith(".mp4") ? <video src={pet} autoplay controls/> : <img src={pet} alt='house pets'/>)
            })
        }
        </div>

        </div>
    )
}

export default Image;