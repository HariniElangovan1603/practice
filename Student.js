import { useState } from "react"

export default function Student(){
let [data,setData]=useState({});
let [Student,setStudent]=useState([]);
let [isEdit,setisEdit]=useState(true)

function handlechange(e){
    setData({...data,[e.target.id]:e.target.value})
}

function handledelete(Name){
    setStudent(Student.filter((val)=>val.Name!==Name))
     

}

function handleupdate(Name){
 console.log(setData(Student.filter((val)=>val.Name===Name)[0])) 
 setisEdit(false)  
}

function handlesubmit(e){
    e.preventDefault()
    if(isEdit){
      setStudent([...Student,data])
    }
    else{
        setisEdit(true)
        setStudent(Student.map((val)=>val.Name===data.Name?data:val))
    }
   
    setData({
        Name:"",
        Degree:"",
        Phone:"",
        Email:"",
        Password:""
    })
    console.log(data)
}

    return(
        <>
        <div className="container mt-5">
            <h2>Student Details</h2>
            <form onSubmit={handlesubmit}>
                <div className="mt-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Name" placeholder="Enter your Name" onChange={handlechange} value={data.Name}></input>
                </div>
                 <div className="mt-3">
                    <label htmlFor="Degree" className="form-label">Degree</label>
                    <input type="text" className="form-control" id="Degree" placeholder="Enter your Degree" onChange={handlechange} value={data.Degree}></input>
                </div>
                 <div className="mt-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input type="phone" className="form-control" id="Phone" placeholder="Enter your Phone" onChange={handlechange} value={data.Phone}></input>
                </div>
                 <div className="mt-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" placeholder="Enter your Email" onChange={handlechange} value={data.Email}></input>
                </div>
                 <div className="mt-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="Password" placeholder="Enter your Password" onChange={handlechange} value={data.Password}></input>
                </div>
                <button className="btn btn-primary mt-3 mb-3">Submit</button>
            </form>
            </div>
            <div>
                <table className=" container table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Degree</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Student.map((data)=>
                        <tr>
                            <td>{data["Name"]}</td>
                            <td>{data["Degree"]}</td>
                            <td>{data["Phone"]}</td>
                            <td>{data["Email"]}</td>
                            <td>{data["Password"]}</td>
                            <td><button className="btn btn-danger" onClick={()=>handledelete(data["Name"])}>Delete</button></td>
                            <td><button className="btn btn-primary" onClick={()=>handleupdate(data["Name"])}>Update</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}