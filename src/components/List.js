const List = ({ children = [], separation = 10 }) => {
    return children.map((child, i) => (
        <div key={i}>
            {i > 0 && (
                <hr
                    style={{ marginTop: separation, marginBottom: separation }}
                />
            )}
            {child}
        </div>
    ));
};

export default List;
