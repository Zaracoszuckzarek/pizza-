import { Server, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
  environment,

    models: {
      pizzas: Model,
    },

    seeds(server) {
      server.create("pizza", { 
        img: "../src/assets/images/chicago-pizza.jpg",
        name:"Deep love",
        price:15,
        description:"If Chicago-style hot dogs don't come to mind when you think of the Windy City, then you're definitely thinking of deep dish pizza. The most notable spots making this creation are Lou Malnati's Pizzeria and Giordano's, which both opened their first locations in the 1970s. The pie has high edges and a thick crust, and gets topped with cheese and then sauce.",
        country:"USA"
     });

     server.create("pizza", {
      img: "../src/assets/images/new-york-pizza.jpg",
      name:"New York",
      price:30,
      description:"Outside of Italian pizza, New York-style pizza might be the most popular style in the world. It started when Neapolitan immigrants moved to New York and brought their pizza recipe there, which was changed into its own “US” style over the years. For example, Neapolitan sauce is made with just tomatoes and salt, whereas NY pizza adds garlic, oregano, sugar, and crushed red pepper to the tomatoes; Neapolitan pizza dough only has yeast, salt, and flour but NY pizza adds sugar and olive oil to the mix; finally, low moisture shredded cheese is used instead of fresh mozzarella. NY pizza is generally quite large and is sold in triangular slices. It can come with all kinds of toppings and is usually “dressed” at the end with extra oregano, crushed red pepper, and parmesan cheese.",
      country:"USA"
    });
  
    server.create("pizza", {
      price:25,
      img:"../src/assets/images/detroit-pizza.jpg",
      name:" Detroit",
      description:"Detroit-style PizzaNot all pizzas are a circle, and the Detroit-style pizza is an example of thick, rectangular pan pizza that will leave you wanting for more (although -interesting tidbit- they call it a square). What is the advantage of a rectangular shape? Delicious crispy corners! This pizza is inspired by Sicilian pizza, with a light, airy and crispy texture. The cheese used is usually Wisconsin brick cheese, similar to cheddar, and it is placed on the bottom, topped with meats or other ingredients, and finally by the sauce (similar to the Chicago deep-dish pizza). When the cheese spreads to the corners of the pan it caramelizes into a crispy crust- it is no surprise that everyone fights over that corner slice!",
      country:"USA"
    });

    server.create("pizza", {
      price:18,
      img:"../src/assets/images/california-pizza.jpg",
      name:"Califonia",
      description:"When you think about California, if you think about trendsetting vegan food, organic products, a healthy lifestyle, and sustainable practices, you will not be surprised that these are what make up a California-style pizza! Whereas the crust is similar to that of a New York Pizza, the toppings are very, well, California style. Think avocados, goat cheese, seasonal veggies like beets and kale, and other locally sourced and farmed ingredients. These pizzas are usually baked in a wood-fired oven similar to Gozney’s Dome. The vast array of original and sometimes exotic ingredients will never leave you bored.",
      country:"USA"
    });

    server.create("pizza", {
      price: 16,
      img:"../src/assets/images/miami-cuban-pizza.jpg",
      name:"Cuban",
      description:"When you think about California, if you think about trendsetting vegan food, organic products, a healthy lifestyle, and sustainable practices, you will not be surprised that these are what make up a California-style pizza! Whereas the crust is similar to that of a New York Pizza, the toppings are very, well, California style. Think avocados, goat cheese, seasonal veggies like beets and kale, and other locally sourced and farmed ingredients. These pizzas are usually baked in a wood-fired oven similar to Gozney’s Dome. The vast array of original and sometimes exotic ingredients will never leave you bored.",
      country:"Cuba"
    });

    server.create("pizza", {
      price: 17,
      img:"../src/assets/images/milan-style.jpg",
      name:"Milan",
      description:"Maybe the least known among typical Italian pizza styles, the Milan-style pizza is a “newer” version created in the 1950s. It is thick and fluffy, like focaccia, even though it only needs to rise for one hour. The toppings include peeled crushed tomatoes and a mountain of mozzarella cheese, sliced into thin strips that must cover the WHOLE surface of the pizza. This is then topped with oregano and sardines.",
      country:"Italy"
    });

    server.create("pizza", {
      price: 80,
      img:"../src/assets/images/roman-pizza.jpg",
      name:"Rome",
      description:"Roman pizza is similar to what in other places people would call flatbread: a thin, crispy and slightly charred pizza crust with a variety of light toppings. It is opposite in many ways to the Neapolitan pizza which is soft, wet and with a fluffy crust, so people usually hate one and love the other. To make everyone happy, Romans developed another kind of pizza named “pinsa”, which is really a hybrid between the two styles- a little thicker and fluffy crust with a crunchy base. Pinsa is made with easy to digest ingredients- sourdough starter (it rises for 48 to 72 hours) and rice, wheat and soy flours. The toppings are genuine and typical of any Italian pizza.But Rome is a big metropolis, with people and millions of tourists always on the go, so a third style of pizza was naturally created there: pizza a taglio (“cut pizza”). Walking around Rome you will see thousands of these little to-go pizza joints, which carry giant rectangular pizzas with a great variety of toppings. The beauty of pizza a taglio  is that you can try as many flavors as you like- and you should! A typical order would be :” Can I have an inch of the salmon pizza, two inches of the pesto and 2 inches of the margherita?”.You choose how little or how big you want your slice to be, and the server will cut with scissors the portion requested and sell it by weight.",
      country:"Italy"
    });

    server.create("pizza", {
      price: 100,
      img:"../src/assets/images/sicilian-pizza.jpg",
      name:"sicilian",
      description:"The most popular kind of pizza on this beautiful island is the Sfincione. It originates in Palermo and it is a fluffy and spongy rectangular pizza topped with tomatoes, sardines, lots of onions, oregano and caciocavallo, a Sicilian cheese. It is extremely tasty and cheap, as it is often sold by the slice by street vendors. Another typical Sicilian pizza is the Scacciata, from the Catania side, a stuffed pizza- pizza dough base, toppings and another pizza on top! The  filling is usually broccoli, cauliflower, sausages and potatoes. Sicily is a happy place",
      country:"Italy"
    });

    server.create("pizza", {
      price: 120,
      img:"../src/assets/images/neapolitan-pizza.jpg",
      name:"Neapolitan",
      description:"The pizza by excellence, the mother of all pizzas. It is no surprise that pizza became so popular all over the world and every country has made its own version after seeing what the original looks and tastes like. Neapolitan pizza has a long history, but the main characteristics involve a simple dough that is left to rise for a long time, topped with homemade tomato sauce, fresh mozzarella, and some other wholesome toppings, all cooked at incredibly high temperatures for just 60-90 seconds for a soft, thin and yet fluffy texture. It is easy to digest and does not cause the bloated feeling many other pizzas give.",
    country:"Italy"
    });

    server.create("pizza", {
    
      price: 20,
      img:"../src/assets/images/hawaiian-pizza.jpg",
      name:"Hawaiian",
      description:"This controversial pizza was created, not in Hawaii, as many would think, but in Canada, by a man who enjoyed the contrast of sweet and savory flavors in the Chinese cuisine and tried making a pizza with pineapples and ham toppings. Hawaiian pizza is now served in many countries (interestingly enough, it is hard to find in Hawaii).  Do you like pineapples on pizza?",
    country:"USA"
    });

    server.create("pizza", {
  
      price:19,
      img:"../src/assets/images/mexican-tlayuda-pizza.jpg",
      name:"tlayuda",
      description:"True Mexican pizza is called “tlayuda” and is made with giant flour tortillas topped with lard, mashed beans, fresh queso, chile sauce and sometimes meats and avocado. A dream come true if you  love both tacos and pizza! The recipe is from Oaxaca and the tortillas are made by hand and griddled on large stones. Not surprisingly, it is one of Mexico’s best street foods.",
    country:"Mexico"
    });

    server.create("pizza", {
      
      price:19,
      img:"../src/assets/images/canadian-quebecois-pizza.jpg",
      name:"Quebecois",
      description:"Aside from the Hawaiian pizza, Canadians can be credited with other topping combinations. Although the dough is not made in a specific manner, what sets Canadian pizzas apart are the toppings. The most common is the Quebecois pizza which is topped with tomato sauce, mozzarella cheese, bacon, pepperoni, and mushrooms. Poutine pizza is topped with the popular Canadian dish- french fries, cheese curds and gravy. The most peculiar Canadian pizza is probably the Pizza-ghetti, from Quebec. You guessed it: a combination of pizza and spaghetti, where the spaghetti are hidden beneath the melted cheese. Interesting eh?",
    country:"Canada"
    });

    server.create("pizza", {
    
      price:18,
      img:"../src/assets/images/thai-pizza.jpg",
      name:"Thai",
      description:"Not actually from Thailand, but a Thai-ispired US creation, Thai pizza features ingredients such as a peanut-based sauce, tofu, bean sprouts, scallions and chicken. Again, the Thai-style is more about the toppings than about the way the actual pizza dough is made- although this one works very well with flatbreads",
    country:"Thailand"
    });

    server.create("pizza", {
      price:32,
      img:"../src/assets/images/brazilian-pizza.jpg",
      name:"Brazilian",
      description:"Pizza was introduced in Brazil by Italian immigrants (like in most other other countries) around the 1930s. Brazilian pizza has a thin crust (closer to Italian than American pizza) and sometimes a crust filled with a Brazilian cheese called Requeijao. The amount of sauce used is sparse, but the toppings are extremely varied, from corn to cream cheese, curried chicken with coconut milk and mashed potatoes. They even make sweet pizzas topped with Nutella, strawberries, bananas and other sugary treats. Surely a cuisine as colorful as the country is!",
    country:"Brazil"
    });

    server.create("pizza", {
      price:21,
      img:"../src/assets/images/argentinian-fugazza-pizza.jpg",
      name:"Fugazza",
      description:"Fugazza is the name of a remarkable Argentinian-style pizza. This pizza dough contains olive oil and it is not rolled out but just pressed into the pan- so as it bakes it becomes airy and soft, perfectly absorbing the toppings’ flavors. It is topped with sweet onions sauteed in olive oil and sprinkled with oregano and parmesan cheese.Other toppings may include olives and ham.  Another version called Fugazzeta is loaded with mozzarella cheese and comes with a thicker crust.",
    country:"Argentina"
    });


    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
    country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
      country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
      country:"Russia"
    });

    server.create("pizza", {
      price:26,
      img:"../src/assets/images/russian-pizza.jpg",
      name:"Russian",
      description:"If you love seafood, you will love this pizza. The Russian pizza named Mockba (meaning Moscow) after the country’s capital, is a specialty topped with sardines, tuna, mackerel, salmon and raw onions and it is served cold. Instead of a four cheese pizza, we can say it is a four fish pizza! Russians are not afraid of strong flavors, and are known to also have pizzas with ketchup instead of tomato sauce, sour cream, mayo and hard boiled eggs.",
      country:"Russia"
    });
 },

    routes() {
      this.namespace = "api"
      this.login = false

      this.get("/pizzas", schema => {
        return schema.pizzas.all()
      })

      this.get("/pizzas/:id", (schema, request) => {
        const id = request.params.id
        return schema.pizzas.find(id)
      })
},
  })
  return server
}