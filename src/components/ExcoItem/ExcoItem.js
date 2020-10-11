import React from 'react';
import { Link } from 'react-router-dom'

import { VideoSourceTypes } from '../../types/VideoSourceTypes';
import usePlaybuzz from '../../hooks/usePlaybuzz';

import './ExcoItem.css';

const Item = ({ itemData }) => {
    usePlaybuzz();

    const videoSourceConfig = VideoSourceTypes.find(source => {
        return itemData.source && source.name === itemData.source;
    });

    return (
      <div className="display-item exco-wrapper">
        <Link to={`/exco/${itemData.itemId}`}>
          <div className="thumbnail" style={{ backgroundImage: `url(${itemData.thumbnail})` }} />
          <div className="display-item__details">
              <h2>{itemData.title || "Missing title"}</h2>
              <div className="display-item__info">
                <p>some info</p>
              </div>
              <div className="display-item__bottom-bar">
                  <div>{videoSourceConfig.getIcon()}</div>
              </div>
          </div>
        </Link>
      </div>
    );
};

export default Item;
