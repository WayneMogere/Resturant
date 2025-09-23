<script setup>

</script>

<template>
    <!-- Carousel -->
    <v-container>
        <v-row>
            <v-carousel>
                <v-carousel-item src="/public/images/food1.jpg"></v-carousel-item>
                <v-carousel-item src="/public/images/food2.jpg"></v-carousel-item>
                <v-carousel-item src="/public/images/food3.jpg"></v-carousel-item>
                <v-carousel-item src="/public/images/food4.jpg"></v-carousel-item>
            </v-carousel>
        </v-row>
    </v-container>
    <!-- About -->
    <v-container>
        <v-row>
            <v-card align="center">
                <p class="text-h4"><b>Welcome to Fork & Flame</b></p>
                <p class="text-h6">Fork & Flame is an inviting, contemporary restaurant where bold flavors meet artisanal craftsmanship. The name speaks to the dynamic union of traditional cooking methods and modern innovation, with a focus on flame-grilled dishes and seasonally inspired menus.</p>
                <p class="text-h6">At Fork & Flame, each dish is thoughtfully crafted with locally sourced ingredients, highlighting the flavors of the season. Whether you're craving a perfectly charred steak, a wood-fired pizza, or inventive vegetarian options, every bite is designed to ignite your taste buds.</p>
                <p class="text-h6">Come for the flames, stay for the flavor.</p>
            </v-card>
        </v-row>
    </v-container>
    <!-- News -->
    <v-container>
        <v-row>
            <v-col md="4">
                <v-card color="purple">
                    <v-img 
                    src="/public/images/rest1.jpg"
                    class="align-end text-white"
                    height="200"
                    cover>
                    
                </v-img>
                <v-card-title>Bar</v-card-title>
                <v-card-subtitle>The bar’s warm, industrial-chic ambiance is defined by dim lighting, reclaimed wood accents, and an open layout that invites socializing.</v-card-subtitle>
                <v-card-actions>
                    <v-btn>Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card color="purple">
                    <v-img 
                    src="/public/images/rest2.jpg"
                    class="align-end text-white"
                    height="200"
                    cover>
                    
                </v-img>
                <v-card-title>Restaurant</v-card-title>
                <v-card-subtitle>You’re not just dining—you’re immersed in a space where heat, smoke, and creativity come together to ignite your senses.</v-card-subtitle>
                <v-card-actions>
                    <v-btn>Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card color="purple">
                    <v-img 
                    src="/public/images/rest4.jpg"
                    class="align-end text-white"
                    height="200"
                    cover>
                    
                </v-img>
                <v-card-title>Playground</v-card-title>
                <v-card-subtitle>Designed with kids (and their parents) in mind, this thoughtfully crafted play area is a safe, engaging space where little ones can climb, explore, and burn off energy while adults relax and savor their meals nearby.</v-card-subtitle>
                <v-card-actions>
                    <v-btn>Read More</v-btn>
                </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!-- Footer -->
    <v-container>
        <v-row>
            <v-footer class="text-center d-flex flex-column ga-2 py-4" color="purple">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkedin'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
        </v-row>
    </v-container>
</template>