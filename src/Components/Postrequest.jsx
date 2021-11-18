import React, { useState, useEffect } from "react";

const Postrequest = () => {
  const [detail, setDetail] = useState({
    email: "",
    name: "",
    message: "",
  });

//   store userDetail
  const handleDetail=(e)=>{
      const {name,value}=e.target
        setDetail((preVal)=>{
           return {
               ...preVal,
                [name]:value}
        })
  }


//   sending data

const sendData=async()=>{
    try {
        const response=await fetch("https://admin.srkprojects.com/web/api/client/v1/contact-us/",{
            method:"POST",
            body:JSON.stringify(detail)
        })
        console.log(response)
}catch (error) {
    console.log(error.message)
}

} 

useEffect(()=>{ 
    sendData()
},[sendData,detail])

  return (
    <>
      <form className="my-5 mx-auto bg-primary py-3" style={{ width: "60vw" }}>
        <div className="mb-3 px-5">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={detail.email}
            name="email"
            onChange={handleDetail}
          />
        </div>
        <div className="mb-3 px-5">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={detail.name}
            name="name"
            onChange={handleDetail}
          />
        </div>
        <div className="mb-3 form-check px-5">
          <textarea
            className="form-control"
            placeholder="Type a message..."
            id="floatingTextarea"
            value={detail.message}
            name="message"
            onChange={handleDetail}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary ms-5  bg-success">
          Submit
        </button>
      </form>
    </>
  );
};

export default Postrequest;
