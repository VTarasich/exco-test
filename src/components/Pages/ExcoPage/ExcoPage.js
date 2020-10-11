import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowBack } from '../../../assets/svg/arrow-left.svg';
import usePlayBuzz from '../../../hooks/usePlaybuzz';

import './ExcoPage.css';

const ExcoPage = ({ match }) => {
  usePlayBuzz();

  return (
    <>
      <Link to="/" className="backButton"><ArrowBack /> Back</Link>
      <div className="playbuzz" data-id={match.params.id} data-show-share="true" data-show-info="true" data-comments="false" />
    </>
  );
};

export default ExcoPage;
