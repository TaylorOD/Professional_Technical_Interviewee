// Our e-comerce platform wants to create gift "bundles" at different price-points for an upcoming holiday sales season.

// We want to promote several price points that you will be given as a list of test cases.

// Our marketing team wants to know what kinds of items we can offer in each bundle.


// Constraints/Hints:
// - must use 100% of the money amount (ie, $10 target must spend exactly $10)
// - you can add any item many times in the bundle

// Inputs:
// - $0 < money values <= $100
// - 1 < number of catalog items <= 100
// - catalog names/prices are unique to each other
// - don't worry about tax/shipping

// Part One:
// Write a method "make_bundle" that takes a target amount, and return a list of strings indicating the names of items on the menu that uses 100% of the money.

// Example:
// menu:
// $4 fancy pen
// $3 comic book
// $2 bag
// We want to spend exactly $10

// make_bundle(10.00)
// ... would return ['fancy pen', 'comic book', 'comic book']

// with the example catalog given below:

// make_bundle(5.00)
// ... could return one of the following lists:
// ['coffee', 'coffee', 'toast']
// ['cheese', 'cheese', 'cheese', 'cheese']

// The order of the items is not important

// Questions:
// alwasys solution? Array of strings if found, or empty array
// Always have more than 1 item, will probably buy an item more than one time - For these test cases

let primary_menu = {
    'novel': 6.50,
    'fancy pen': 4.25,
    'water bottle': 17.95,
    'cheap mug': 5.35,
    'headphones': 31.25,
    'fuzzy socks': 6.00,
    'fitness tracker': 129.95,
    'plastic keychain': 1.50,
}
let test_cases = [10.00, 15.00, 25.00, 29.00, 49.00, 50.00, 99.00, 199.00]

// create function takes in object, target/dollars to spend
  // let = dollarsSpend
  // create resultArray - itemsPurchased as empty array
  // possibleBundle = []
  // for loop
    // buy element if dollarsSpent allows - push to itemsPurchased and add value to dollars Spent - if dollardSpent === target break
      // for loop that runs same check as above
    // Else if (continue through loop)
      // buy element if dollarsSpent allows - push to itemsPurchased and add value to dollars Spent
      // for loop that runs same check as above
    // else remove last purchased item
    //
    // if dollardSpent === target return itemsPurchased
    // possibleBundle into itemsPurchased

  // return itemsPurchased
//
/*

fn (catalog target)
  if money is 0
    stop because done
  loop over catalog
    skip item if too expensive
    buy item
    result = recursion (catalog, target - price)
    if that worked - use result
      stop, done
    put item back
  that didnt work, stop, not done



*/

const bundler = (menu, target) => {
  let dollarsSpent = 0
  let results = []
  let possibleBundle = []

  let menuNames = Object.keys(menu)

  for (let index = 0; index < menuNames.length; index += 1) {
    while (menu[menuNames[index]] <= target - dollarsSpent) {
      possibleBundle.push(menuNames[index])
      dollarsSpent += menu[menuNames[index]]
    } else if move to next item
    else remove last item
  }
  if (dollarsSpent === target) {
    result = [...possibleBundle]
  }
  return results
}






















// Part Two:

// Refactor your first algorithm to find the shortest list of food items (by total count of items) that spends the full gift card amount.

// smallest quantities / answers: (your output does not need to look like this)

// $10: 3 items: {'fancy pen': 2, 'plastic keychain':1}
// $15: 3 items: {'fancy pen': 2, 'novel': 1}
// $25: 4 items: {'fuzzy socks': 2, 'novel': 2}
// $29: 6 items: {'novel': 4, 'plastic keychain': 2}
// $49: 5 items: {'fancy pen': 1, 'fuzzy socks': 2, 'headphones': 1, 'plastic keychain': 1}
// $50: 5 items: {'fancy pen': 1, 'headphones': 1, 'novel': 2, 'plastic keychain': 1}
// $99: 8 items: {'fuzzy socks': 5, 'headphones': 2, 'novel': 1}
// $199: 7 items: {'cheap mug': 1, 'fitness tracker': 1, 'headphones': 1, 'novel': 2, 'plastic keychain': 1, 'water bottle': 1}
