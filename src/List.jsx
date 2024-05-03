import PropTypes from 'prop-types';
function List(props) {
    // const fruits = [
    //     {id:1,name:'apple', calores: 95}, 
    //     {id:2,name:'orange',calores: 55}, 
    //     {id:3,name:'banana',calores: 141}];

// fruits.sort((a,b) => a.name.localeCompare(b.name)); Allbhabatical order
// fruits.sort((a,b) => b.name.localeCompare(a.name)); 
// fruits.sort((a,b) => a.calores - b.calores); Numeric
// fruits.sort((a,b) => b.calores - a.calores);

    // const lowCal = fruits.filter(ma => ma.calores < 100);

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(ka => <li key={(ka.id)}>
                                           {ka.name}: &nbsp;
                                           {ka.calores}</li>)
    return (
        <>
        <h3>{category}</h3>
        <ul>{listItems}</ul>
        </>
    );
}
List.propTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              calores: PropTypes.number})),
}
List.defaultProps ={
    category: 'Category',
    items: [],
}

export default List;
