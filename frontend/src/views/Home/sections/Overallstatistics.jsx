import React from 'react'
import '../HomePage/HomePage.css';
import BlogContent from './BlogContent.js'
import userImage from '../../../images/harin.jpg';

class Overallstatistics extends React.Component {
    render(){
        return (
            <div className="overallstatisticsContainer">
    
                {/* user image section */}
                <div className="section1">
                    <div className="ContentsWrapper">
                        <div className='user_image_wrapper'>
                            <div className="userimg_box">
                                <div className='user_img'>
                                    <img src={userImage}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* background image section */}
                <div className="section2">
                    <div className='option_box'>
                        <div className='btn_wrapper'>
                            <input type='button' value="여행기 작성"/>
                            <input type='button' value="환경 설정"/>
                        </div>
                    </div>
                    <div className='blog_wrapper'>
                        <div className='blog_contents_wrapper'>
                            <div className="blog_content_box">
                                <BlogContent/>
                                <BlogContent/>
                                <BlogContent/>
                                <BlogContent/>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* contents image section */}
                {/* <div className="section3">
                </div> */}
            </div>
        )
    }
}

export default Overallstatistics