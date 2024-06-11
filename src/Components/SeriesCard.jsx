import React from 'react';
export const SeriesCard = (props) => {
    const {data} = props;
    return(
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.address.street},{data.address.suite},<br/>{data.address.city},{data.address.zipcode}</td>
            <td>{data.phone}</td>
            <td>{data.website}</td>
            <td>{data.company.name}<br/>{data.company.catchPhrase}<br/>{data.company.bs}</td>
        </tr>
    )
};