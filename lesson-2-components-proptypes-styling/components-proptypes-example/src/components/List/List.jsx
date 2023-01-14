import PropTypes from "prop-types";

import ListItem from "./ListItem/ListItem";

import "./list.css";

const List = ({title, items})=> {
    const elements = items.map(item => <ListItem key={item.id} {...item}  />);
    // const elements = items.map(item => <ListItem key={item.id} id={item.id} title={item.titile} year={item.year}  />);
    
    return (
        <>
            {title && <h4 className="list-title">{title}</h4>}
            <ul className="list">
                {elements}
            </ul>
        </>
    )
}

export default List;

List.defaultProps = {
    items: []
}

List.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
    })),
}