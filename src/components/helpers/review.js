import React from 'react'

// Redux
import { connect } from 'react-redux'

// Style
import './index.css'


const averageNow = (ave) => {

    switch (true) {
        case ave <= 0.3 :
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                </div>
            )
        case ave <= 0.7:
            return (
                    <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="fas fa-star-half-alt"></span>
                </div>
            )
        case ave <= 1.2:
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                <span className="star-empty"></span>
                <span className="star-empty"></span>
                <span className="star-empty"></span>
                <span className="star-empty"></span>
                <span className="fas fa-star"></span>
            </div>
            )
        case ave <= 1.7:
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="fas fa-star-half-alt"></span>
                    <span className="fas fa-star"></span>
                </div>
            )
        case ave <= 2.2:
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                </div>
            )
        case ave <= 2.7:
            return (
            <div className="review-static d-flex justify-content-center align-items-center">
                <span className="star-empty"></span>
                <span className="star-empty"></span>
                <span className="fas fa-star-half-alt"></span>
                <span className="fas fa-star"></span>
                <span className="fas fa-star"></span>
            </div>
            )
        case ave <= 3.2:
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                </div>
            )
        case ave <= 3.7:
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="star-empty"></span>
                    <span className="fas fa-star-half-alt"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                </div>
            )
        case ave <= 4.2:
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="star-empty"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                </div>
            )
        case ave <= 4.6:
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="fas fa-star-half-alt"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                </div>
            )
        case ave <= 5:
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                    <span className="fas fa-star"></span>
                </div>
            )
        default:
            return (
                <div className="review-static d-flex justify-content-center align-items-center">
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                    <span className="star-empty"></span>
                </div>
            )
    }
}


const Review = ({staticStar, staticAverage, review, setReviewResult}) => {

    if (staticStar) {
        return(
            <>
                {averageNow(staticAverage || review.average)}
            </>
        )
    } else if (review.static) {
        return (
            <>
                {averageNow(review.average)}
            </>
        )
    } else {
        return(
            <>
                <div className="review d-flex justify-content-center align-items-center">
                    <div className="review-Opacity">
                        {averageNow(staticAverage || review.average)}
                    </div>

                    <span className="star-empty star-5 d-inline-block" onClick={(e) => setReviewResult(e.target.className, review) }>
                        <span className="fas star-half star-5"></span>
                        <span className="fas star-full star-5"></span>
                    </span>
                    <span className="star-empty star-4 d-inline-block" onClick={(e) => setReviewResult(e.target.className, review) }>
                        <span className="fas star-half star-4"></span>
                        <span className="fas star-full star-4"></span>
                    </span>
                    <span className="star-empty star-3 d-inline-block" onClick={(e) => setReviewResult(e.target.className, review) }>
                        <span className="fas star-half star-3"></span>
                        <span className="fas star-full star-3"></span>
                    </span>
                    <span className="star-empty star-2 d-inline-block" onClick={(e) => setReviewResult(e.target.className, review) }>
                        <span className="fas star-half star-2"></span>
                        <span className="fas star-full star-2"></span>
                    </span>
                    <span className="star-empty star-1 d-inline-block" onClick={(e) => setReviewResult(e.target.className, review) }>
                        <span className="fas star-half star-1"></span>
                        <span className="fas star-full star-1"></span>
                    </span>
                </div>
            </>
        )
    }
}


const mapStateToProps = state => ({
    review: state.review
})

const mapDispatchToProps= dispatch => ({
    setReviewResult: (click, review) =>
        dispatch ({
            type: "reviewSendResult",
            click,
            review
        })
})

export default connect(mapStateToProps, mapDispatchToProps)(Review)