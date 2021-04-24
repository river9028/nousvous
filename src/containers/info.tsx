import React from 'react';
import { Info } from '../components';

// Object.keys(aEl).map(key => ({name: aEl[key].outerText, href: aEl[key].href, location: $(aEl[1]).context.nextSibling.textContent.slice(2)}))
const Stockists = [
  {
    name: 'Burley Fisher Books',
    href: 'http://www.burleyfisherbooks.com/',
    location: 'London',
  },
  {
    name: 'Colours May Vary',
    href: 'http://www.colours-may-vary.com/',
    location: 'Leeds',
  },
  {
    name: 'Good Press',
    href: 'http://goodpressgallery.co.uk/',
    location: 'Glasgow',
  },
  {
    name: 'House Of Illustration',
    href: 'http://www.houseofillustration.org.uk/',
    location: 'London',
  },
  {
    name: 'ICA',
    href: 'https://www.ica.org.uk/',
    location: 'London',
  },
  {
    name: 'London Centre For Book Arts',
    href: 'http://www.londonbookarts.org/visit',
    location: 'London',
  },
  {
    name: 'Much Ado Books',
    href: 'http://muchadobooks.com/index.php',
    location: 'Alfriston, East Sussex',
  },
  {
    name: 'Nook',
    href: 'http://www.nookshop.co.uk/',
    location: 'London',
  },
  {
    name: 'Phlox Books',
    href: 'https://www.instagram.com/phloxbooks/',
    location: 'London',
  },
  {
    name: 'Resident',
    href: 'http://www.residentstore.co.uk/',
    location: 'Frome',
  },
  {
    name: 'Telling Tales',
    href: 'https://tellingtalesshop.com/',
    location: 'London',
  },
  {
    name: 'Tenderbooks',
    href: 'http://tenderbooks.co.uk/',
    location: 'London',
  },
  {
    name: 'The Tetley',
    href: 'http://thetetley.org/',
    location: 'Leeds',
  },
  {
    name: 'V',
    href: 'http://www.villagebookstore.co.uk/',
    location: 'lage Bookstore',
  },
  {
    name: 'illage Bookstore',
    href: 'http://www.villagebookstore.co.uk/',
    location: 'Leeds',
  },
  {
    name: 'Whitechapel Gallery Bookshop',
    href: 'http://www.whitechapelgallery.org/visit/bookshop/',
    location: 'London',
  },
];

const ProductContainer = () => {
  return (
    <>
      <Info>
        <Info.Group>
          <Info.Text>
            Nous Vous Press was established to provide a platform for new work
            by William Luz, Nicolas Burrows & Jay Cover, exploring a holistic
            and multi-disciplinary practice through image-making, illustration,
            writing and storytelling.
          </Info.Text>
          <Info.Text>
            Our aim is to foster an inquisitive and playful attitude towards
            learning and making through the publication of artists’ books,
            periodicals, short fiction, poetry, children’s books and editions.
          </Info.Text>
          <Info.Text>hello@nousvouspress.xyz</Info.Text>
          <Info.Heading>Delivery:</Info.Heading>
          <Info.Text>
            Parcels are shipped every Friday. Please allow up to two weeks to
            receive your purchase (longer for outside UK).
          </Info.Text>
        </Info.Group>

        <Info.Group>
          <Info.Heading>Stockists:</Info.Heading>
          {Stockists.map((store) => (
            <Info.TextLink>
              <a href={store.href} target='blank'>
                {store.name}
              </a>
              , {store.location}
            </Info.TextLink>
          ))}

          <Info.Heading>Mailing List:</Info.Heading>
          <Info.Input placeholder='Email Adress' />
          <Info.Button>Subscribe</Info.Button>
        </Info.Group>
      </Info>
    </>
  );
};

export default ProductContainer;
