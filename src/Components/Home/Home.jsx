import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSection';

const Home = () => {
    return (
        <div className='bg-neutral-100'>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <ThirdSection></ThirdSection>
        </div>
    );
};

export default Home;