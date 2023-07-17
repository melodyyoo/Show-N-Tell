import LoginFormModal from "../LoginFormModal";
import OpenModalButton from "../OpenModalButton";
import PostReview from "../PostReview";
import EditShowModal from "../Shows/EditShowModal";
import { useSelector } from "react-redux";
import AddReviewModal from "../Reviews/AddReviewModal"

export default function SingleShowLayout({children, reviewsOrComments}){
    const show = useSelector((state) => state.shows.show);

    return(
        <div>
        <img className="show-banner" alt="show-banner" src={show.Show?.banner} />
        <div className="show-details-wrapper">
          <img className="show-image" alt="show-poster" src={show.Show?.image} />
          {children}
        <EditOrReviewButton show={show}/>
        </div>
        {reviewsOrComments}
      </div>
    )
}

function EditOrReviewButton({show}){
    const sessionUser = useSelector(state=> state.session.user);
    const review = useSelector(state=>state.reviews.review);

    if (sessionUser?.id === show.Show?.User?.id) {
      return (
        <OpenModalButton
          style={{
            height: " 50px",
            width: " 250px",
            backgroundColor: "#445566",
            border: "none",
            cursor: "pointer",
            marginTop: "50px",
            borderRadius: "5px",
            fontFamily: "'Open Sans', sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          buttonText="Edit or Delete Show"
          title="Edit show"
          modalComponent={<EditShowModal show={show} />}
        />
      );
    } else if (!sessionUser) {
      return (
        <OpenModalButton
          style={{
            height: " 50px",
            width: " 250px",
            backgroundColor: "#445566",
            border: "none",
            cursor: "pointer",
            marginTop: "50px",
            borderRadius: "5px",
            fontFamily: "'Open Sans', sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          title="SIGN IN"
          buttonText="Sign in to log, rate, or review"
          modalComponent={<LoginFormModal />}
        />
      );
    } else if(sessionUser?.id === review?.userId){
        return <OpenModalButton title="" buttonText="Edit or Delete Review" modalComponent={<AddReviewModal/>}/>

    }else {
      return <PostReview/>;
    }
  };
