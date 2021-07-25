import { Link } from 'react-router-dom'
import Cookie from '../cookie.svg'
// import { useContext } from 'react'
// import { MyReactContext } from '../store'


function Navbar() {
	// const [state, dispatch] = useContext(MyReactContext)
	return (
		<header class="text-gray-600 body-font">
			<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<img src={Cookie} alt='DarkCookie' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 rounded-full" viewBox="0 0 24 24" />
					<span class="ml-3 text-xl">DarkCookie</span>
				</a>
				<nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
					<Link to='/'><a class="mr-5 hover:text-gray-900">Home</a></Link>
					<Link to='/about'><a class="mr-5 hover:text-gray-900">About</a></Link>
					<Link to='/profile'><a class="mr-5 hover:text-gray-900">Profile</a></Link>
					<Link to='/dashboard'><a class="mr-5 hover:text-gray-900">Dashboard</a></Link>
				</nav>
				<Link to='/login' onClick={() => {
					// console.log(state)
				}}>
					<button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</button>
				</Link>
			</div>
		</header>
	)
}

export default Navbar;