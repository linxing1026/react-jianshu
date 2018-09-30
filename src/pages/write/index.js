import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../login/store/actionCreators';

class Write extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        console.log(loginStatus);
        if(loginStatus) {
            return (
                <div>写文章</div>
            )
        }else {
            return <Redirect to='/login' />
        }
    }

}

const mapState = (state) => ({
   loginStatus: state.getIn(['login','login'])
});


export default connect(mapState, null)(Write);