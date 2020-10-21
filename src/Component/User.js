import React from "react";
import { userData } from "../data";


export const Users = () => {
  return (
    <>
      <HomePageHeader />
      <div className="user-container">
        {userData.map((data, key) => {
          return (
            <div key={key}>
              <User
                key={key}
                name={data.name}
                age={data.age}
                gender={data.gender}
                email={data.email}
                phoneNo={data.phoneNo}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Appiness DashBoard Page</h2>
    </header>
  );
};

const User = ({ name, age, gender, email, phoneNo }) => {
 
  return (
    <table>
      <tbody>
   
        <tr>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h5>{age}</h5>
          </td>
          <td>
            <h4>{gender}</h4>
          </td>
          <td>
            <p>{email}</p>
          </td>
          <td>
            <p>{phoneNo}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
