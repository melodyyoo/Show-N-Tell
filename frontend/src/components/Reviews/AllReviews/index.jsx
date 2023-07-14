import SingleReview from "../SingleReview";
import "./AllReviews.css"

export default function AllReviews({show}){
    if(!show || !show.Reviews)return null;
    return(
        <div className="all-reviews">
            <p className="pop-reviews-title" style={{width:'fit-content'}}>REVIEWS</p>
            {show.Reviews.map(review=>{
                return <SingleReview key={review.id} review={review}/>
            })}
        </div>
    )
}
