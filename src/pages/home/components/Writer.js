import React, { PureComponent } from 'react';
import { WriterWrapper, WriterList, WriterItem } from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
    render() {
        const {list} = this.props;

        return (
            <WriterWrapper>
                <WriterList>
                    {
                        list.map((item) =>{
                            return (
                                <WriterItem key={item.get('id')}>
                                    <a className='item-link'>
                                        <img className='img-pic' src={item.get('imgUrl')} alt=''/>
                                    </a>
                                    <a className='follow'>
                                    关注 
                                    </a>
                                    <div className='name'>
                                        {item.get('name')}
                                    </div>
                                    <p className='content'>
                                        {item.get('content')}
                                    </p>
                                </WriterItem>
                            )
                        })
                    }
                    
                </WriterList>
                <a className='more'>查看全部</a>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','writerList'])
});

export default connect(mapState, null)(Writer);