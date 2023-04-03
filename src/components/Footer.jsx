import '../style/Footer.css';
import '../../src/index.css';
import GitHub from '../assets/img/github.png';
import Linkedin from '../assets/img/linkedin.png';


export default function Footer() {
    return (
        <div id='footer'>
            <div id='social'>
                <a title="github" href="https://github.com/Carmen-Trillo" target="_blank"><img src={GitHub} alt="github"/></a>
                <a title="linkedin" href="www.linkedin.com/in/carmentrillo" target="_blank"><img src={Linkedin} alt="linkedin"/></a>
            </div>
            <div>
                <p id='copyright'>©Copyright. Todos los derechos reservados</p>
            </div>
        </div>
    )
}