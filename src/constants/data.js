const categories = [
  {
    name: 'All',
  },
  {
    name: 'Meat',
  },
  {
    name: 'Chicken',
  },
  {
    name: 'Vegetarian',
  },
  {
    name: 'Hot',
  },
]

 const list = [
  { name: 'Best Sellers', sortProperty: 'rating' },
  { name: 'Price: Lowest First', sortProperty: '-price' },
  { name: 'Price: Highest First', sortProperty: 'price' },
]

export default { categories, list }
