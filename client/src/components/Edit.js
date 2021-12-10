import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [getuserdata, setUserdata] = useState([]);

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  console.log(inpval);

  const { id } = useParams("");

  const getdata = async (e) => {
    // e.preventDefault();
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      setINP(data);
      console.log("get added");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, email, work, add, mobile, desc, age } = inpval;

    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        age,
        mobile,
        work,
        add,
        desc,
      }),
    });
    console.log(res2);
    const data2 = await res2.json();
    console.log(data2);
    if (res2.status === 422 || !data2) {
      alert("fill data");
    } else {
      
      alert("data added ");
    }
  };

  return (
    <div className="container">
    <NavLink to="/">home2</NavLink>
    <form className="mt-4">
        <div className="row">
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" value={inpval.name} onChange={setdata} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" className="form-label">email</label>
                <input type="email" value={inpval.email} onChange={setdata} name="email" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" className="form-label">age</label>
                <input type="text" value={inpval.age} onChange={setdata} name="age" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" className="form-label">Mobile</label>
                <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" className="form-label">Work</label>
                <input type="text" value={inpval.work} onChange={setdata} name="work" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputPassword1" className="form-label">Address</label>
                <input type="text" value={inpval.add} onChange={setdata} name="add" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-12 col-md-12 col-12">
                <label for="exampleInputPassword1" className="form-label">Description</label>
                <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
            </div>

            <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
  );
};

export default Edit;
