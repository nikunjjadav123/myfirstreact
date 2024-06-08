export const SeriesCard = (props) => {
    return(
        <tr key={props.key}>
            <td>{props.curElem.id}</td>
            <td>{props.curElem.name}</td>
            <td>{props.curElem.email}</td>
            <td>{props.curElem.address.street},{props.curElem.address.suite},<br/>{props.curElem.address.city},{props.curElem.address.zipcode}</td>
            <td>{props.curElem.phone}</td>
            <td>{props.curElem.website}</td>
            <td>{props.curElem.company.name}<br/>{props.curElem.company.catchPhrase}<br/>{props.curElem.company.bs}</td>
        </tr>
    )
};