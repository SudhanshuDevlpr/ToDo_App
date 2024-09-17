function SecondTodo(){
  let todoname='Always Code'
  let tododate='15/1/2022'
     return  <div className="row mt-5" >
    <div className="col-6 item2">{todoname}</div>
      <div className="col-4 date2"><span>{tododate}</span></div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
}
export default SecondTodo