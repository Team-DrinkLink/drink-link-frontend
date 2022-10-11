import React from 'react';
import {Card, Button,} from 'react-bootstrap';


class Drink extends React.Component {
    render() {
        return (
            <>
            <h1>Name of Drink (will be this.props......something)</h1>
            <Card style={{ width: '18rem' }} className='mx-3 my-3'>
                <Card.Body>
                <Card.Img src="https://via.placeholder.com/150" />
                </Card.Body>
                <Card.Footer>Categories</Card.Footer>
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
                <p> Instructions</p>
                <p> Glass type</p>
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