const AddTodo = ({
    changeInput,
    submit
}) => {

    return (
        <div>
            <input onChange={(e) => { changeInput(e.target.value)}}/> <button onClick={()=>{submit()}}>添加</button>
        </div>
    );
}

export default AddTodo;