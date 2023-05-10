import { memo } from "react";

function Content({ onIncrease }) {
    return (
        <div>
            { console.log('re-render') }
            <button onClick={onIncrease}>++</button>
        </div>
    )
}

export default memo(Content)