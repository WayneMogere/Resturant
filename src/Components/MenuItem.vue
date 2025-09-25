<script setup>
const menuItem = {
    
        name: 'Mediterranean Fish Soup',
        image: "/public/images/menu/fishsoup.jpg",
        price: 500,
        description: 'A delicate broth infused with saffron, garlic, and fresh herbs, simmered with tender fillets of market-fresh fish, mussels, and prawns. Finished with a splash of white wine and served with toasted artisan bread for an elegant, soul-warming dish.',
        category: 'Starters'
    
}
</script>

<template>
    <v-container fluid class="d-flex fill-height" align="center">
        <v-row>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-img :src="menuItem.image" cover height="500"></v-img>
                </v-card>
            </v-col>
            <v-col md="6">
                <v-card class="pa-6 rounded-lg" justify="center">
                    <v-card-title>{{ menuItem.name }}</v-card-title>
                    <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                    <v-card-text>{{ menuItem.description }}</v-card-text>
                    <v-card-text> Quantity <v-text-field></v-text-field></v-card-text>
                    <v-card-actions>
                        <v-btn color="purple"> Order </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
