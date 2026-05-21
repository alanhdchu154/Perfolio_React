import Nav from './Nav'
import TextSlider from '../main/TextSlider'
function Header() {
    const textList = [
        "Software Engineer",
        "Data Systems Builder",
        "Applied AI Engineer",
        "Education Technology Operator",
        "Simulation & Agent Systems Explorer"
    ];
    const interval = 1800;
    return (
        <header className='Header'>
            <Nav />
            <TextSlider textList={textList} interval={interval} />
        </header>
    );
}

export default Header;
