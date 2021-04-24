import React from 'react';
import { Carousel, Product } from '../components';

const ProductContainer = () => {
  return (
    <>
      <Product>
        <Product.Group>
          <Carousel
            currentContent={{
              slides: [
                {
                  type: 'image',
                  src: 'product/there-still-are-mysteries/1.jpg',
                },
                {
                  type: 'image',
                  src: 'product/there-still-are-mysteries/2.jpg',
                },
                {
                  type: 'image',
                  src: 'product/there-still-are-mysteries/3.jpg',
                },
                {
                  type: 'image',
                  src: 'product/there-still-are-mysteries/4.jpg',
                },
                {
                  type: 'image',
                  src: 'product/there-still-are-mysteries/5.jpg',
                },
              ],
            }}
          />
        </Product.Group>

        <Product.Group>
          <Product.Heading>The Elephant Hotel</Product.Heading>

          <Product.Text>
            Have you ever wondered what it would be like if there was a hotel
            for elephants, run by elephants?
          </Product.Text>
          <Product.Text>
            Winner of the first ever ELCAF Award, this delightful book is full
            of colour, fun and a little bit of mess, bringing together Nicolas
            Burrows’ energetic collage work with a playful and absurd premise
            that will tickle the funnybones of children and adults.
          </Product.Text>
          <Product.Text>
            Listen to Nicolas talking about the making of the book in this short
            interview
          </Product.Text>
          <Product.Text>Edition of 500</Product.Text>
          <Product.Text>
            44 pages (including bumper fold-out spread) <br /> Hardback
          </Product.Text>

          <Product.Heading>£12.00</Product.Heading>
          <Product.Input placeholder='Email Adress' />
          <Product.Button>Subscribe</Product.Button>
        </Product.Group>
      </Product>
    </>
  );
};

export default ProductContainer;
