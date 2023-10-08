
import { useParams } from 'react-router-dom';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import Header from '../shared/header/Header';
import Navbar from '../shared/navbar/Navbar';

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-5">
                <div className='col-span-3'>
                    <h2 className="text-5xl">news Details</h2>
                    <p>{id}</p>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default News;