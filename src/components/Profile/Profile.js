import React from 'react';
import './Profile.css';

const getImage = ( image ) => require( `../../assets/images/profile/${ image }` );

const Profile = ({ image, name, bio }) => (
  <div className="Profile">
    <div className="image">
      <img src={ getImage( image ) } alt={ name } />
    </div>

    <div className="cover-image" />

    <div className="bio">
      <h3>{ name }</h3>

      {
        bio &&
        <div className="blurb">
          { bio }
        </div>
      }

      <div className="cross">☦</div>
    </div>
  </div>
)

export default Profile;
