const numRandom1 = Math.round(Math.random()*3)
const numRandom2 = Math.round(Math.random()*3)
const numRandom3 = Math.round(Math.random()*3)
const numRandom4 = Math.round(Math.random()*3)
const numRandom5 = Math.round(Math.random()*3)

let voteQuantity = [numRandom1, numRandom2, numRandom3, numRandom4, numRandom5]
let voteQuantityMore = []
let totally

voteQuantity.forEach((value, index) => {
    let num = index + 1
    voteQuantityMore.push(num * value)
});

let voteQuantityTotally = voteQuantityMore.reduce((a,b) => a + b, 0)
let voteQuantityTotallyWeigh = voteQuantity.reduce((a,b) => a + b, 0)
totally = voteQuantityTotally / voteQuantityTotallyWeigh

const initialState = {
    average:parseFloat(totally.toFixed(2)),
    static: false
}


const reducer = (state = initialState, {type, click, review}) => {
    switch(type) {
        case('reviewSendResult'):
            if (click.includes('star-half')) {
                let numberStar = Number(click.slice(-1))
                if (numberStar === 1) {
                    numberStar = 0

                    function Uptate() {
                        return (
                            voteQuantity[numberStar],
                            voteQuantity[numberStar] = voteQuantity[numberStar] + 1,
                            voteQuantity,
                            voteQuantity[numberStar]
                            )
                    }

                    Uptate()

                    let voteQuantityMore = []

                    voteQuantity.forEach((value, index) => {
                        let num = index + 1
                        voteQuantityMore.push(num * value)
                    });

                    voteQuantityTotally = voteQuantityMore.reduce((a,b) => a + b, 0)
                    voteQuantityTotallyWeigh = voteQuantity.reduce((a,b) => a + b, 0)
                    totally = voteQuantityTotally / voteQuantityTotallyWeigh

                    return {
                        ...state,
                            average:parseFloat(totally.toFixed(2)),
                            static: true
                    }
                } else {
                    numberStar = numberStar - 2
                    console.log(numberStar)

                    function Uptate() {
                        return (
                            voteQuantity[numberStar],
                            voteQuantity[numberStar] = voteQuantity[numberStar] + 1,
                            voteQuantity,
                            voteQuantity[numberStar]
                            )
                    }

                    Uptate()

                    let voteQuantityMore = []

                    voteQuantity.forEach((value, index) => {
                        let num = index + 1
                        voteQuantityMore.push(num * value)
                    });

                    voteQuantityTotally = voteQuantityMore.reduce((a,b) => a + b, 0)
                    voteQuantityTotallyWeigh = voteQuantity.reduce((a,b) => a + b, 0)
                    totally = voteQuantityTotally / voteQuantityTotallyWeigh

                    return {
                        ...state,
                            average:parseFloat(totally.toFixed(2)),
                            static: true
                    }
                }

            } else if (click.includes('star-full')) {
                let numberStar = Number(click.slice(-1))
                    numberStar = numberStar - 1

                    function Uptate() {
                        return (
                            voteQuantity[numberStar],
                            voteQuantity[numberStar] = voteQuantity[numberStar] + 1,
                            voteQuantity,
                            voteQuantity[numberStar]
                            )
                    }

                    Uptate()

                    let voteQuantityMore = []

                    voteQuantity.forEach((value, index) => {
                        let num = index + 1
                        voteQuantityMore.push(num * value)
                    });

                    voteQuantityTotally = voteQuantityMore.reduce((a,b) => a + b, 0)
                    voteQuantityTotallyWeigh = voteQuantity.reduce((a,b) => a + b, 0)
                    totally = voteQuantityTotally / voteQuantityTotallyWeigh

                    return {
                        ...state,
                            average:parseFloat(totally.toFixed(2)),
                            static: true
                    }
            } else {
                return state
            }
        default:
            return state
    }
}

export default reducer