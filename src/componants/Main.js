import React from 'react';
import HornedBeasts from './HornedBeasts';
import horn1 from './imges.jpg/horn1.jpg';
import horn2 from './imges.jpg/horn2.jpg';


class Main extends React.Component {

    render() {
        return (
            <div>
                <HornedBeasts hornPics={horn1} discription={"A horn is a permanent pointed projection on the head of various animals that consists of a covering of keratin and other proteins surrounding a core of live bone.Horns are distinct from antlers, which are not permanent."} title={"impala"} />
                <HornedBeasts hornPics={horn2} discription={"One pair of horns is usual; however, two or more pairs occur in a few wild species and in some domesticated breeds of sheep. Polycerate (multi-horned) sheep breeds include the Hebridean, Icelandic, Jacob, Manx Loaghtan, and the Navajo-Churro."} title={"Antlers"} />
            </div>
        )
    }
}

export default Main;