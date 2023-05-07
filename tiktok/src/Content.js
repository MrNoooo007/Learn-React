import { useEffect } from 'react';
import { useState } from 'react';

const tabs = ['posts', 'comments', 'albums']

function Content() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGotoTop, setGotoTop] = useState(false);
    
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    }, [type])

    useEffect(() => {        
        const handlScroll = () => {
            setGotoTop(window.scrollY >= 200);
        }

        return () => {
            window.removeEventListener('scroll', handlScroll);
        }

        window.addEventListener('scroll', handlScroll);
    })

    return (
        <div>
            {tabs.map(tab => 
                <button 
                    key={tab}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>)}
            <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => <li key={post.id}>{post.title || post.name}</li>)}
            </ul>
        </div>
    )
}

export default Content