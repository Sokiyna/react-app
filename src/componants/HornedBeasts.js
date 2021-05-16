import React from 'react';
class HornedBeasts extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img src={this.props.hornPic} alt={"impala"} />
            </div>
        )
    }
}

export default HornedBeasts;