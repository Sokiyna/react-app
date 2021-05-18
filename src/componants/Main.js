import React from 'react';
import HornedBeasts from './HornedBeasts';
import dataArr from "./data.json";
import CardColumns from 'react-bootstrap/CardColumns';




class Main extends React.Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         title: this.props.title,
    //         imgUrl: this.props.image_url,
    //         description: this.props.description,


    //     }
    // }

    // showImg



    render() {

        return (
            <CardColumns>

<>
                {dataArr.map((items, index) => {
                    return (
                        <HornedBeasts
                            key={index}
                            title={items.title}
                            imageUrl={items.image_url}
                            description={items.description}
                            showHandle={this.props.showHandle} />

                    )
                }

                )}



            </>
            </CardColumns>
           
        )
    }
}

export default Main;