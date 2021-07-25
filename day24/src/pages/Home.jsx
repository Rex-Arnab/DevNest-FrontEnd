
function Card({title, desc}){
    return (
        <div class="flex flex-col h-full max-w-lg mx-auto bg-white p-2 rounded-lg shadow-lg">
            <div class="rounded-lg flex flex-col justify-center px-8"
            style={{backgroundImage: 'url(https://source.unsplash.com/6lKf8vmsjQs/400x500)', height: '500px', width: 'auto', backgroundSize: 'cover'}}>
          
            </div>
            <h2 class="text-2xl font-light text-gray-800">{title}</h2>
            <p class="text-sm text-gray-700">
                {desc}
            </p>

        </div>
    )
}
export default function Homepage() {
    return (
        <div class="rounded-lg overflow-hidden bg-white">
            <div class="max-w-5xl w-full mx-auto">
                <div>
                    <h2 class="mt-6 text-center text-4xl font-extrabold text-gray-900 font-mono">
                        From The Blog
                    </h2>
                    <p className='text-gray-600 text-2xl mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident accusamus ducimus officiis.</p>
                </div>
                <div className='flex justify-between'>

                    <Card title='Some Thing' desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, sed? Ducimus nobis magni hic consequuntur. Aliquam quis debitis, inventore nesciunt ipsam eveniet iste dolores exercitationem dolore, consequatur autem repudiandae cumque.' />
                    <Card title='Some Thing' desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, sed? Ducimus nobis magni hic consequuntur. Aliquam quis debitis, inventore nesciunt ipsam eveniet iste dolores exercitationem dolore, consequatur autem repudiandae cumque.' />
                    <Card title='Some Thing' desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, sed? Ducimus nobis magni hic consequuntur. Aliquam quis debitis, inventore nesciunt ipsam eveniet iste dolores exercitationem dolore, consequatur autem repudiandae cumque.' />
                </div>
            </div>
        </div>
    )
}