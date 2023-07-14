export default function starIcons(review){
    if(review.rating === 1){
       return <i class="fa-solid fa-face-smile"></i>
    }else if(review.rating === 1.5){
        return `${<i class="fa-solid fa-face-smile"></i>}1/2`
    }else if(review.rating === 2){
        return <div><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i></div>
    }else if(review.rating === 2.5){
        return <div><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i>1/2</div>
    }else if(review.rating === 3){
        return <div><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i></div>
    }else if(review.rating === 3.5){
        return <div><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i>1/2</div>
    }else if(review.rating === 4){
        return <div><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i></div>
    }else if(review.rating === 4.5){
        return <div><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i>1/2</div>
    }else if(review.rating === 5){
        return <div><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i><i class="fa-solid fa-face-smile"></i></div>
    }
}
