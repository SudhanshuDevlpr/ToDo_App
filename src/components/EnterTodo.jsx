function EnterTodo(){
 return <div className="row mt-5">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo here" name="toname" />
          </div>
          <div className="col-4">
            <input type="date" name="todoDate" id="" />
          </div>
          <div className="col-2">
            <button className="btn btn-success">Add</button>
          </div>
        </div>
}
export default EnterTodo