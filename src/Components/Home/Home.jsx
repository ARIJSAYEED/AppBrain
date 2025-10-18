import { useLoaderData } from 'react-router';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSection';

const Home = () => {
    let data = useLoaderData();
    return (
        <div className='bg-neutral-100'>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
            <ThirdSection data={data}></ThirdSection>
        </div>
    );
};

export default Home;