import MainContainer from '../../Components/MainCointainer';
import SecondaryContainer from '../../Components/SecondaryContainer';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer/>
            <Footer/>
        </div>
    );
}

export default Home;