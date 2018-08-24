const List = ({ list }) => {

    return (
        <div>
            {
                list.map((item) =>(
                    <div key={item.id}>{ item.text }</div>
                ))
            }
        </div>
    );
};
export default List;