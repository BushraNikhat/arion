import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)

    return (
        <>
        <div className="card mx-auto text-center my-5" style={{width: "18rem"}}>
             <h1 className="text-danger ">Counter</h1>
             <div className="card-body">
                 <h3 >{count}</h3>
                 <div>
                 <button className="btn btn-danger me-3" onClick={()=>setCount(count-3)}>Decrement</button>
                 <button className="btn btn-success" onClick={()=>setCount(count+3)} >Increment</button>
                 </div>
                 
             </div>

        </div>
            


        </>
    )
}

export default Counter
