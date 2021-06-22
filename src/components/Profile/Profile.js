import React from 'react';
import './Profile.css';

import ReactMarkdown from 'react-markdown'

const getImage = ( image, imageDir ) => require( `../../assets/images/${ imageDir }/${ image }` );

const Profile = ({ image, imageDir, imageSrc, altText, name, bio, markdown, withoutCross, withoutDropCap }) => (
  <div className="Profile">
    <div className="image">
      {
        imageSrc
          ? <img src={ imageSrc } alt={ name } alt={ altText || name } />
          : <img src={ getImage( image, imageDir ) } alt={ altText || name } />
      }
    </div>

    <div className="cover-image" />

    <div className="bio">
      {
        name &&
        <h3>{ name }</h3>
      }

      {
        markdown &&
        <div className={ `blurb ${ withoutDropCap ? '' : 'drop-cap' }` } style={ name ? {} : { marginTop: 0 } }>
          <ReactMarkdown children={ markdown } />
        </div>
      }

      {
        bio && !markdown &&
        <div className="blurb">
          { bio }
        </div>
      }

      {
        !withoutCross &&
        <div className="cross">☦</div>
      }
    </div>
  </div>
)

export default Profile;
