import { useEffect } from 'react';
import { useState } from 'react';


function Content() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handlResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handlResize)
    })

    return (
        <div>
            { width }
        </div>
    )
}

export default Content