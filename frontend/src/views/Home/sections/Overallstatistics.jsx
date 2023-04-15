import React from 'react'
import '../HomePage/HomePage.css';

class Overallstatistics extends React.Component {
    render(){
        return (
            <div className="overallstatisticsContainer">
    
                {/* user image section */}
                <div className="section1">
                    <div className="ContentsWrapper">
                        {this.props.name}
                    </div>
                </div>
    
                {/* background image section */}
                <div className="section2">
                </div>
                
                {/* contents image section */}
                {/* <div className="section3">
                </div> */}
            </div>
        )
    }
}

export default Overallstatistics