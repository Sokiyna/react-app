import React from 'react';
import HornedBeasts from './HornedBeasts';
import arrImgs from './arrImgs.json';
import CardColumns from 'react-bootstrap/CardColumns';



class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            imgUrl: this.props.image_url,
            description: this.props.description,
        }
    }


    render() {
        return (
            <CardColumns>
            <>
                {arrImgs.map(items => {
                    return (
                        <HornedBeasts
                            title={items.title}
                            imgUrl={items.image_url}
                            description={items.description}/>


                )
                }

                )}
            </>
            </CardColumns>
        )
    }
}

export default Main;



