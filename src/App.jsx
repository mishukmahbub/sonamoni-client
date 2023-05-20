import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from API or perform any side effect
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/AllToys');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Clean up the effect when the component unmounts
    return () => {
      // Any cleanup code (if needed) goes here
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {/* Render the data */}
      {data.map((toy) =>
 (
        <div key={toy._id} className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={toy.picture_url} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{toy.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
