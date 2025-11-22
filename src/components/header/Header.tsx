import './header.scss';
import { Phone } from 'lucide-react'

const Header = () => {
    return (
        <header>
            <div>Alan</div>
            <div>
                <a>Projects</a>
                <a>Education</a>
                <a>Experience</a>
            </div>
            <div>
                <p>
                    +48 511-678-414
                </p>
                <div id='phone-icon'>
                    <Phone size={50} />
                </div>
            </div>
        </header>
    )
}

export default Header;
