import React from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Admin = () => {
  let { data: products } = useFetch(
    `http://localhost:4000/products`
  );

  let handleDelete = (id) => {
    fetch(`http://localhost:4000/products/${id}`, { method: "DELETE" }).then(
      () => {
        alert("item has been deleted");
        window.location.reload();
      }
    );
  };

  return (
    <div id="admiContent">
      <h1> ADMIN PAGE </h1>
      <hr />
      <Link to="/addProduct">
        <button> Add New Product</button>
      </Link>
      <img src="" alt="" />

      {products && (
        <table border="4px" id="admitable">
          <thead>
            <th>Sl no</th>
            <th>Product</th>
            <th>Product type</th>
            <th colSpan="2">Action</th>
          </thead>
          <tbody>
            {products.map((item, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>
                    <img src={item.productPic} alt="Not found" width="50px" height="50px" />
                  </td>
                  <td>{item.productType}</td>
                  <td>
                    <Link to={`/updateprod${item.id}`}><button>Edit</button></Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      
    </div>
  );
};

export default Admin;
