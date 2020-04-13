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
    key: 'metal',
    image: metal,
    type: 'raw',
    deps: [],
  },
  {
    key: 'wood',
    image: wood,
    type: 'raw',
    deps: [],
  },
  {
    key: 'plastic',
    image: plastic,
    type: 'raw',
    deps: [],
  },
  {
    key: 'seeds',
    image: seeds,
    type: 'raw',
    deps: [],
  },
  {
    key: 'minerals',
    image: minerals,
    type: 'raw',
    deps: [],
  },
  {
    key: 'chemicals',
    image: chemicals,
    type: 'raw',
    deps: [],
  },
  {
    key: 'textiles',
    image: textiles,
    type: 'raw',
    deps: [],
  },
  {
    key: 'sugarspices',
    image: sugarspices,
    type: 'raw',
    deps: [],
  },
  {
    key: 'glass',
    image: glass,
    type: 'raw',
    deps: [],
  },
  {
    key: 'animalfeed',
    image: animalfeed,
    type: 'raw',
    deps: [],
  },
  {
    key: 'electricalcomponents',
    image: electricalcomponents,
    type: 'raw',
    deps: [],
  },

  // BUILDING STORE
  {
    key: 'nails',
    image: nails,
    type: 'building',
    deps: [
      metal,
    ],
  },
  {
    key: 'planks',
    image: planks,
    type: 'building',
    deps: [
      wood,
    ],
  },
  {
    key: 'bricks',
    image: bricks,
    type: 'building',
    deps: [
      minerals,
    ],
  },
  {
    key: 'cement',
    image: cement,
    type: 'building',
    deps: [
      minerals,
      chemicals,
    ],
  },
  {
    key: 'glue',
    image: glue,
    type: 'building',
    deps: [
      plastic,
      chemicals,
    ],
  },
  {
    key: 'paintbucket',
    image: paintbucket,
    type: 'building',
    deps: [
      metal,
      minerals,
      chemicals,
    ],
  },

  // HARDWARE STORE
  {
    key: 'hammer',
    image: hammer,
    type: 'hardware',
    deps: [
      metal,
      wood,
    ],
  },
  {
    key: 'measuringtape',
    image: measuringtape,
    type: 'hardware',
    deps: [
      metal,
      plastic,
    ],
  },
  {
    key: 'shovel',
    image: shovel,
    type: 'hardware',
    deps: [
      metal,
      wood,
      plastic,
    ],
  },
  {
    key: 'cookingutensils',
    image: cookingutensils,
    type: 'hardware',
    deps: [
      metal,
      wood,
      plastic,
    ],
  },
  {
    key: 'ladder',
    image: ladder,
    type: 'hardware',
    deps: [
      metal,
      planks,
      // Deep deps
      wood,
    ],
  },
  {
    key: 'drill',
    image: drill,
    type: 'hardware',
    deps: [
      metal,
      plastic,
      electricalcomponents,
    ],
  },

  // FARMERS MARKET
  {
    key: 'vegetables',
    image: vegetables,
    type: 'farmers',
    deps: [
      seeds,
    ],
  },
  {
    key: 'flourbags',
    image: flourbags,
    type: 'farmers',
    deps: [
      seeds,
      textiles,
    ],
  },
  {
    key: 'fruitberries',
    image: fruitberries,
    type: 'farmers',
    deps: [
      seeds,
      treesaplings,
      // Deep deps
      shovel,
      metal,
      wood,
      plastic,
    ],
  },
  {
    key: 'cream',
    image: cream,
    type: 'farmers',
    deps: [
      animalfeed,
    ],
  },
  {
    key: 'corn',
    image: corn,
    type: 'farmers',
    deps: [
      seeds,
      minerals,
    ],
  },
  {
    key: 'cheese',
    image: cheese,
    type: 'farmers',
    deps: [
      animalfeed,
    ],
  },
  {
    key: 'beef',
    image: beef,
    type: 'farmers',
    deps: [
      animalfeed,
    ],
  },

  // FURNITURE STORE
  {
    key: 'charis',
    image: chairs,
    type: 'furniture',
    deps: [
      wood,
      nails,
      hammer,
      // Deep deps
      metal,
      wood,
    ],
  },
  {
    key: 'tables',
    image: tables,
    type: 'furniture',
    deps: [
      planks,
      nails,
      hammer,
      // Deep deps
      wood,
      metal,
    ],
  },
  {
    key: 'hometextiles',
    image: hometextiles,
    type: 'furniture',
    deps: [
      textiles,
      measuringtape,
      // Deep deps
      metal,
      plastic,
    ],
  },
  {
    key: 'cupboard',
    image: cupboard,
    type: 'furniture',
    deps: [
      planks,
      glass,
      paintbucket,
      // Deep deps
      wood,
      metal,
      minerals,
      chemicals,
    ],
  },
  {
    key: 'couch',
    image: couch,
    type: 'furniture',
    deps: [
      textiles,
      drill,
      glue,
      // Deep deps
      metal,
      plastic,
      chemicals,
      electricalcomponents,
    ],
  },

  // GARDENING STORE
  {
    key: 'grass',
    image: grass,
    type: 'gardening',
    deps: [
      seeds,
      shovel,
      // Deep deps
      wood,
      metal,
      plastic,
    ],
  },
  {
    key: 'treesaplings',
    image: treesaplings,
    type: 'gardening',
    deps: [
      seeds,
      shovel,
      // Deep deps
      wood,
      metal,
      plastic,
    ],
  },
  {
    key: 'gardenfurniture',
    image: gardenfurniture,
    type: 'gardening',
    deps: [
      planks,
      plastic,
      textiles,
      // Deep deps
      wood,
    ],
  },
  {
    key: 'firepit',
    image: firepit,
    type: 'gardening',
    deps: [
      bricks,
      shovel,
      cement,
      // Deep deps
      minerals,
      wood,
      metal,
      plastic,
      chemicals,
    ],
  },
  {
    key: 'lawnmower',
    image: lawnmower,
    type: 'gardening',
    deps: [
      metal,
      electricalcomponents,
      paintbucket,
      // Deep deps
      minerals,
      chemicals,
    ],
  },
  {
    key: 'gardengnomes',
    image: gardengnomes,
    type: 'gardening',
    deps: [
      cement,
      glue,
      // Deep deps
      minerals,
      chemicals,
      plastic,
    ],
  },

  // DONUT STORE
  {
    key: 'donuts',
    image: donuts,
    type: 'donut',
    deps: [
      flourbags,
      sugarspices,
      // Deep deps
      seeds,
      textiles,
    ],
  },
  {
    key: 'greensmoothie',
    image: greensmoothie,
    type: 'donut',
    deps: [
      vegetables,
      fruitberries,
      // Deep deps
      seeds,
      treesaplings,
      shovel,
      metal,
      wood,
      plastic,
    ],
  },
  {
    key: 'breadroll',
    image: breadroll,
    type: 'donut',
    deps: [
      flourbags,
      cream,
      // Deep deps
      seeds,
      textiles,
      animalfeed,
    ],
  },
  {
    key: 'cherrycheesecake',
    image: cherrycheesecake,
    type: 'donut',
    deps: [
      flourbags,
      fruitberries,
      cheese,
      // Deep deps
      seeds,
      textiles,
      treesaplings,
      shovel,
      metal,
      wood,
      plastic,
      animalfeed,
    ],
  },
  {
    key: 'frozenyogurt',
    image: frozenyogurt,
    type: 'donut',
    deps: [
      fruitberries,
      cream,
      sugarspices,
      // Deep deps
      seeds,
      treesaplings,
      shovel,
      metal,
      wood,
      plastic,
      animalfeed,
    ],
  },
  {
    key: 'coffee',
    image: coffee,
    type: 'donut',
    deps: [
      seeds,
      sugarspices,
      cream,
      // Deep deps
      animalfeed,
    ],
  },

  // FASHION STORE
  {
    key: 'cap',
    image: cap,
    type: 'fashion',
    deps: [
      textiles,
      measuringtape,
      // Deep deps
      metal,
      plastic,
    ],
  },
  {
    key: 'shoes',
    image: shoes,
    type: 'fashion',
    deps: [
      textiles,
      plastic,
      glue,
      // Deep deps
      plastic,
      chemicals,
    ],
  },
  {
    key: 'sunglasses',
    image: sunglasses,
    type: 'fashion',
    deps: [
      plastic,
      glass,
      chemicals,
    ],
  },
  {
    key: 'businesssuits',
    image: businesssuits,
    type: 'fashion',
    deps: [
      textiles,
      measuringtape,
      glue,
      // Deep deps
      metal,
      plastic,
      chemicals,
    ],
  },
  {
    key: 'backpack',
    image: backpack,
    type: 'fashion',
    deps: [
      plastic,
      textiles,
      measuringtape,
      // Deep deps
      metal,
      plastic,
    ],
  },

  // FAST FOOD STORE
  {
    key: 'icecreamsandwich',
    image: icecreamsandwich,
    type: 'food',
    deps: [
      breadroll,
      cream,
      // Deep deps
      seeds,
      textiles,
      animalfeed,
    ],
  },
  {
    key: 'pizza',
    image: pizza,
    type: 'food',
    deps: [
      flourbags,
      cheese,
      beef,
      // Deep deps
      seeds,
      textiles,
      animalfeed,
    ],
  },
  {
    key: 'burgers',
    image: burgers,
    type: 'food',
    deps: [
      beef,
      breadroll,
      bbqgrill,
      // Deep deps
      animalfeed,
      flourbags,
      cream,
      seeds,
      textiles,
      metal,
      cookingutensils,
      wood,
      plastic,
    ],
  },
  {
    key: 'cheesefries',
    image: cheesefries,
    type: 'food',
    deps: [
      vegetables,
      cheese,
      // Deep deps
      seeds,
      animalfeed,
    ],
  },
  {
    key: 'lemonadebottles',
    image: lemonadebottles,
    type: 'food',
    deps: [
      sugarspices,
      glass,
      fruitberries,
      // Deep deps
      seeds,
      treesaplings,
      shovel,
      metal,
      wood,
      plastic,
    ],
  },
  {
    key: 'popcorn',
    image: popcorn,
    type: 'food',
    deps: [
      corn,
      microwaveoven,
      // Deep deps
      seeds,
      minerals,
      metal,
      glass,
      electricalcomponents,
    ],
  },

  // HOME STORE
  {
    key: 'bbqgrill',
    image: bbqgrill,
    type: 'home',
    deps: [
      metal,
      cookingutensils,
      // Deep deps
      metal,
      wood,
      plastic,
    ],
  },
  {
    key: 'refrigerator',
    image: refrigerator,
    type: 'home',
    deps: [
      plastic,
      chemicals,
      electricalcomponents,
    ],
  },
  {
    key: 'lightingsystem',
    image: lightingsystem,
    type: 'home',
    deps: [
      chemicals,
      glass,
      electricalcomponents,
    ],
  },
  {
    key: 'tv',
    image: tv,
    type: 'home',
    deps: [
      plastic,
      glass,
      electricalcomponents,
    ],
  },
  {
    key: 'microwaveoven',
    image: microwaveoven,
    type: 'home',
    deps: [
      metal,
      glass,
      electricalcomponents,
    ],
  },

  // PARIS
  {
    key: 'baguette',
    image: baguette,
    type: 'paris',
    deps: [],
  },
  {
    key: 'parisshirt',
    image: parisshirt,
    type: 'paris',
    deps: [],
  },
  {
    key: 'parisbag',
    image: parisbag,
    type: 'paris',
    deps: [],
  },
]
