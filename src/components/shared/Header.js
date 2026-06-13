import Nav from './Nav'
import TextSlider from '../main/TextSlider'
function Header() {
    const textList = [
        "backend systems",
        "operational data workflows",
        "applied AI coordination"
    ];
    const interval = 2200;
    return (
        <header className='Header'>
            <Nav />
            <TextSlider textList={textList} interval={interval} />
        </header>
    );
}

export default Header;
