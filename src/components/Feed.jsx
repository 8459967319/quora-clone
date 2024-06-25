
import Post from './Post';
import '../styles/Feed.css';
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'
import p3 from './images/p3.jpg'
import post1 from './images/post1.jpg'
import post2 from './images/post2.jpg'
import post3 from './images/post3.jpg'
function Feed() {
  return (
    <div className="feed">
      <Post img={p1} img2={post1} />
      <Post img={p2} img2={post2}/>
      <Post img={p3} img2={post3} />
      <Post img={p1} img2={post1} />
      <Post img={p2} img2={post2}/>
      <Post img={p3} img2={post3} />
    </div>
  );
}

export default Feed;
