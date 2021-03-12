import React from 'react';
import './Profile.css';

import ReactMarkdown from 'react-markdown'

const getImage = ( image, imageDir ) => require( `../../assets/images/${ imageDir }/${ image }` );

const Profile = ({ image, imageDir, name, bio, markdown }) => (
  <div className="Profile">
    <div className="image">
      <img src={ getImage( image, imageDir ) } alt={ name } />
    </div>

    <div className="cover-image" />

    <div className="bio">
      <h3>{ name }</h3>

      {
        markdown &&
        <div className="blurb">
          <ReactMarkdown children={ markdown } />
        </div>
      }

      {
        bio && !markdown &&
        <div className="blurb">
          { bio }
        </div>
      }

      <div className="cross">☦</div>
    </div>
  </div>
)

export default Profile;
