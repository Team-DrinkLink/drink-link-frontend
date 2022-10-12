import React from 'react';
import {Card, Button,} from 'react-bootstrap';


class Drink extends React.Component {
    render() {
        console.log(this.props.selectedDrink);
        return (
            <>
            <h1>{this.props.selectedDrink.strDrink}</h1>
            <Card style={{ width: '18rem' }} className='mx-3 my-3'>
                <Card.Body>
                <Card.Img src={this.props.selectedDrink.strDrinkThumb} />
                </Card.Body>
                <Card.Footer>{this.props.selectedDrink.strIBA}</Card.Footer>
            </Card>
            <div id='ingredients'>

            <Card style={{ width: '8rem' }} className='mx-3 my-3'> 
                <Card.Body>
                <Card.Img src="https://via.placeholder.com/150" />
                </Card.Body>
                <Card.Footer>Sample Ingredient</Card.Footer>
                </Card>
                <Card style={{ width: '8rem' }} className='mx-3 my-3'>
                <Card.Body>
                <Card.Img src="https://via.placeholder.com/150" />
                </Card.Body>
                <Card.Footer>Sample Ingredient</Card.Footer>
                </Card>
                <Card style={{ width: '8rem' }} className='mx-3 my-3'>
                <Card.Body>
                <Card.Img src="https://via.placeholder.com/150" />
                </Card.Body>
                <Card.Footer>Sample Ingredient</Card.Footer>
                </Card>
                <Card style={{ width: '8rem' }} className='mx-3 my-3'>
                <Card.Body>
                <Card.Img src="https://via.placeholder.com/150" />
                </Card.Body>
                <Card.Footer>Sample Ingredient</Card.Footer>
                </Card>

            </div>
            <div>
                <p> Instructions: {this.props.selectedDrink.strInstructions}</p>
                <p> Glass type: {this.props.selectedDrink.strGlass}</p>
            </div>
                <Button onClick={() => this.props.handleFavoriteClick()}
                    variant="secondary" type="submit">
                    add to Favorites
                </Button>



            </>
        )


    }
}

export default Drink; 