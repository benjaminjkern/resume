const List = ({ children }) => {
    return children.map((child, i) => (
        <div key={i}>
            {i > 0 && <hr />}
            {child}
        </div>
    ));
};

export default List;
