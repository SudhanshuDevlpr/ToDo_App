function FirstTodo(){
  let todoname="Reading Books";
  let tododate='14/11/2024'
   return <div className="row mt-5">
    <div className="col-6 item1">{todoname}</div>
      <div className="col-4"><span>{tododate}</span></div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>   
}
export default FirstTodo