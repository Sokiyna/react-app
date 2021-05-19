import React from 'react';
import HornedBeasts from './HornedBeasts';
import dataArr from "./data.json";
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';





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

    hornsFilter = (event) => {

        let optionNum = event.target.value;
        let arrCopy = dataArr;
        let arr = [];
        if (optionNum) {
            arr = arrCopy.filter(item => {

                if (item.horns == optionNum) {
                    return item;
                } else{return''}

                
                
            })

        } else{
            arr=arrCopy;
        }
        this.props.filterAnimals(arr);
    }



        render(){

            return (
                
                     <div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Horns Number</Form.Label>
                        <Form.Control as="select" custom onChange={this.hornsFilter} >
                            <option value="">All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">WooW</option>
                        </Form.Control>
                    </Form.Group>
                    <CardColumns>
                    <>
                        {this.props.dataArr.map((items, index) => {
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
                </div>


            )
        }
    }

    export default Main;