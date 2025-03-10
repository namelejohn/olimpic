import {Event, Filter, Product} from '../types';

export const products: Product[] = [
  // Pizza
  {
    id: '1',
    name: 'Margherita Pizza',
    image:
      'https://avatars.mds.yandex.net/i?id=091b74c2e5e8d21615712e0bf618c9f1_l-12461673-images-thumbs&n=13',
    price: 18.0,
    weight: '400 g',
    category: 'Pizza',
    description:
      'Classic pizza with fresh tomato sauce, mozzarella, and basil.',
    discount: 1.5,
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    image:
      'https://avatars.mds.yandex.net/i?id=002d7aeca54ee888e276704a270e32e3c3519f1a-10311822-images-thumbs&n=13',
    price: 20.0,
    weight: '450 g',
    category: 'Pizza',
    description:
      'Crispy pizza topped with spicy pepperoni and mozzarella cheese.',
    discount: 2.0,
  },
  {
    id: '3',
    name: 'BBQ Chicken Pizza',
    image:
      'https://i.pinimg.com/736x/f4/cf/e5/f4cfe5b586298c0d1d1db8fa929f7e2b.jpg',
    price: 22.0,
    weight: '500 g',
    category: 'Pizza',
    description: 'Pizza with grilled chicken, BBQ sauce, and red onions.',
    discount: 1.5,
  },
  {
    id: '4',
    name: 'Veggie Supreme Pizza',
    image:
      'https://avatars.mds.yandex.net/i?id=dbc525d191d0761727d142634be8c545af534776-8497038-images-thumbs&n=13',
    price: 19.0,
    weight: '450 g',
    category: 'Pizza',
    description: 'Loaded with bell peppers, olives, onions, and mushrooms.',
    discount: 2.0,
  },
  {
    id: '5',
    name: 'Hawaiian Pizza',
    image:
      'https://avatars.mds.yandex.net/i?id=7b34f46fa72e475aceeae18fbf636eef8f8a4928dab693e0-12373000-images-thumbs&n=13',
    price: 21.0,
    weight: '500 g',
    category: 'Pizza',
    description: 'Pizza with ham, pineapple, and mozzarella cheese.',
    discount: 1.5,
  },
  {
    id: '6',
    name: 'Meat Lovers Pizza',
    image:
      'https://avatars.mds.yandex.net/i?id=d99ad5f4b79003111596c2af106fe798_l-9068512-images-thumbs&n=13',
    price: 24.0,
    weight: '550 g',
    category: 'Pizza',
    description: 'A pizza topped with pepperoni, sausage, ham, and bacon.',
    discount: 2.5,
  },

  // Burger
  {
    id: '7',
    name: 'Classic Cheeseburger',
    image:
      'https://avatars.mds.yandex.net/i?id=2a0000017a0be1ee27736ea18ccac00985d2-4824740-images-thumbs&n=13',
    price: 12.0,
    weight: '300 g',
    category: 'Burger',
    description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.',
    discount: 1.0,
  },
  {
    id: '8',
    name: 'Bacon Cheeseburger',
    image:
      'https://avatars.mds.yandex.net/i?id=7ba5f9037c8713beb0f2e6701115e7f7cc25d40ddde899ad-12166422-images-thumbs&n=13',
    price: 14.0,
    weight: '350 g',
    category: 'Burger',
    description: 'A cheeseburger topped with crispy bacon slices.',
    discount: 1.5,
  },
  {
    id: '9',
    name: 'Veggie Burger',
    image:
      'https://i.pinimg.com/736x/30/f0/93/30f093616466a75331cbcb8da6e21053.jpg',
    price: 10.0,
    weight: '300 g',
    category: 'Burger',
    description: 'A patty made of vegetables, served with lettuce and avocado.',
    discount: 2.0,
  },
  {
    id: '10',
    name: 'BBQ Beef Burger',
    image:
      'https://avatars.mds.yandex.net/i?id=a13663680d71f9099568adb4de7b7d2aeeb4fd6f-12184992-images-thumbs&n=13',
    price: 13.0,
    weight: '350 g',
    category: 'Burger',
    description: 'Beef patty with BBQ sauce, onions, and pickles.',
    discount: 1.0,
  },
  {
    id: '11',
    name: 'Mushroom Swiss Burger',
    image:
      'https://avatars.dzeninfra.ru/get-zen_doc/9795216/pub_6471a6d721749b2cd1a85fb8_6471a95c0ead9a02da49e16c/scale_1200',
    price: 15.0,
    weight: '350 g',
    category: 'Burger',
    description: 'Beef patty with sautéed mushrooms and Swiss cheese.',
    discount: 2.0,
  },
  {
    id: '12',
    name: 'Double Decker Burger',
    image:
      'https://avatars.mds.yandex.net/i?id=add8dbfa7fc81e7df14a1038373c6bde_l-5166135-images-thumbs&n=13',
    price: 16.0,
    weight: '400 g',
    category: 'Burger',
    description: 'Double beef patties with cheddar cheese and special sauce.',
    discount: 2.5,
  },

  // Appetizers
  {
    id: '13',
    name: 'Mozzarella Sticks',
    image:
      'https://avatars.mds.yandex.net/i?id=4e57e1fa29d05186bc0db7951bc8aace7b8e0e0a-10843465-images-thumbs&n=13',
    price: 8.0,
    weight: '200 g',
    category: 'Appetizers',
    description: 'Crispy fried mozzarella sticks with marinara sauce.',
    discount: 1.5,
  },
  {
    id: '14',
    name: 'Chicken Wings',
    image:
      'https://i.pinimg.com/736x/44/1d/79/441d79239b576b0ecb0b91d194faae64.jpg',
    price: 12.0,
    weight: '300 g',
    category: 'Appetizers',
    description: 'Spicy buffalo chicken wings served with ranch dressing.',
    discount: 1.0,
  },
  {
    id: '15',
    name: 'Garlic Bread',
    image:
      'https://avatars.mds.yandex.net/i?id=5657dc1513ea6dd880f2f5e953fd898a_l-5340698-images-thumbs&n=13',
    price: 6.0,
    weight: '150 g',
    category: 'Appetizers',
    description: 'Toasted bread with garlic butter and parsley.',
    discount: 0.5,
  },
  {
    id: '16',
    name: 'Loaded Nachos',
    image:
      'https://i.pinimg.com/originals/c8/95/63/c895630af9df875ab228bdc9239ac096.jpg',
    price: 10.0,
    weight: '250 g',
    category: 'Appetizers',
    description: 'Tortilla chips loaded with cheese, jalapenos, and salsa.',
    discount: 1.5,
  },
  {
    id: '17',
    name: 'Stuffed Jalapenos',
    image:
      'https://avatars.mds.yandex.net/i?id=63c223420fb36e0de7dffb45e76a5360a4435b0a-8186099-images-thumbs&n=13',
    price: 9.0,
    weight: '200 g',
    category: 'Appetizers',
    description: 'Jalapenos stuffed with cheese and deep-fried.',
    discount: 1.0,
  },
  {
    id: '18',
    name: 'Potato Wedges',
    image:
      'https://avatars.mds.yandex.net/i?id=cad6befc359115ef5d0ded9715e2a5c3587a593c-5209846-images-thumbs&n=13',
    price: 7.0,
    weight: '250 g',
    category: 'Appetizers',
    description: 'Crispy potato wedges seasoned with herbs.',
    discount: 0.5,
  },

  // Salad
  {
    id: '19',
    name: 'Caesar Salad',
    image:
      'https://avatars.mds.yandex.net/i?id=d2908c051e79eb32e1917fadbfdf0a2804da6ba1-12753086-images-thumbs&n=13',
    price: 10.0,
    weight: '300 g',
    category: 'Salad',
    description: 'Crisp romaine lettuce, croutons, and Caesar dressing.',
    discount: 1.0,
  },
  {
    id: '20',
    name: 'Greek Salad',
    image:
      'https://avatars.mds.yandex.net/i?id=1dadf2704deb46fee1f070ba52ee2ad8888177b4-8497330-images-thumbs&n=13',
    price: 9.0,
    weight: '250 g',
    category: 'Salad',
    description: 'Fresh vegetables with feta cheese and olives.',
    discount: 0.5,
  },
  {
    id: '21',
    name: 'Caprese Salad',
    image:
      'https://i.pinimg.com/736x/b6/9c/98/b69c98a8db5ff11c45fb3ee963d59b34.jpg',
    price: 8.5,
    weight: '200 g',
    category: 'Salad',
    description: 'Tomatoes, mozzarella, and basil drizzled with balsamic.',
    discount: 1.5,
  },
  {
    id: '22',
    name: 'Quinoa Salad',
    image:
      'https://avatars.mds.yandex.net/i?id=e99c43e9a99a67fc0770857f2eb4d9fc-5433531-images-thumbs&n=13',
    price: 11.0,
    weight: '250 g',
    category: 'Salad',
    description: 'Quinoa with fresh vegetables and lemon dressing.',
    discount: 1.0,
  },
  {
    id: '23',
    name: 'Spinach Avocado Salad',
    image:
      'https://avatars.mds.yandex.net/i?id=7512bee7c31bad6fce1a3b43e520f52e_l-10986596-images-thumbs&n=13',
    price: 12.0,
    weight: '300 g',
    category: 'Salad',
    description: 'Spinach and avocado with nuts and vinaigrette.',
    discount: 2.0,
  },
  {
    id: '24',
    name: 'Asian Slaw',
    image:
      'https://avatars.mds.yandex.net/i?id=33f4a95253535961768e01f1804e15e5df382eda-4438551-images-thumbs&n=13',
    price: 10.0,
    weight: '250 g',
    category: 'Salad',
    description: 'Crispy slaw with sesame ginger dressing.',
    discount: 1.5,
  },
];

