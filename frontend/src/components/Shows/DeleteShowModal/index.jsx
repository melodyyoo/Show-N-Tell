import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkDeleteShow } from "../../../store/shows";
import { useModal } from "../../../context/Modal";
import "./DeleteShowModal.css";

export default function DeleteShowModal({ show }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const  history  = useHistory();

  const handleClick = () => {
      history.push("/shows")
      dispatch(thunkDeleteShow(show?.Show?.id))
  };

  return (
    <form className="delete-show-modal" onSubmit={handleClick}>
      <p>
        Are you sure you want to remove this show from Show 'N Tell's library? This will delete all associated
        likes and reviews.
      </p>
      <div>
        <button type="button" onClick={closeModal}>
          CANCEL
        </button>
        <button type="submit">DELETE</button>
      </div>
    </form>
  );
}
