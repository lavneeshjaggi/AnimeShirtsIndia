import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Carousel from '../../components/carousel/carousel.component';
import Directory from '../../components/directory/directory.component';

import { setCurrentUser } from '../../redux/user/user.actions';

import './homepage.styles.scss';

class Homepage extends React.Component {
    componentDidMount() {
        this.isLoggedIn();
    }

    isLoggedIn = async () => {
        const { setCurrentUser } = this.props;

        const response = await axios.get('/authenticated');

        const user = response.data.user;

        if (user) {
            setCurrentUser({
                id: user._id,
                cart: user.cart,
                name: user.name,
                email: user.email
            });
        }

        setCurrentUser(user);
    }

    render() {
        return (
            <div className='homepage'>
                <Carousel name={'homepageSlides'} />
                <Directory />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)) 
});

export default connect(
    null, 
    mapDispatchToProps
)(Homepage);