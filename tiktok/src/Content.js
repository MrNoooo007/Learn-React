import { useEffect } from 'react';
import { useState } from 'react';


function Content() {
    const [countDown, setCountDown] = useState(180);

    useEffect(() => {
        setInterval(() => {
            setCountDown(countDown => countDown - 1)
        },1000)
    }, [])

    return (
        <div>
            { countDown }
        </div>
    )
}

export default Content