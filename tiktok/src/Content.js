import { useEffect } from 'react';
import { useState } from 'react';


function Content() {
    const [avt, setAvt] = useState();

    useEffect(() => {
        return () => {
            avt && URL.revokeObjectURL(avt.preview);   
        }    
    }, [avt])


    const handleUploadImg = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);
        setAvt(file);
    }

    return (
        <div>
            <input 
                type='file'
                onChange={handleUploadImg}
            />
            {avt && (
                <img src={avt.preview} />
            )}
        </div>
    )
}

export default Content