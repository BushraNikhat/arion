import React, { useState, useEffect } from "react";

const Getrequest = () => {
  const [allData, setallData] = useState([]);
  const url = "https://gorest.co.in/public/v1/todos";

  // fetching data
  useEffect(() => {
    
      const getData = async () => {
        try {
        const response = await fetch(url, {
          method: "GET",
        });
        const { data } = await response.json();
        setallData([...data]);
      } catch (error) {
        console.log(error.message);
      }
      
    }
    getData();
  }, []);
  return (
    <>
      <div className="dataBody bg-dark ">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <div className="row ">
              {allData.map((data) => {
                return (
                  <div className="col-4  bg-light border " key={data.id}>
                    <p>User_id: {data.user_id}</p>
                    <p>Title:{data.title}</p>
                    <p>Status:{data.status}</p>
                    <p>Due On:{data.due_on}</p>
                  </div>
                );
              })}
              {/* <div className="col-4"></div>
                            <div className="col-4"></div>
                            <div className="col-4"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getrequest;
