import { useEffect, useState } from 'react';
import NewSpaper from '../../Components/NewSpaper/NewSpaper';
import PostNew from '../../Components/PostNew/PostNew';
import ViewPost from '../../Components/ViewPost/ViewPost';
import { getAllPost } from '../../Api/service';
function Home() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        getPostApi();
    }, []);

    const getPostApi = async () => {
        try {
            let res = await getAllPost();
            if (res) {
                setPost(res.data);
            }
        } catch (error) {
            console.log('loi get post all');
        }
    };

    return (
        <>
            <NewSpaper />
            <PostNew />
            {post.map((item, index) => {
                return <ViewPost key={index} title={item.title} img={item.img} avata={item.avata} name={item.name} />;
            })}
        </>
    );
}

export default Home;
