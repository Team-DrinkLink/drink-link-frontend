import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import '../Styles/Cardstyle.scss'
// import { Link } from "react-router-dom";


class Drink extends React.Component {
    render() {
        console.log(this.props.selectedDrink);
        return (
            <>
                <Container>
                    <Card style={{ width: '18rem'}} className='mx-3 my-3'>
                        <Card.Header as='h1'>{this.props.selectedDrink.strDrink}</Card.Header>
                        <Card.Body>
                            <Card.Img src={this.props.selectedDrink.strDrinkThumb} />
                        </Card.Body>
                        <Card.Footer>{this.props.selectedDrink.strIBA}</Card.Footer>
                    </Card>
                </Container>

                <Container className='cardDisplay'>

                    {this.props.selectedDrink.strIngredient1 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient1}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient1}-Medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure1}</Card.Footer>
                        </Card>
                    }

                    {this.props.selectedDrink.strIngredient2 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient2}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient2}-Medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure2}</Card.Footer>
                        </Card>
                    }

                    {this.props.selectedDrink.strIngredient3 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient3}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient3}-medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure3}</Card.Footer>
                        </Card>
                    }

                    {this.props.selectedDrink.strIngredient4 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient4}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient4}-medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure4}</Card.Footer>
                        </Card>
                    }

                    {this.props.selectedDrink.strIngredient5 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient5}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient5}-medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure5}</Card.Footer>
                        </Card>
                    }

                    {this.props.selectedDrink.strIngredient6 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient6}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient6}-medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure6}</Card.Footer>
                        </Card>
                    }

                    {this.props.selectedDrink.strIngredient7 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient7}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient7}-medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure7}</Card.Footer>
                        </Card>
                    }

                    {this.props.selectedDrink.strIngredient8 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient8}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient8}-medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure8}</Card.Footer>
                        </Card>
                    }

                    {this.props.selectedDrink.strIngredient9 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient9}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient9}-medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure9}</Card.Footer>
                        </Card>
                    }

                    {this.props.selectedDrink.strIngredient10 &&
                        <Card style={{ width: '15rem', height: '22rem' }} className='mx-3 my-3'>
                            <Card.Header as='h3'>{this.props.selectedDrink.strIngredient10}</Card.Header>
                            <Card.Img src={`https://www.thecocktaildb.com/images/ingredients/${this.props.selectedDrink.strIngredient10}-medium.png`}/>
                            <Card.Body>
                            </Card.Body>
                            <Card.Footer as='h4'>{this.props.selectedDrink.strMeasure10}</Card.Footer>
                        </Card>
                    }


                </Container>
                <div className='drinkinstructions'>
                    <h2 style={{ color: "white" }}>Instructions</h2>
                    <p style={{ color: "white" }}>{this.props.selectedDrink.strInstructions} </p>
                    <h4 style={{ color: "white" }}>Glass type</h4>
                    <p style={{ color: "white" }}>{this.props.selectedDrink.strGlass}</p>
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