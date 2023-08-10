import { useModal } from "../../../context/Modal";

export default function DeleteCommentForm() {
    const {closeModal} = useModal();
  return (
    <div>
      <div style={{margin:"30px 20px"}}>Are you sure you want to delete this comment?</div>
      <div style={{display:"flex", gap:"5px", justifyContent:'center'}}>
        <button className="cancel-button"onClick={closeModal}>CANCEL</button>
        <button style={{marginBottom:"10px"}} className="delete-button">DELETE</button>
      </div>
    </div>
  );
}
