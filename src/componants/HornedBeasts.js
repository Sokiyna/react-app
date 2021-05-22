import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0,
        }
    }

    addAnimalVotes = () => {
        this.setState({
            votes: this.state.votes + 1,
        })
    }

    renderData = () =>{
        this.props.showHandle(this.props.title);
      }
      
    render() {
        return (
            <div class='gallery'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.renderData} variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            🐈 Number of pets: {this.state.votes}
                        </Card.Text>
                        <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                    <Button onClick={this.addAnimalVotes} variant="primary">Vote</Button>
                </Card>
            </div>
        )
    }
}

export default HornedBeasts;