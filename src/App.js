import React, { useState } from 'react';

import './App.css';

const App = () => {

  const [liked, setLike] = useState(false);
  const [disliked, setDislike] = useState(false);
  const [likedCount, setLikeCount] = useState(100);
  const [dislikedCount, setDislikeCount] = useState(25);

  const likeHandler = () => {
    let likeStatus = !liked;

    setLike(likeStatus);

    if (likeStatus && disliked) {
      setDislike(false);
      setDislikeCount(dislikedCount - 1);
    }

    setLikeCount(likeStatus ? likedCount + 1 : likedCount - 1);
  }

  const disLikeHanlder = () => {
    let disLikeStatus = !disliked;

    setDislike(disLikeStatus);

    if (disLikeStatus && liked) {
      setLike(false);
      setLikeCount(likedCount - 1);
    }

    setDislikeCount(disLikeStatus ? dislikedCount + 1 : dislikedCount - 1);
  }

  return (
    <div>
      <button className={liked ? 'like-button liked' : 'like-button'} onClick={likeHandler}>Like | {likedCount}</button>
      <button className={disliked ? 'dislike-button disliked' : 'dislike-button'} onClick={disLikeHanlder}>Dislike | {dislikedCount}</button>
    </div>
  );
}

// class App extends Component {

//   state = {
//     liked: false,
//     disliked: false,
//     likedCount: 100,
//     dislikedCount: 25
//   }

//   likeHandler = () => {
//     let { liked, likedCount, disliked, dislikedCount } = this.state;
//     liked = !liked;

//     if (liked && disliked) {
//       disliked = false;
//       dislikedCount--;
//     }

//     likedCount = liked ? likedCount + 1 : likedCount - 1;

//     this.setState({
//       liked, likedCount, disliked, dislikedCount
//     });
//   }

//   disLikeHanlder = () => {
//     let { liked, likedCount, disliked, dislikedCount } = this.state;

//     disliked = !disliked;

//     if (disliked && liked) {
//       liked = false;
//       likedCount--;
//     }

//     dislikedCount = disliked ? dislikedCount + 1 : dislikedCount - 1;

//     this.setState({
//       liked, likedCount, disliked, dislikedCount
//     });
//   }

//   render() {
//     const { liked, disliked, likedCount, dislikedCount } = this.state;
//     return (
//       <div>
//         <button className={liked ? 'like-button liked' : 'like-button'} onClick={this.likeHandler}>Like | {likedCount}</button>
//         <button className={disliked ? 'dislike-button disliked' : 'dislike-button'} onClick={this.disLikeHanlder}>Dislike | {dislikedCount}</button>
//       </div>
//     );
//   }
// }

export default App;
