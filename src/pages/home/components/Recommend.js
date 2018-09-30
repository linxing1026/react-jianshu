import React, { PureComponent } from 'react';
import { RecommendWrapper } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return(
                            <a key={item.get('id')}>
                                <img className='link-pic' src={item.get('imgUrl')} alt=''/>
                            </a>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','recommendList'])
})

export default connect( mapState, null )(Recommend);