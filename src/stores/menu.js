import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
       const menu = {
    0:{
        name: 'Mediterranean Fish Soup',
        image: "/public/images/menu/fishsoup.jpg",
        price: 500,
        description: "A delicate saffron-infused broth enriched with fresh market fish",
        longDescription: 'A delicate broth infused with saffron, garlic, and fresh herbs, simmered with tender fillets of market-fresh fish, mussels, and prawns. Finished with a splash of white wine and served with toasted artisan bread for an elegant, soul-warming dish.',
        category: 'Starters'
    },
    1:{
        name: 'Garden Harvest Vegetable Soup',
        image: "/public/images/menu/vegsoup.jpg",
        price: 550,
        description: "A fragrant herb-infused broth with seasonal garden vegetables,",
        longDescription: 'A wholesome medley of seasonal vegetables gently simmered in a fragrant herb-infused broth, enriched with hints of garlic and thyme. Finished with a drizzle of extra virgin olive oil and served with rustic sourdough bread for a nourishing, elegant starter.',
        category: 'Starters'
    },
    2:{
        name: 'Gourmet Angus Burger',
        image: "/public/images/menu/burger.jpg",
        price: 1250,
        description: "A handcrafted Angus beef burger",
        longDescription: 'A handcrafted patty of premium Angus beef, chargrilled to perfection and layered with aged cheddar, caramelized onions, vine-ripened tomatoes, crisp butterhead lettuce, and a hint of truffle aioli. Served on a freshly baked brioche bun for an indulgent dining experience.',
        category: 'Main Course'
    },
    3:{
        name: 'Prime Cut Beef Steak',
        image: "/public/images/menu/steak.jpg",
        price: 1560,
        description: "Prime grass-fed beef",
        longDescription: 'Succulent, grass-fed beef steak, expertly seared to lock in natural flavors and finished to your preferred doneness. Served with a rich red wine reduction, accompanied by garlic butter asparagus and rosemary-infused potato gratin for a refined dining experience.',
        category: 'Main Course'
    },
    4:{
        name: 'Slow-Braised Pork Ribs',
        image: "/public/images/menu/porkribs.jpg",
        price: 1400,
        description: "fall-off-the-bone ribs",
        longDescription: 'Tender, fall-off-the-bone pork ribs glazed with a smoky bourbon-barbecue reduction, finished with a touch of honey for subtle sweetness. Served alongside charred seasonal vegetables and buttery mashed potatoes for a rich, satisfying experience.',
        category: 'Main Course'
    },
    5:{
        name: 'Herb-Grilled Chicken',
        image: "/public/images/menu/grilledchicken.jpg",
        price: 1100,
        description: "Herb-marinated chicken breast",
        longDescription: 'Juicy, free-range chicken breast marinated with fresh garden herbs and citrus, flame-grilled to perfection. Served with roasted baby potatoes, sautéed seasonal greens, and a delicate white wine cream sauce for a light yet elegant main course.',
        category: 'Main Course'
    },
    6:{
        name: 'Gourmet Chicken Shawarma',
        image: "/public/images/menu/shawarma.jpg",
        price: 900,
        description: "Spiced, slow-roasted chicken wrap",
        longDescription: 'Succulent strips of spiced, slow-roasted chicken wrapped in warm artisan flatbread, layered with roasted garlic hummus, crisp greens, vine-ripened tomatoes, and pickled vegetables. Finished with a drizzle of tahini-yogurt sauce for a refined twist on a Middle Eastern classic.',
        category: 'Main Course'
    },
    7:{
        name: 'Decadent Chocolate Cake',
        image: "/public/images/menu/chocolatecake.jpg",
        price: 400,
        description: "Rich dark chocolate cake",
        longDescription: 'A rich, velvety layer cake crafted with premium dark chocolate, filled with smooth ganache, and finished with a glossy glaze. Served with a hint of vanilla bean cream and fresh seasonal berries for a luxurious finale to your meal.',
        category: 'Desserts'
    },
    8:{
        name: 'Classic Vanilla Bean Cake',
        image: "/public/images/menu/vanillacake.jpg",
        price: 400,
        description: "Light vanilla sponge cake",
        longDescription: 'Light and airy sponge infused with pure Madagascar vanilla, layered with silky buttercream and finished with a delicate glaze. Served with a touch of berry coulis and a sprinkle of candied almonds for an elegant, timeless dessert.',
        category: 'Desserts'
    },
    9:{
        name: 'Artisan Ice Cream Selection',
        image: "/public/images/menu/vanillaicecream.jpg",
        price: 300,
        description: "creamy artisan scoops in classic and seasonal flavors.",
        longDescription: 'Creamy, house-churned ice cream crafted with the finest ingredients, featuring flavors such as Madagascar vanilla, Belgian chocolate, and seasonal fruit sorbets. Served with a crisp almond tuile for a refined touch.',
        category: 'Desserts'
    },
    10:{
        name: 'Seasonal Fruit Medley',
        image: "/public/images/menu/fruitsalad.jpg",
        price: 500,
        description: "A refreshing mix of seasonal fruits",
        longDescription: 'A refreshing blend of hand-selected seasonal fruits, elegantly presented and lightly drizzled with a citrus-honey glaze. Garnished with fresh mint and a touch of passionfruit coulis for a vibrant, naturally sweet finish.',
        category: 'Desserts'
    },
    }
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})
