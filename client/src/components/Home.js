import React from "react";

function Home() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <button className="btn btn-primary">Add data</button>
        </div>

        <table class="table  mt-4">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Saikat</td>
              <td>Saikat@gmail.com</td>
              <td>Web developer</td>
              <td>8240500249</td>
              <td className="d-flex justify-content-between">
                  <button className="btn btn-success"><i class="fas fa-eye"></i></button>
                  <button className="btn btn-primary"><i class="fas fa-edit"></i></button>
                  <button className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Soumodeep</td>
              <td>Soumodeep@gmail.com</td>
              <td>back end developer</td>
              <td>8223423522</td>
              <td className="d-flex justify-content-between">
                  <button className="btn btn-success"><i class="fas fa-eye"></i></button>
                  <button className="btn btn-primary"><i class="fas fa-edit"></i></button>
                  <button className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
