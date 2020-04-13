import animalfeed from '../images/animalfeed.png'
import backpack from '../images/backpack.png'
import baguette from '../images/baguette.png'
import bbqgrill from '../images/bbqgrill.png'
import beef from '../images/beef.png'
import breadroll from '../images/breadroll.png'
import bricks from '../images/bricks.png'
import burgers from '../images/burgers.png'
import businesssuits from '../images/businesssuits.png'
import cap from '../images/cap.png'
import cement from '../images/cement.png'
import chairs from '../images/chairs.png'
import cheese from '../images/cheese.png'
import cheesefries from '../images/cheesefries.png'
import chemicals from '../images/chemicals.png'
import cherrycheesecake from '../images/cherrycheesecake.png'
import coffee from '../images/coffee.png'
import cookingutensils from '../images/cookingutensils.png'
import corn from '../images/corn.png'
import couch from '../images/couch.png'
import cream from '../images/cream.png'
import cupboard from '../images/cupboard.png'
import donuts from '../images/donuts.png'
import drill from '../images/drill.png'
import electricalcomponents from '../images/electricalcomponents.png'
import firepit from '../images/firepit.png'
import flourbags from '../images/flourbags.png'
import frozenyogurt from '../images/frozenyogurt.png'
import fruitberries from '../images/fruitberries.png'
import gardenfurniture from '../images/gardenfurniture.png'
import gardengnomes from '../images/gardengnomes.png'
import glass from '../images/glass.png'
import glue from '../images/glue.png'
import grass from '../images/grass.png'
import greensmoothie from '../images/greensmoothie.png'
import hammer from '../images/hammer.png'
import hometextiles from '../images/hometextiles.png'
import icecreamsandwich from '../images/icecreamsandwich.png'
import ladder from '../images/ladder.png'
import lawnmower from '../images/lawnmower.png'
import lemonadebottles from '../images/lemonadebottles.png'
import lightingsystem from '../images/lightingsystem.png'
import measuringtape from '../images/measuringtape.png'
import metal from '../images/metal.png'
import microwaveoven from '../images/microwaveoven.png'
import minerals from '../images/minerals.png'
import nails from '../images/nails.png'
import paintbucket from '../images/paintbucket.png'
import parisbag from '../images/parisbag.png'
import parisshirt from '../images/parisshirt.png'
import pizza from '../images/pizza.png'
import planks from '../images/planks.png'
import plastic from '../images/plastic.png'
import popcorn from '../images/popcorn.png'
import refrigerator from '../images/refrigerator.png'
import seeds from '../images/seeds.png'
import shoes from '../images/shoes.png'
import shovel from '../images/shovel.png'
import sugarspices from '../images/sugarspices.png'
import sunglasses from '../images/sunglasses.png'
import tables from '../images/tables.png'
import textiles from '../images/textiles.png'
import treesaplings from '../images/treesaplings.png'
import tv from '../images/tv.png'
import vegetables from '../images/vegetables.png'
import wood from '../images/wood.png'

