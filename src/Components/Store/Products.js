import React from 'react'
import guitar1 from '../../images/guitar1.png'
import guitar2 from '../../images/guitar2.png'
import guitar3 from '../../images/guitar3.png'
import guitar4 from '../../images/guitar4.png'
import guitar5 from '../../images/guitar5.png'
import guitar6 from '../../images/guitar6.png'
import guitar7 from '../../images/guitar7.png'
import guitar8 from '../../images/guitar8.png'

function Products() {

    const inventory = [
        {
          item: 'Fender Custom Shop Sigil Collection Game of Thrones House Targaryen Stratocaster Dragonglass Black',
          price: '$35,000.00',
          description: 'A smoky, refined twist on a classic, the Sigil Collection Game of Thrones House Targaryen Stratocaster pays tribute to the dynasty who left their mark on the history of the Seven Kingdoms. This bespoke guitar was painstakingly crafted by Principal Master Builder, Ron Thorn, who created the unique “dragon scaled” body in homage to House Targaryen. Crafted to order, this guitar could only have come from Westeros—and the Dream Factory, the Fender Custom Shop.',
          img: guitar1,
          id: 1
        },
        {
          item: 'Fender Custom Shop Limited-Edition George Harrison Rocky Stratocaster Electric Guitar Custom Artwork',
          price: '$25,000.00',
          description: 'One of the most iconic guitars in George Harrisons history would have to be his hand-painted "Rocky" Strat. Harrison had wanted a Strat for years, but they were rare in the UK, and it wasnt until 1965 that he was finally able to get one. It soon became a favorite, appearing on Help!, Rubber Soul, Revolver, and, with Harrisons hand-painted psychedelic additions, on film in Magical Mystery Tour. So when Fender Custom Shop Masterbuilder Paul Waller had the chance to craft a faithful recreation of "Rocky," it was a thrill and a challenge. Waller carefully measured every aspect of the guitar from the cosmetics of Harrisons DIY paint job and decal work to the original "Grimwoods" music store decal on the back of the headstock. He also painstakingly measured the pickups, wiring and asymmetrical C profile neck. The end result of care and meticulous craft is an exacting tribute to one of rocks great guitarists and one of his favorite instruments.',
          img: guitar2,
          id: 2
        },
        {
          item: 'PRS Private Stock McCarty 594 with Curly Maple Top Electric Guitar Aqua Violet',
          price: '$11,825.00',
          description: 'Nitro-finished curly maple top and mahogany back',
          img: guitar3,
          id: 3
        },
        {
          item: 'Gibson Custom Tom Murphy 1959 Les Paul Standard Electric Guitar  Aged Cherry Burst',
          price: '$11,499.00',
          description: 'Over the years, Guitar Centers Platinum Rooms have honed their reputation of having a selection of some of the worlds most desirable and exclusive gear. The Platinum Guitar Collection features a carefully considered selection of stunning instruments from the worlds top builders, whether from the custom shops of major industry powerhouses or from the coterie of top-flight small luthiers. Packed with limited-edition, special-run and one-off unique guitars, the Platinum Collection is your source for the worlds finest acoustic and electric guitars and basses. Call today to make a connection to your dreams.',
          img: guitar4,
          id: 4
        },
        {
          item: 'Fender American Performer Stratocaster Rosewood Fingerboard Electric Guitar  Aged White',
          price: '$1,199.99',
          description: 'With the introduction of the American Performer Strat, Fender brings players a U.S.-made version of a perennial favorite instrument, loaded with stunning finishes, refined electronics and hardware, and a few hidden surprises. These guitars and basses are designed for musicians of any level who seek Made in USA quality and playability at a surprisingly accessible price.',
          img: guitar5,
          id: 5
        },
        {
          item: 'Fender Artist Series Eric Clapton Stratocaster Electric Guitar  Pewter',
          price: '$1,849.99',
          description: 'Experience the peerless Strat style of Slowhand himself with the Eric Clapton Stratocaster, one of our most acclaimed and enduring artist signature models. With classic design and special features that give it exceptional tonal versatility and effortless feel worthy of one of the world’s greatest names in rock and blues, it puts pure Clapton Stratocaster tone and feel straight into your hands.',
          img: guitar6,
          id: 6
        },
        {
          item: 'Fender American Professional Telecaster Maple Fingerboard Electric Guitar  Butterscotch Blonde',
          price: '$1,549.99',
          description: 'Fender is guided by one clear, simple directive: make life better for musicians. While the original Telecaster certainly did that (and then some), they weren’t content to rest on their laurels. Fenders team of mad scientists examined every component in near-microscopic detail. If they were able to improve it with a new design or modern materials, they did; if it didnt need improvement, they left it alone. When the wood chips and solder fumes settled, what was left was the American Professional Telecaster—everything you need to play your best.',
          img: guitar7,
          id: 7
        },
        {
          item: 'Fender American Ultra Stratocaster HSS Maple Fingerboard Electric Guitar  Arctic Pearl',
          price: '$1,949.99',
          description: 'The Fender American Ultra Series Stratocaster HSS is designed for players who want the most advanced, highest performance Strat ever made. The team spent over two years on intense R&D, analyzing and improving everything on this new flagship line. Made in America in Corona, California, the American Ultra Strat HSS features new noiseless pickups, including a re-voiced Double Tap humbucker, advanced electronics, tapered heel and body contours, an upgraded neck shape, a maple fretboard with rolled edges and new stage-ready finishes. It all adds up to a Stratocaster youll never part with. But don’t let these modern updates fool you. The vibe of the American Ultra Stratocaster HSS is still classic Fender.',
          img: guitar8,
          id: 8
        },
    ]
  return (
    <div className="App">
      <img src={inventory[0].img} />
      <img src={inventory[1].img} />
      <img src={inventory[2].img} />
      <img src={inventory[3].img} />
      <img src={inventory[4].img} />
      <img src={inventory[5].img} />
      <img src={inventory[6].img} />
      <img src={inventory[7].img} />
    </div>
  );
}

export default Products;