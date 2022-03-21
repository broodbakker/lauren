import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { List, Image, Text, Heading, Blob } from "../components/basicComponents"
import { Image as ImageGrommet, Box, ResponsiveContext, Grid } from "grommet"


const TestPage = () => {
  return (
    <div>
      <div>
        <Heading level="2">Heading</Heading>
        <Heading level="1">h1</Heading>
        <Heading level="2">h2</Heading>
        <Heading level="3">h3</Heading>
        <Heading level="4">h4</Heading>
      </div>

      <div>
        <Heading level="2">Text</Heading>

        {/* tip text */}
        <div>
          <Text tip={{ content: "help" }}>this is text</Text>
        </div>

        {/* underscore */}
        <div>
          <Text underscore>this is underscore text</Text>
        </div>

        {/* bold */}
        <div>
          <Text bold >this is bold text</Text>
        </div>

        {/* bold  underscore*/}
        <div>
          <Text bold underscore>this is a bold underscore text</Text>
        </div>
      </div>

      <div>
        <Heading level="2">List</Heading>
        <List>
          <li>DigitalOcean, 2017 - 2020</li>
          <li>DigitalOcean, 2017 - 2020</li>
          <li>DigitalOcean, 2017 - 2018</li>
        </List>
      </div>

      <div>
        <Heading level="2">Images</Heading>
        <Image title="title" subtitle="director" src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
      </div>

      <div>
        <Blob />
      </div>

      <Winkel />
    </div>
  )
}


const Winkel = () =>
  <Box pad="medium">
    <Heading margin="none" level="3" color="dark-2">Mijn Winkeltje 🎁</Heading>
    <ResponsiveGrid
      responsive={true}
      rows={['auto', 'auto', 'auto', 'auto']}
      columns={['1/4', '1/4', "1/4", "1/4"]}
      areas={{
        small: [
          { name: 'one', start: [0, 0], end: [1, 0] },
          { name: 'two', start: [2, 0], end: [3, 0] },
          { name: 'three', start: [0, 1], end: [1, 1] },
          { name: 'four', start: [2, 1], end: [3, 1] },
          { name: 'five', start: [0, 2], end: [1, 2] },
          { name: 'six', start: [2, 2], end: [3, 2] },
          { name: 'seven', start: [0, 3], end: [1, 3] },
          { name: 'eight', start: [2, 3], end: [3, 3] },
        ],

        medium: [
          { name: 'one', start: [0, 0], end: [0, 0] },
          { name: 'two', start: [1, 0], end: [1, 0] },
          { name: 'three', start: [2, 0], end: [2, 0] },
          { name: 'four', start: [3, 0], end: [3, 0] },
          { name: 'five', start: [0, 1], end: [0, 1] },
          { name: 'six', start: [1, 1], end: [1, 1] },
          { name: 'seven', start: [2, 2], end: [2, 2] },
          { name: 'eight', start: [3, 2], end: [3, 2] },
        ],
      }
      }
    >
      <Card gridArea="one" image="image/lauren2.jpeg" />
      <Card gridArea="two" image="image/lauren3.jpeg"/>
      <Card gridArea="three" image="image/lauren4.jpeg"/>
      <Card gridArea="four" image="image/lauren5.jpeg"/>
      <Card gridArea="five" image="image/lauren6.jpeg"/>
      <Card gridArea="six" image="image/product1.jpeg"/>
      <Card gridArea="seven" image="image/lauren6.jpeg"/>
      <Card gridArea="eight" image="image/product1.jpeg"/>

    </ResponsiveGrid>
  </Box >

const Card1 = ({ className, gridArea }) =>
  <Box className={className} gridArea={gridArea} pad="xsmall">
    <div className="body">
      <Box className="container" height={{ max: "400px" }}>
        <Box className="overlay" height={{ max: "400px" }}>
          <div className="items"></div>
          <div className="items head">
            <p>Flower Embroidery Hoop Art</p>
            <hr />
          </div>
          <div className="items price">
            <p className="old">$699</p>
            <p className="new">$345</p>
          </div>
          <div className="items cart">
            <i className="fa fa-shopping-cart"></i>
            <span>ADD TO CART</span>
          </div>
        </Box>
      </Box>
    </div>
  </Box>



const ResponsiveGrid = ({ children, areas, ...props }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Grid areas={areas[size]} {...props}>
      {children}
    </Grid>
  );
};


interface CardProps {
  gridArea: string;
  image:string
}



const Card = styled(Card1) <CardProps>`
.body {
  position:relative;
}



.container {
  margin: auto;
  background: url(${props => props.image});
  background-color: black;
  background-size: cover;
  cursor: pointer;
  -webkit-box-shadow: 0 0 5px #000;
        box-shadow: 0 0 5px #000;
  }

.overlay {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  background: rgba(77, 77, 77, .9);
  color: #00C781;
  opacity: 0;
  transition: all 0.5s;
  font-family: 'Playfair Display', serif;
}

.items {
  padding-left: 20px;
  letter-spacing: 3px;
}

.head {
  font-size: 30px;
  line-height: 40px;
  transform: translateY(40px);
  transition: all 0.7s;
  hr {
    display: block;
    width: 0;

    border: none;
    border-bottom: solid 2px #00C781;

    position: absolute;
    bottom: 0; left:20px;

    transition: all .5s;
  }
}

.price {
  font-size: 22px;
  line-height: 10px;
  font-weight: bold;
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s;
  .old {
    text-decoration: line-through;
    color: lighten(rgb(77, 77, 77),40%);
  }
}

.cart {
  font-size: 12px;
  opacity: 0;
  letter-spacing: 1px;
  font-family: 'Lato', sans-serif;
  transform: translateY(40px);
  transition: all 0.7s;
  i {
    font-size: 16px;
  }
  span {
    margin-left: 10px;
  }
}

.container:hover .overlay {
  opacity: 1;
  & .head {
    transform: translateY(0px);
  }

  & hr {
    width: 75px;
    transition-delay: 0.4s;
  }

  & .price {
    transform: translateY(0px);
    transition-delay: 0.3s;
    opacity: 1;
  }

  & .cart {
    transform: translateY(0px);
    transition-delay: 0.6s;
    opacity: 1;
  }
}
`


export default TestPage