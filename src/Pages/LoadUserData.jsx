import userData from '../api/userData.json';
import Table from 'react-bootstrap/Table'
import '../App.css';
const LoadUserData = () => {

    return (
        <>
            <div>
            <div class="p-3 mb-2 bg-warning text-dark"><h3>User Data</h3></div>
            <Table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                            return(
                                <tr>
                                    <td>{curElem.id}</td>
                                    <td>{curElem.name}</td>
                                    <td>{curElem.email}</td>
                                    <td>{curElem.address.street},{curElem.address.suite},<br/>{curElem.address.city},{curElem.address.zipcode}</td>
                                    <td>{curElem.phone}</td>
                                    <td>{curElem.website}</td>
                                    <td>{curElem.company.name}<br/>{curElem.company.catchPhrase}<br/>{curElem.company.bs}</td>
                                </tr>
                            )
                        })
                    }
                    
                    
                </tbody>
            </Table>
        </div>
        </>
        
    )

};

export default LoadUserData;