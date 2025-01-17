import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App1: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchData, setFetchData] = useState<boolean>(false);

  useEffect(() => {
    if (!fetchData) return;

    setLoading(true);
    setError(null);

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch data');
        setLoading(false);
      });

    // Reset fetchData to prevent re-fetching
    setFetchData(false);
  }, [fetchData]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Posts</h1>
      <button
        onClick={() => setFetchData(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Fetch Posts
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {data.map(post => (
          <li key={post.id} className="mb-2">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App1;
