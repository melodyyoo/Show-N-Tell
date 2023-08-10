import { useState } from "react";

export default function CommentForm({reviewOwner, comment}){
    const [body, setBody] = useState(comment.body);

    const handleClick=(e)=>{
        e.preventDefault();


    }
    return(
        <form onSubmit={handleClick}>
            <textarea placeholder={`Reply to ${reviewOwner}...`} style={{color:"black", resize:"none", width: "400px", height:"106px", margin:"0 25px"}} onChange={(e)=>setBody(e.target.value)}>{body}</textarea>
            <div style={{display:"flex", justifyContent:"center", gap:"5px"}}>
                <button className="cancel-button">CANCEL</button>
                <button className="submit-button">UPDATE</button>
            </div>
        </form>
    )
}
