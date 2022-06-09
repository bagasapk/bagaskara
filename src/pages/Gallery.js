import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="service is-flex is-padding-inline is-padding-block between">
        <div>
          <h1>Service I Offer</h1>
          <div className="is-flex around">
            <p>___</p>
            <p>Currently learning and growing these skills</p>
          </div>
        </div>
        <div>
          <div className="is-border-white-top is-flex between align-center">
            <p>01/</p>
            <div className="is-grid">
              <h2>Frontend Developer</h2>
              <div className="is-flex">
                <p>explore</p>
                <a href="#home">a</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
