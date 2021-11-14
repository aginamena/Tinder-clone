import React from 'react';
import "../styles/SwipeButtons.scss";

function SwipeButtons() {
    return (
        <div id="swipeButtons">
            <button type="button" class="btn btn-light">
                <i class="fas fa-reply"></i>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-times"></i>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-star"></i>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-heart"></i>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-bolt"></i>
            </button>
        </div>
    )
}

export default SwipeButtons
