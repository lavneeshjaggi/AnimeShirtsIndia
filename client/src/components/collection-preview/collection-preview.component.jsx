import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
        {items
            .filter((item, idx) => idx < 4).
            map((item) => (
            <h3 key={item.id}>{item.title}</h3>
        ))}
    </div>
  </div>
);

export default CollectionPreview;