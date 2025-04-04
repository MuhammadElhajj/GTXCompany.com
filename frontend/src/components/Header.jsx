import HeaderLogo from '../assets/img/GT11 (1).png'

function Header () {
    return (
        <header class="Header">
        <img class="Header__Logo" src={HeaderLogo} alt="" />
        <ul class="Header__List">
            <li class="Header__List__Link"><a href="#Home">Home</a></li>
            <li class="Header__List__Link"><a href="#Poll">Poll</a></li>
            <li class="Header__List__Link"><a target="_blank" href="https://muhammadelhajj.github.io/Elhajj.com/">Developer</a></li>
        </ul>
    </header>
    )
}

export default Header ;