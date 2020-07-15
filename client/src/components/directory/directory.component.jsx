import React from 'react';

import Categories from '../categories/categories.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80'
                },
                {
                    id: 2,
                    title: 'art work',
                    imageUrl: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80'
                },
                {
                    id: 3,
                    title: 'accessories',
                    imageUrl: 'https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                },
                {
                    id: 4,
                    title: 't-shirts',
                    imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'hoodies',
                    imageUrl: 'https://images.unsplash.com/photo-1512919768487-e3c8ea8d4567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    size: 'large'
                }
            ],
        }
    }

    render() {
        return (
            <div className='directory'>
                {
                    this.state.sections.map(({ id, title, imageUrl, size }) => (
                        <Categories 
                            key={id} 
                            title={title} 
                            imageUrl={imageUrl} 
                            size={size} 
                        />
                    ))
                }
            </div>   
        )
    }
}

export default Directory;