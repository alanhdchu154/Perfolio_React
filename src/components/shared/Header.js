import Nav from './Nav'
import TextSlider from '../main/TextSlider'
function Header() {
    const textList = [
        "Backend & Data Systems Engineer",
        "Applied AI Systems Builder",
        "Enterprise Operations Engineer",
        "Decision Support Tooling Builder"
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