export const filterData: Filter[] = [
  {
    id: 1,
    name: 'Pizza',
  },
  {
    id: 2,
    name: 'Burger',
  },
  {
    id: 3,
    name: 'Appetizers',
  },
  {
    id: 4,
    name: 'Salad',
  },
];

export const eventData: Event[] = [
  {
    id: 0,
    title: 'Wine & Cheese Pairing Night',
    date: 'Saturday, March 16, 2024',
    time: 'Time: 7:00 PM - 10:00 PM',
    detail:
      "Embark on a journey of refined tastes with our exclusive Wine & Cheese Pairing Night. This event is perfect for wine enthusiasts and cheese connoisseurs alike. Enjoy a curated selection of the finest wines from around the world, expertly paired with an array of artisan cheeses that complement their flavors. Our sommelier will guide you through the tasting experience, sharing insights about each pairing and the stories behind them. The evening will take place in our elegant dining room, set with soft lighting and warm decor to create a sophisticated ambiance. Whether you're a seasoned taster or new to wine, this event promises to be an unforgettable experience. Limited seats are available for an intimate setting.",
  },
  {
    id: 1,
    title: 'Live Cooking Show',
    date: 'Wednesday, April 3, 2024',
    time: 'Time: 6:30 PM - 9:00 PM',
    detail:
      'Join us for an exciting Live Cooking Show where culinary art comes to life. This one-of-a-kind event will feature our head chef preparing a gourmet three-course meal live in front of the audience. Learn the secrets of crafting exquisite dishes as the chef explains techniques, shares recipes, and offers professional tips throughout the evening. Guests will be served each course shortly after its preparation, ensuring a fresh and flavorful dining experience. The event will take place in our open-kitchen dining area, allowing you to observe the precision and creativity behind every dish. Perfect for food lovers and aspiring cooks, this interactive evening combines entertainment, education, and exceptional cuisine. Seats are limited for an exclusive experience.',
  },
  {
    id: 2,
    title: 'Mediterranean Feast Night',
    date: 'Friday, May 10, 2024',
    time: 'Time: 7:00 PM - 10:00 PM',
    detail:
      "Take your taste buds on a journey across the Mediterranean with our extravagant Mediterranean Feast Night. This culinary celebration will showcase the vibrant and diverse flavors of Greek, Italian, and Spanish cuisines. Enjoy a lavish buffet featuring freshly made dishes such as Greek souvlaki, Italian pasta, Spanish tapas, and much more. The dining area will be transformed with Mediterranean-themed decor, setting the stage for an evening of cultural immersion. To add to the experience, live traditional music will create a festive and authentic atmosphere. Whether you're exploring these cuisines for the first time or reliving favorite flavors, this event offers something for everyone. Reserve your spot early to secure a place at this unforgettable feast.",
  },
  {
    id: 3,
    title: 'Kids’ Pizza Workshop',
    date: 'Sunday, June 2, 2024',
    time: 'Time: 4:00 PM - 6:00 PM',
    detail:
      'Bring your little chefs for a fun-filled afternoon at our Kids’ Pizza Workshop! This interactive event invites children to explore their creativity as they design and prepare their own pizzas. With guidance from our friendly chefs, kids will learn about ingredients, dough rolling, and topping selection. From classic flavors to unique combinations, every pizza is a masterpiece waiting to be baked. While the pizzas cook, parents can relax and enjoy light refreshments in a cozy setting. This workshop is a great opportunity for family bonding and an unforgettable culinary adventure for the kids. Spaces are limited, so book early to ensure your spot in this delightful event.',
  },
];
