import Cookie from '../cookie.svg'

export default function Navbar(){
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <img src={Cookie} alt="DarkCookie" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 rounded-full" viewBox="0 0 24 24"/>
                <span class="ml-3 text-xl">Darkcookie</span>
            </div>
        </header>
    )
}