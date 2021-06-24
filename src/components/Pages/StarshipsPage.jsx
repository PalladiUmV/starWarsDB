import React from 'react';
import { StarshipDetails, StarshipList } from '../SWComponents/index'
import Row from '../Row/Row'

export default class StarshipsPage extends React.Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                left={<StarshipList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={selectedItem} />} />
        )
    }
}