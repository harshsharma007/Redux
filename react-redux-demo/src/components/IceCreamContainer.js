import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Num of Ice Cream - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default IceCreamContainer