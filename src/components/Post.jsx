
import { Card } from '@material-ui/core';
import { useState } from 'react';
import '../styles/Post.css';


function Post(props) {
  const [upvotes, setUpvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const [downvotes, setDownvotes] = useState(0);

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };
  const [sharevotes, setsharevotes] = useState(0);

  const handlesharevote = () => {
    setsharevotes(sharevotes + 1);
  };
  return (
    // <Card className="post">
    //   <CardContent>
    //     <Typography variant="h5" component="h2">
    //       Post Title
    //     </Typography>
    //     <Typography color="textSecondary">
    //       Post content goes here. This is a simple example of a post.
    //     </Typography>
    //   </CardContent>
    // </Card>

    <Card className='post'>
 
    <div className="post">
      <div className="post-header">
        <div className="profile-info">
          <img src={props.img} alt="Profile" className="profile-pic" />
          <div>
            <span className="profile-name">Narayan Biswasdas's Space</span>
            <span className="post-time">1m</span>
          </div>
        </div>
        <div className="follow-button">
          <button>Follow</button>
        </div>
      </div>
      <div className="post-body">
        <div className="post-content">
          <p>Kamal Haasan is a DMK daily wage earner. He has mortgaged his brain and common sense to DMK for his income. The one who spoke heroic words in the film industry has become DMK's slave. He started a political party saying he (more)</p>
        </div>
        <div className="post-media">
          <img src={props.img2} alt="Post media" className="post-image" />
        </div>
        <div className="post-text">
          <p>
            <strong>WATCH</strong> | Tamil Nadu: After meeting the Hooch tragedy victims, MNM party chief Kamal Haasan says,
            "...These victims will have to understand they have exceeded their limit and they have been careless. They have to be careful.
            They have to take care of their health. My request to government would be to create psychiatric centres which will counsel them...
            It has to be occasional drinking, social drinking if at all. But they must understand that exceeding limit in any form be it sugar or anything is bad..."
          </p>
        </div>
      </div>
      <div className="post-footer">
        <div className="post-actions">
        <button onClick={handleUpvote} className="upvote-button">
            Upvote {upvotes > 0 && <span className="upvote-count">{upvotes}</span>}
          </button>
          <button onClick={handleDownvote}  className="upvote-button">Downvote {downvotes > 0 && <span className="upvote-count">{downvotes}</span>}</button>
          <button onClick={handlesharevote}  className="upvote-button">Share {sharevotes > 0 && <span className="upvote-count">{sharevotes}</span>}</button>
        </div>
      </div>
    </div>


    </Card>


  );
}

export default Post;
