import userData from '../api/userData.json';
import Table from 'react-bootstrap/Table'
import '../App.css';
import { SeriesCard } from './SeriesCard';
const LoadUserData = () => {

    return (
        <>
            <div>
           
            <Table striped bordered hover variant="dark">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((curElem) => {
                            return <SeriesCard key={curElem.id} curElem = {curElem} />;
                        })
                    }
                    
                    
                </tbody>
            </Table>
        </div>
        </>
        
    )

};

export default LoadUserData;