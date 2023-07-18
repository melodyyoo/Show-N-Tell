import SingleReview from "../SingleReview";
import "./AllReviews.css"

export default function AllReviews({show}){
    if(!show || !show.Reviews)return null;

    const sortedReviews = show?.Reviews.sort(
        (a,b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    
    return(
        <div className="all-reviews">
            <p className="pop-reviews-title" style={{width:'fit-content'}}>REVIEWS</p>
            {sortedReviews.map(review=>{
                return <SingleReview key={review.id} review={review}/>
            })}
        </div>
    )
}
