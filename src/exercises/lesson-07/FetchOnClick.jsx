import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleClick() {
    setIsLoading(true);
    setError('');

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>

      <button type="button" onClick={handleClick}>
        Get post
      </button>

      <div className="content">
        {isLoading && <p>Loading post...</p>}

        {error && <p>{error}</p>}

        {!isLoading && !error && post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
