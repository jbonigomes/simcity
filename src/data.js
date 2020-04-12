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

export default {
  // RAW MATERIALS
  metal: {
    image: metal,
    type: 'raw',
    deps: {},
  },
  wood: {
    image: wood,
    type: 'raw',
    deps: {},
  },
  plastic: {
    image: plastic,
    type: 'raw',
    deps: {},
  },
  seeds: {
    image: seeds,
    type: 'raw',
    deps: {},
  },
  minerals: {
    image: minerals,
    type: 'raw',
    deps: {},
  },
  chemicals: {
    image: chemicals,
    type: 'raw',
    deps: {},
  },
  textiles: {
    image: textiles,
    type: 'raw',
    deps: {},
  },
  sugarspices: {
    image: sugarspices,
    type: 'raw',
    deps: {},
  },
  glass: {
    image: glass,
    type: 'raw',
    deps: {},
  },
  animalfeed: {
    image: animalfeed,
    type: 'raw',
    deps: {},
  },
  electricalcomponents: {
    image: electricalcomponents,
    type: 'raw',
    deps: {},
  },

  // BUILDING STORE
  nails: {
    image: nails,
    type: 'building',
    deps: {
      metal: 2,
    },
  },
  planks: {
    image: planks,
    type: 'building',
    deps: {
      wood: 2,
    },
  },
  bricks: {
    image: bricks,
    type: 'building',
    deps: {
      minerals: 2,
    },
  },
  cement: {
    image: cement,
    type: 'building',
    deps: {
      minerals: 2,
      chemicals: 1,
    },
  },
  glue: {
    image: glue,
    type: 'building',
    deps: {
      plastic: 1,
      chemicals: 2,
    },
  },
  paintbucket: {
    image: paintbucket,
    type: 'building',
    deps: {
      metal: 2,
      minerals: 1,
      chemicals: 2,
    },
  },

  // HARDWARE STORE
  hammer: {
    image: hammer,
    type: 'hardware',
    deps: {
      metal: 1,
      wood: 1,
    },
  },
  measuringtape: {
    image: measuringtape,
    type: 'hardware',
    deps: {
      metal: 1,
      plastic: 1,
    },
  },
  shovel: {
    image: shovel,
    type: 'hardware',
    deps: {
      metal: 1,
      wood: 1,
      plastic: 1,
    },
  },
  cookingutensils: {
    image: cookingutensils,
    type: 'hardware',
    deps: {
      metal: 2,
      wood: 2,
      plastic: 2,
    },
  },
  ladder: {
    image: ladder,
    type: 'hardware',
    deps: {
      metal: 2,
      planks: 2,
    },
  },
  drill: {
    image: drill,
    type: 'hardware',
    deps: {
      metal: 2,
      plastic: 2,
      electricalcomponents: 1,
    },
  },

  // FARMERS MARKET
  vegetables: {
    image: vegetables,
    type: 'farmers',
    deps: {
      seeds: 2,
    },
  },
  flourbags: {
    image: flourbags,
    type: 'farmers',
    deps: {
      seeds: 2,
      textiles: 2,
    },
  },
  fruitberries: {
    image: fruitberries,
    type: 'farmers',
    deps: {
      seeds: 2,
      treesaplings: 1,
    },
  },
  cream: {
    image: cream,
    type: 'farmers',
    deps: {
      animalfeed: 1,
    },
  },
  corn: {
    image: corn,
    type: 'farmers',
    deps: {
      seeds: 4,
      minerals: 1,
    },
  },
  cheese: {
    image: cheese,
    type: 'farmers',
    deps: {
      animalfeed: 2,
    },
  },
  beef: {
    image: beef,
    type: 'farmers',
    deps: {
      animalfeed: 3,
    },
  },

  // FURNITURE STORE
  charis: {
    image: chairs,
    type: 'furniture',
    deps: {
      wood: 2,
      nails: 1,
      hammer: 1,
    },
  },
  tables: {
    image: tables,
    type: 'furniture',
    deps: {
      planks: 1,
      nails: 2,
      hammer: 1,
    },
  },
  hometextiles: {
    image: hometextiles,
    type: 'furniture',
    deps: {
      textiles: 2,
      measuringtape: 1,
    },
  },
  cupboard: {
    image: cupboard,
    type: 'furniture',
    deps: {
      planks: 2,
      glass: 2,
      paintbucket: 1,
    },
  },
  couch: {
    image: couch,
    type: 'furniture',
    deps: {
      textiles: 3,
      drill: 1,
      glue: 1,
    },
  },

  // GARDENING STORE
  grass: {
    image: grass,
    type: 'gardening',
    deps: {
      seeds: 1,
      shovel: 1,
    },
  },
  treesaplings: {
    image: treesaplings,
    type: 'gardening',
    deps: {
      seeds: 2,
      shovel: 1,
    },
  },
  gardenfurniture: {
    image: gardenfurniture,
    type: 'gardening',
    deps: {
      planks: 2,
      plastic: 2,
      textiles: 2,
    },
  },
  firepit: {
    image: firepit,
    type: 'gardening',
    deps: {
      bricks: 2,
      shovel: 1,
      cement: 2,
    },
  },
  lawnmower: {
    image: lawnmower,
    type: 'gardening',
    deps: {
      metal: 3,
      electricalcomponents: 1,
      paintbucket: 1,
    },
  },
  gardengnomes: {
    image: gardengnomes,
    type: 'gardening',
    deps: {
      cement: 2,
      glue: 1,
    },
  },

  // DONUT STORE
  donuts: {
    image: donuts,
    type: 'donut',
    deps: {
      flourbags: 1,
      sugarspices: 1,
    },
  },
  greensmoothie: {
    image: greensmoothie,
    type: 'donut',
    deps: {
      vegetables: 1,
      fruitberries: 1,
    },
  },
  breadroll: {
    image: breadroll,
    type: 'donut',
    deps: {
      flourbags: 2,
      cream: 1,
    },
  },
  cherrycheesecake: {
    image: cherrycheesecake,
    type: 'donut',
    deps: {
      flourbags: 1,
      fruitberries: 1,
      cheese: 1,
    },
  },
  frozenyogurt: {
    image: frozenyogurt,
    type: 'donut',
    deps: {
      fruitberries: 1,
      cream: 1,
      sugarspices: 1,
    },
  },
  coffee: {
    image: coffee,
    type: 'donut',
    deps: {
      seeds: 2,
      sugarspices: 1,
      cream: 1,
    },
  },

  // FASHION STORE
  cap: {
    image: cap,
    type: 'fashion',
    deps: {
      textiles: 2,
      measuringtape: 1,
    },
  },
  shoes: {
    image: shoes,
    type: 'fashion',
    deps: {
      textiles: 2,
      plastic: 1,
      glue: 1,
    },
  },
  sunglasses: {
    image: sunglasses,
    type: 'fashion',
    deps: {
      plastic: 2,
      glass: 1,
      chemicals: 1,
    },
  },
  businesssuits: {
    image: businesssuits,
    type: 'fashion',
    deps: {
      textiles: 3,
      measuringtape: 1,
      glue: 1,
    },
  },
  backpack: {
    image: backpack,
    type: 'fashion',
    deps: {
      plastic: 2,
      textiles: 2,
      measuringtape: 1,
    },
  },

  // FAST FOOD STORE
  icecreamsandwich: {
    image: icecreamsandwich,
    type: 'food',
    deps: {
      breadroll: 1,
      cream: 1,
    },
  },
  pizza: {
    image: pizza,
    type: 'food',
    deps: {
      flourbags: 1,
      cheese: 1,
      beef: 1,
    },
  },
  burgers: {
    image: burgers,
    type: 'food',
    deps: {
      beef: 1,
      breadroll: 1,
      bbqgrill: 1,
    },
  },
  cheesefries: {
    image: cheesefries,
    type: 'food',
    deps: {
      vegetables: 1,
      cheese: 1,
    },
  },
  lemonadebottles: {
    image: lemonadebottles,
    type: 'food',
    deps: {
      sugarspices: 2,
      glass: 2,
      fruitberries: 1,
    },
  },
  popcorn: {
    image: popcorn,
    type: 'food',
    deps: {
      corn: 2,
      microwaveoven: 1,
    },
  },

  // HOME STORE
  bbqgrill: {
    image: bbqgrill,
    type: 'home',
    deps: {
      metal: 3,
      cookingutensils: 1,
    },
  },
  refrigerator: {
    image: refrigerator,
    type: 'home',
    deps: {
      plastic: 2,
      chemicals: 2,
      electricalcomponents: 2,
    },
  },
  lightingsystem: {
    image: lightingsystem,
    type: 'home',
    deps: {
      chemicals: 1,
      glass: 1,
      electricalcomponents: 1,
    },
  },
  tv: {
    image: tv,
    type: 'home',
    deps: {
      plastic: 2,
      glass: 2,
      electricalcomponents: 2,
    },
  },
  microwaveoven: {
    image: microwaveoven,
    type: 'home',
    deps: {
      metal: 4,
      glass: 1,
      electricalcomponents: 1,
    },
  },

  // PARIS
  baguette: {
    image: baguette,
    type: 'paris',
    deps: {},
  },
  parisshirt: {
    image: parisshirt,
    type: 'paris',
    deps: {},
  },
  parisbag: {
    image: parisbag,
    type: 'paris',
    deps: {},
  },
}
