<script setup>
const isLoggedIn = true
</script>

<template>
      <v-app-bar color="purple">
        <v-app-bar-title>Fork & Flame</v-app-bar-title>
            <v-btn to="/">Home</v-btn>
            <v-btn to="/Menu">Menu</v-btn>
            <v-btn to="/Orders" v-if="isLoggedIn">My Orders</v-btn>
            <v-btn to="/Reservation"> Reservation</v-btn>
             <v-btn to="/Contactus">Contact us</v-btn>
             
            <v-avatar to="/UserProfile" v-if="isLoggedIn"><span class="text-h5 text-white">A</span>
            </v-avatar>

            <v-btn to="/Login"v-els>Login</v-btn>
           
      </v-app-bar>
</template>
