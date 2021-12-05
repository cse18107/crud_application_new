import React,{useState} from "react";
import { NavLink } from "react-router-dom";



const Edit = () => {


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
  console.log(inpval)

  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={inpval.name}
              onChange={setdata}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={inpval.email}
              onChange={setdata}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={inpval.age}
              onChange={setdata}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              value={inpval.mobile}
              onChange={setdata}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Work
            </label>
            <input
              type="text"
              name="work"
              value={inpval.work}
              onChange={setdata}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="text"
              name="add"
              value={inpval.add}
              onChange={setdata}
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" class="form-label">
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
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
