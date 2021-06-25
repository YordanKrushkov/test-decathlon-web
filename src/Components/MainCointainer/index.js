import './index.scss';
import button from '../../Assets/images/buttonDiscover.png';
import group from '../../Assets/images/group.png';

const MainContainer = () => {
    return ( 
        <div id="mainContaner">
            <header>
             <div>
                 <h1>Get ready to wrap up </h1>
                 <h5>Decathlon. Discover yourself</h5>
             <img src={button}/>
             </div>
            </header>
            <main>
                <div>
                    <img src={group} alt="" />
                </div>
            </main>
        </div>
     );
}
 
export default MainContainer;