import React from 'react';

import './style.scss';

const ProgressBar = props => (
  <div className="progress-bar" style={{transform: `scaleX(${props.progress})`}}></div>
);

export default ProgressBar;