export default [
  // RAW MATERIALS
  {
    image: metal,
    deps: [],
  },
  {
    image: wood,
    deps: [],
  },
  {
    image: plastic,
    deps: [],
  },
  {
    image: seeds,
    deps: [],
  },
  {
    image: minerals,
    deps: [],
  },
  {
    image: chemicals,
    deps: [],
  },
  {
    image: textiles,
    deps: [],
  },
  {
    image: sugarspices,
    deps: [],
  },
  {
    image: glass,
    deps: [],
  },
  {
    image: animalfeed,
    deps: [],
  },
  {
    image: electricalcomponents,
    deps: [],
  },

  // BUILDING STORE
  {
    image: nails,
    deps: [
      metal,
      metal,
    ],
  },
  {
    image: planks,
    deps: [
      wood,
      wood,
    ],
  },
  {
    image: bricks,
    deps: [
      minerals,
      minerals,
    ],
  },
  {
    image: cement,
    deps: [
      minerals,
      minerals,
      chemicals,
    ],
  },
  {
    image: glue,
    deps: [
      plastic,
      chemicals,
      chemicals,
    ],
  },
  {
    image: paintbucket,
    deps: [
      metal,
      metal,
      minerals,
      chemicals,
      chemicals,
    ],
  },

  // HARDWARE STORE
  {
    image: hammer,
    deps: [
      metal,
      wood,
    ],
  },
  {
    image: measuringtape,
    deps: [
      metal,
      plastic,
    ],
  },
  {
    image: shovel,
    deps: [
      metal,
      wood,
      plastic,
    ],
  },
  {
    image: cookingutensils,
    deps: [
      metal,
      metal,
      wood,
      wood,
      plastic,
      plastic,
    ],
  },
  {
    image: ladder,
    deps: [
      metal,
      metal,
      planks,
      planks,
    ],
  },
  {
    image: drill,
    deps: [
      metal,
      metal,
      plastic,
      plastic,
      electricalcomponents,
    ],
  },

  // FARMERS MARKET
  {
    image: vegetables,
    deps: [
      seeds,
      seeds,
    ],
  },
  {
    image: flourbags,
    deps: [
      seeds,
      seeds,
      textiles,
      textiles,
    ],
  },
  {
    image: fruitberries,
    deps: [
      seeds,
      seeds,
      treesaplings,
    ],
  },
  {
    image: cream,
    deps: [
      animalfeed,
    ],
  },
  {
    image: corn,
    deps: [
      seeds,
      seeds,
      seeds,
      seeds,
      minerals,
    ],
  },
  {
    image: cheese,
    deps: [
      animalfeed,
      animalfeed,
    ],
  },
  {
    image: beef,
    deps: [
      animalfeed,
      animalfeed,
      animalfeed,
    ],
  },

  // FURNITURE STORE
  {
    image: chairs,
    deps: [
      wood,
      wood,
      nails,
      hammer,
    ],
  },
  {
    image: tables,
    deps: [
      planks,
      nails,
      nails,
      hammer,
    ],
  },
  {
    image: hometextiles,
    deps: [
      textiles,
      textiles,
      measuringtape,
    ],
  },
  {
    image: cupboard,
    deps: [
      planks,
      planks,
      glass,
      glass,
      paintbucket,
    ],
  },
  {
    image: couch,
    deps: [
      textiles,
      textiles,
      textiles,
      drill,
      glue,
    ],
  },

  // GARDENING STORE
  {
    image: grass,
    deps: [
      seeds,
      shovel,
    ],
  },
  {
    image: treesaplings,
    deps: [
      seeds,
      seeds,
      shovel,
    ],
  },
  {
    image: gardenfurniture,
    deps: [
      planks,
      planks,
      plastic,
      plastic,
      textiles,
      textiles,
    ],
  },
  {
    image: firepit,
    deps: [
      bricks,
      bricks,
      shovel,
      cement,
      cement,
    ],
  },
  {
    image: lawnmower,
    deps: [
      metal,
      metal,
      metal,
      electricalcomponents,
      paintbucket,
    ],
  },
  {
    image: gardengnomes,
    deps: [
      cement,
      cement,
      glue,
    ],
  },

  // DONUT STORE
  {
    image: donuts,
    deps: [
      flourbags,
      sugarspices,
    ],
  },
  {
    image: greensmoothie,
    deps: [
      vegetables,
      fruitberries,
    ],
  },
  {
    image: breadroll,
    deps: [
      flourbags,
      flourbags,
      cream,
    ],
  },
  {
    image: cherrycheesecake,
    deps: [
      flourbags,
      fruitberries,
      cheese,
    ],
  },
  {
    image: frozenyogurt,
    deps: [
      fruitberries,
      cream,
      sugarspices,
    ],
  },
  {
    image: coffee,
    deps: [
      seeds,
      seeds,
      sugarspices,
      cream,
    ],
  },

  // FASHION STORE
  {
    image: cap,
    deps: [
      textiles,
      textiles,
      measuringtape,
    ],
  },
  {
    image: shoes,
    deps: [
      textiles,
      textiles,
      plastic,
      glue,
    ],
  },
  {
    image: sunglasses,
    deps: [
      plastic,
      plastic,
      glass,
      chemicals,
    ],
  },
  {
    image: businesssuits,
    deps: [
      textiles,
      textiles,
      measuringtape,
      glue,
    ],
  },
  {
    image: backpack,
    deps: [
      plastic,
      plastic,
      textiles,
      textiles,
      measuringtape,
    ],
  },

  // FAST FOOD STORE
  {
    image: icecreamsandwich,
    deps: [
      breadroll,
      cream,
    ],
  },
  {
    image: pizza,
    deps: [
      flourbags,
      cheese,
      beef,
    ],
  },
  {
    image: burgers,
    deps: [
      beef,
      breadroll,
      bbqgrill,
    ],
  },
  {
    image: cheesefries,
    deps: [
      vegetables,
      cheese,
    ],
  },
  {
    image: lemonadebottles,
    deps: [
      sugarspices,
      sugarspices,
      glass,
      glass,
      fruitberries,
    ],
  },
  {
    image: popcorn,
    deps: [
      corn,
      corn,
      microwaveoven,
    ],
  },

  // HOME STORE
  {
    image: bbqgrill,
    deps: [
      metal,
      metal,
      metal,
      cookingutensils,
    ],
  },
  {
    image: refrigerator,
    deps: [
      plastic,
      plastic,
      chemicals,
      chemicals,
      electricalcomponents,
      electricalcomponents,
    ],
  },
  {
    image: lightingsystem,
    deps: [
      chemicals,
      glass,
      electricalcomponents,
    ],
  },
  {
    image: tv,
    deps: [
      plastic,
      plastic,
      glass,
      glass,
      electricalcomponents,
      electricalcomponents,
    ],
  },
  {
    image: microwaveoven,
    deps: [
      metal,
      metal,
      metal,
      metal,
      glass,
      electricalcomponents,
    ],
  },

  // PARIS
  {
    image: baguette,
    deps: [],
  },
  {
    image: parisshirt,
    deps: [],
  },
  {
    image: parisbag,
    deps: [],
  },
]
