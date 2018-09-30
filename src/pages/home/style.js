import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    width: 624px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
        display: block;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow:hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    background: #f7f7f7;
    margin-left: 18px;
    margin-bottom: 18px;
    color: #000;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        width: 32px;
        height: 32px;
        float: left;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width:124px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 4px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    padding-right: 17px;
    box-sizing: border-box;
    float: left;
    .title {
        font-size: 18px;
        color: #333;
        line-height:27px;
        font-weight: bold;
        margin-bottom: 4px;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    width: 280px;
    height: 284px;
    margin-top: 30px;
    .link-pic {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
        display: block;
    }
`;

export const WriterWrapper = styled.div`
    width: 280px;
    position: relative;
    .more {
        position: absolute;
        left:0;
        padding: 7px 0;
        width: 280px;
        font-size: 13px;
        color: #787878;
        box-sizing:border-box;
        display:block;
        text-align: center;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
    }
`;

export const WriterList = styled.div`
    width: 280px;
    hegiht: 270px;
    margin-bottom: 20px;
`;

export const WriterItem = styled.div`
    margin-top: 15px;
    line-height: 20px;
    overflow: hidden;
    .item-link {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
    }
    .img-pic {
        width: 100%;
        height: 100%;
        display:block;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    .name {
        color: #333;
        cursor: pointer;
    }
    .content {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin:30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color:#fff;
    cursor:pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 50px;
    width: 60px;
    height: 60px; 
    line-height: 60px;
    text-align: center;
    border:1px solid #ccc;
`;