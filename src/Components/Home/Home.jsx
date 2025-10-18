import NavBar from './NavBar/NavBar';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <NavBar></NavBar>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;