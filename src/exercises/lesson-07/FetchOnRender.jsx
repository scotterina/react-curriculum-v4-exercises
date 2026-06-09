import './Lesson07Styles.css';
import { useEffect, useState } from 'react';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      setError('');

      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>

      <div className="content">
        {isLoading && <p>Loading posts...</p>}

        {error && <p>{error}</p>}

        {!isLoading &&
          !error &&
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
