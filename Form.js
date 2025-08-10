import { useState } from "react"

export default function Form() {
    let [email ,setEmail]= useState("")
    let [password,setPassword]= useState("")
    let [data,setData] = useState({})

    function handleEmailChange(e){
        setEmail(e.target.value)
    }
      function handlePasswordChange(e){
        setPassword(e.target.value)
    }
    // function handleChange(e){
    //     setData({...data,[e.target.id]:e.target.value})
    // }

    function handleSubmint(e)
    {
        e.preventDefault()
        console.log(data)
    }

    return (

        <div class="container">
            <h2>Vertical (basic) form</h2>
            <form action="/action_page.php" onSubmit={handleSubmint}>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" onChange={handleEmailChange} name="email" />
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" onChange={handlePasswordChange} name="pwd" />
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="remember" /> Remember me</label>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
            {email}
            <p>{password}</p>
        </div>



    )
}