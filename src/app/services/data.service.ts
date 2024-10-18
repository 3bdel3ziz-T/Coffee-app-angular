import { Injectable } from '@angular/core';
import { CoffeeBeans, CoffeeCup, CurrencySign, Item } from '../models/types/coffee';
import { Amounts } from '../models/types/size';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _coffeeData: CoffeeCup[];
  private _beansData: CoffeeBeans[];
  constructor() {
    this._coffeeData = [
      {
        id: 'C1',
        name: 'Americano',
        description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'americano_pic_1',
        imageLink_portrait: 'americano_pic_1',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]

          }
        }
        ,

        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C2',
        name: 'Americano',
        description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'americano_pic_2',
        imageLink_portrait: 'americano_pic_2',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C3',
        name: 'Americano',
        description: `The Americano is another popular type of coffee drink, and it's very easy to make! It's just espresso with hot water dripping over it. The name came about during World War II when European baristas added water to their espresso drinks for the American soldiers stationed there. The resulting drink had a smoother, less concentrated flavour than espresso and thus the Americano was born.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'americano_pic_3',
        imageLink_portrait: 'americano_pic_3',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C4',
        name: 'Black Coffee',
        description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'black_coffee_pic_1',
        imageLink_portrait: 'black_coffee_pic_1',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C5',
        name: 'Black Coffee',
        description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'black_coffee_pic_2',
        imageLink_portrait: 'black_coffee_pic_2',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C6',
        name: 'Black Coffee',
        description: `Black coffee is arguably the most common type of coffee drink out there. Its popularity can be mainly attributed to how easy it is to make this beverage, be it drip, pour-over, French press, or anything else. Black coffee is usually served with no add-ins.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'black_coffee_pic_3',
        imageLink_portrait: 'black_coffee_pic_3',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C7',
        name: 'Cappuccino',
        description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'cappuccino_pic_1',
        imageLink_portrait: 'cappuccino_pic_1',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C8',
        name: 'Cappuccino',
        description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'cappuccino_pic_2',
        imageLink_portrait: 'cappuccino_pic_2',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C9',
        name: 'Cappuccino',
        description: `Cappuccinos are a classic Italian type of coffee drink made of espresso, steamed milk, and thick foam in equal parts. The name comes from the resemblance to the hoods worn by Capuchin monks. Making cappuccino is relatively easy and can be done at home too if you know how to make espresso.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'cappuccino_pic_3',
        imageLink_portrait: 'cappuccino_pic_3',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C10',
        name: 'Espresso',
        description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'espresso_pic_1',
        imageLink_portrait: 'espresso_pic_1',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C11',
        name: 'Espresso',
        description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'espresso_pic_2',
        imageLink_portrait: 'espresso_pic_2',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C12',
        name: 'Espresso',
        description: `Espresso is made by forcing nearly boiling water through finely-ground coffee beans, which results in a concentrated, syrup-like coffee drink. This is the base for many Italian beverages in coffee shops. When compared to regular brewed coffee, espresso is much stronger than the other types of coffee drinks. Espressos are enjoyed in shots where a single shot is one ounce and a long (single and double) shot is two ounces in amount, respectively.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'espresso_pic_3',
        imageLink_portrait: 'espresso_pic_3',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C13',
        name: 'Latte',
        description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'latte_pic_1',
        imageLink_portrait: 'latte_pic_1',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C14',
        name: 'Latte',
        description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'latte_pic_2',
        imageLink_portrait: 'latte_pic_2',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C15',
        name: 'Latte',
        description: `A latte is an espresso with steamed milk and a dollop of milk foam on top. This beverage is more prevalent in America than other coffee drinks like cappuccinos because it contains less foam, making it smoother and gentler for those with sensitive palettes. And if you want to spice up your latte, add some flavouring syrup. To make an iced version of this drink, simply pour espresso and steamed milk over ice cubes.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'latte_pic_3',
        imageLink_portrait: 'latte_pic_3',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C16',
        name: 'Macchiato',
        description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
        roasted: 'Medium Roasted',
        imageLink_square: 'macchiato_pic_1',
        imageLink_portrait: 'macchiato_pic_1',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C17',
        name: 'Macchiato',
        description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
        roasted: 'Medium Roasted',
        imageLink_square: 'macchiato_pic_2',
        imageLink_portrait: 'macchiato_pic_2',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
      {
        id: 'C18',
        name: 'Macchiato',
        description: `The word "macchiato" means spotted, so a macchiato espresso is an espresso with a splash of milk. Most coffee shops will top off this type of coffee drink with some foamed milk instead of just steamed milk for what's known as a traditional macchiato. `,
        roasted: 'Medium Roasted',
        imageLink_square: 'macchiato_pic_3',
        imageLink_portrait: 'macchiato_pic_3',
        ingredients: 'Milk',
        special_ingredient: 'With Steamed Milk',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: "S",
                price: "1.38"
              },
              {
                size: "M",
                price: "3.15"
              },
              {
                size: "L",
                price: "4.29"
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Coffee',
      },
    ];

    this._beansData = [
      {
        id: 'B1',
        name: 'Robusta Beans',
        description: `Robusta beans are larger and more rounded than the other bean varieties. These plants typically grow much larger than Arabica plants, measuring between 15 and 20 feet. Robusta beans are typically considered to be hardier because they can grow at lower altitudes and resist diseases. But recent research suggests that they don’t handle heat as well as was previously thought.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'robusta_coffee_beans',
        imageLink_portrait: 'robusta_coffee_beans',
        ingredients: 'Africa',
        special_ingredient: 'From Africa',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: `${Amounts.S}gm`,
                price: '5.50',
              },
              {
                size: `${Amounts.M}gm`,
                price: '10.50',
              },
              {
                size: `${Amounts.L}gm`,
                price: '18.50',
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Bean',
      },
      {
        id: 'B2',
        name: 'Arabica Beans',
        description: `Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! The name Arabica likely comes from the beans’ popularity in 7th-century Arabia (present-day Yemen).`,
        roasted: 'Medium Roasted',
        imageLink_square: 'arabica_coffee_beans',
        imageLink_portrait: 'arabica_coffee_beans',
        ingredients: 'Africa',
        special_ingredient: 'From Africa',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: `${Amounts.S}gm`,
                price: '5.50',
              },
              {
                size: `${Amounts.M}gm`,
                price: '10.50',
              },
              {
                size: `${Amounts.L}gm`,
                price: '18.50',
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Bean',
      },
      {
        id: 'B3',
        name: 'Liberica Beans',
        description: `Native to central and western Africa – specifically Liberia, hence its name – Coffea liberica is prized for its piquant floral aroma and bold, smoky flavor profile. Growing from a much larger plant than Arabica or Robusta, most Liberica cherries tend to be irregular in shape and closer to Robusta in size and general appearance. It’s also tolerant of hot, humid climates and does well at low altitude. `,
        roasted: 'Medium Roasted',
        imageLink_square: 'liberica_coffee_beans',
        imageLink_portrait: 'liberica_coffee_beans',
        ingredients: 'Malaysia',
        special_ingredient: 'From Malaysia',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: `${Amounts.S}gm`,
                price: '5.50',
              },
              {
                size: `${Amounts.M}gm`,
                price: '10.50',
              },
              {
                size: `${Amounts.L}gm`,
                price: '18.50',
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Bean',
      },
      {
        id: 'B4',
        name: 'Excelsa Beans',
        description: `Excelsa beans grow almost entirely in Southeast Asia, and they’re shaped somewhat like Liberica beans — elongated ovals. These beans grow on large 20 to 30-foot coffee plants at medium altitudes. In terms of flavor, Excelsa beans are pretty unique. They combine light roast traits like tart notes and fruity flavors with flavors that are more reminiscent of dark roasts.`,
        roasted: 'Medium Roasted',
        imageLink_square: 'excelsa_coffee_beans',
        imageLink_portrait: 'excelsa_coffee_beans',
        ingredients: 'Malaysia',
        special_ingredient: 'From Malaysia',
        price: {
          "USD": {
            currencySign: CurrencySign["USD"],
            sizes: [
              {
                size: `${Amounts.S}gm`,
                price: '5.50',
              },
              {
                size: `${Amounts.M}gm`,
                price: '10.50',
              },
              {
                size: `${Amounts.L}gm`,
                price: '18.50',
              }
            ]
          }
        },
        average_rating: 4.7,
        ratings_count: '6,879',
        isFavorite: false,
        type: 'Bean',
      },
    ];
  }
  createImgLink(item: Item): void {
    const containerPath: string = './assets/coffee_assets';
    let imageName_square: string = item.imageLink_square.toLowerCase(),
      imageName_portrait: string = item.imageLink_portrait.toLowerCase();
    let fileName: string;
    if (
      item.id.startsWith('C') && item.name.includes(' ')) {
      fileName = item.name.toLowerCase().split(' ').join('_');
    } else if (
      item.id.startsWith('B') && item.name.includes(' ')) {
      fileName = item.name.toLowerCase().split(' ').join('_coffee_');
    } else {
      fileName = item.name.toLowerCase();
    }
    if (item.id.startsWith('C')) {
      item.imageLink_square = `${containerPath}/${fileName}/square/${imageName_square}_square.png`
      item.imageLink_portrait = `${containerPath}/${fileName}/portrait/${imageName_portrait}_portrait.png`
    } else {
      item.imageLink_square = `${containerPath}/${fileName}/${imageName_square}_square.png`
      item.imageLink_portrait = `${containerPath}/${fileName}/${imageName_portrait}_portrait.png`
    }

  }
  get getCoffeeData(): CoffeeCup[] {
    this._coffeeData.forEach((e: CoffeeCup) => {

      return this.createImgLink(e)

    })
    return this._coffeeData
  }
  
  get getBeansData(): CoffeeBeans[] {
    this._beansData.forEach((e: CoffeeBeans) => {

      return this.createImgLink(e)

    })
    return this._beansData
  }
}
