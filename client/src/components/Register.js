import React,{useState} from "react";
import { NavLink } from "react-router-dom";



const Register = () => {


  const [inpval,setINP] = useState({
    name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    add:"",
    desc:""
  });

  const setdata=(e)=>{
      console.log(e.target.value);
      const {name,value} = e.target;
      setINP((preval)=>{
        return {
          ...preval,
          [name]:value
        }
      })
  }
  

  const addinpdata = async (e) =>{
    e.preventDefault()

    const {name,email,work,add,mobile,desc,age} = inpval;

    const res = await fetch("http://localhost:8003/register",{
      method:"POST",
      body:JSON.stringify({
        name,email,work,add,mobile,desc,age
      }),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },

    });

    const data = await res.json();
    console.log(data);

    if(res.status===422||!data){
      alert("error");
      console.log("error");
    }else{
      alert("data added");
      console.log("data added")
    }
  }


  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={inpval.name}
              onChange={setdata}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={inpval.email}
              onChange={setdata}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={inpval.age}
              onChange={setdata}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              value={inpval.mobile}
              onChange={setdata}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Work
            </label>
            <input
              type="text"
              name="work"
              value={inpval.work}
              onChange={setdata}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="add"
              value={inpval.add}
              onChange={setdata}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="desc"
              className="form-control"
              id=" "
              value={inpval.desc}
              onChange={setdata}
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" onClick={addinpdata} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
