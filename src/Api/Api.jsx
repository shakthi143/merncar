import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Api.css';

const Api = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://retoolapi.dev/9fxIs7/data')
      .then(response => {
        setMediaItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-cards">
        {mediaItems.map((item, index) => (
          <div key={index} className="gallery-card">
            <Link to="/bookappointment">
              {item.type === 'image' ? (
                <img src={item.src} alt={item.alt} className="gallery-image" />
              ) : (
                <iframe
                  width="560"
                  height="315"
                  src={item.src}
                  title={item.alt}
                  frameBorder="0"
                  allowFullScreen
                  className="gallery-video"
                ></iframe>
              )}
              <div className="description">Click to book the car</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
