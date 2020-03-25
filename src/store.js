import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        // siteName: "A very Awesome Site",
        // pageName: "Home",
        productList: [{
                id: 1,
                name: "Jollof Rice",
                price: 500.0,
                categoryId: 2,
                productImageLink: require("@/assets/images/rice1.jpeg"),
                otherImageLink1: require("@/assets/images/jollof.jpg"),
                otherImageLink2: require("@/assets/images/jollof2.jpg"),
                otherImageLink3: require("@/assets/images/jollof3.jpeg"),
                description: "This is african jollof rice with a difference. You can get it by just a button click"
            },
            {
                id: 2,
                name: "India Rice",
                price: 1000.0,
                categoryId: 2,
                productImageLink: require("@/assets/images/rice2.jpeg"),
                otherImageLink1: require("@/assets/images/rice1.jpeg"),
                otherImageLink2: require("@/assets/images/rice1.jpeg"),
                otherImageLink3: require("@/assets/images/rice1.jpeg"),
                description: "Have a taste of intercontinental dish here in Nigeria. "
            },
            {
                id: 3,
                name: "Peridian Rice",
                price: 1500.0,
                categoryId: 2,
                productImageLink: require("@/assets/images/rice3.jpg"),
                otherImageLink1: require("@/assets/images/rice1.jpeg"),
                otherImageLink2: require("@/assets/images/rice1.jpeg"),
                otherImageLink3: require("@/assets/images/rice1.jpeg"),
                description: "This is african jollof rice with a difference. You can get it by just a button click"
            },

            {
                id: 4,
                name: "Suya with Sticks",
                price: 500.0,
                categoryId: 1,
                productImageLink: require("@/assets/images/suya.jpeg"),
                otherImageLink1: require("@/assets/images/rice1.jpeg"),
                otherImageLink2: require("@/assets/images/rice1.jpeg"),
                otherImageLink3: require("@/assets/images/rice1.jpeg"),
                description: "This is african jollof rice with a difference. You can get it by just a button click"
            },
            {
                id: 5,
                name: "Suya with Onions",
                price: 500.0,
                categoryId: 1,
                productImageLink: require("@/assets/images/suya-2.jpg"),
                otherImageLink1: require("@/assets/images/rice1.jpeg"),
                otherImageLink2: require("@/assets/images/rice1.jpeg"),
                otherImageLink3: require("@/assets/images/rice1.jpeg"),
                description: "This is african jollof rice with a difference. You can get it by just a button click"
            },
            {
                id: 6,
                name: "Suya with Cabbage",
                price: 800.0,
                categoryId: 1,
                productImageLink: require("@/assets/images/suyanew.jpeg"),
                otherImageLink1: require("@/assets/images/rice1.jpeg"),
                otherImageLink2: require("@/assets/images/rice1.jpeg"),
                otherImageLink3: require("@/assets/images/rice1.jpeg"),
                description: "This is african jollof rice with a difference. You can get it by just a button click"

            },
            {
                id: 7,
                name: "Suya Variety",
                price: 800.0,
                categoryId: 1,
                productImageLink: require("@/assets/images/SuyavarietiesTX.jpeg")
            },
            {
                id: 8,
                name: "Beans Porridge",
                price: 500.0,
                categoryId: 3,
                productImageLink: require("@/assets/images/beans1.jpg"),
                otherImageLink1: require("@/assets/images/rice1.jpeg"),
                otherImageLink2: require("@/assets/images/rice1.jpeg"),
                otherImageLink3: require("@/assets/images/rice1.jpeg"),
                description: "This is african jollof rice with a difference. You can get it by just a button click"
            },
            {
                id: 9,
                name: "Beans and Yam",
                price: 1000.0,
                categoryId: 3,
                productImageLink: require("@/assets/images/beans2.jpeg"),
                otherImageLink1: require("@/assets/images/rice1.jpeg"),
                otherImageLink2: require("@/assets/images/rice1.jpeg"),
                otherImageLink3: require("@/assets/images/rice1.jpeg"),
                description: "This is african jollof rice with a difference. You can get it by just a button click"
            },
            {
                id: 10,
                name: "Beans and Yam",
                price: 1000.0,
                categoryId: 3,
                productImageLink: require("@/assets/images/beans3.jpg"),
                otherImageLink1: require("@/assets/images/rice1.jpeg"),
                otherImageLink2: require("@/assets/images/rice1.jpeg"),
                otherImageLink3: require("@/assets/images/rice1.jpeg"),
                description: "This is african jollof rice with a difference. You can get it by just a button click"
            },
            {
                id: 11,
                name: "Sprite Drink",
                price: 200.0,
                categoryId: 4,
                productImageLink: require("@/assets/images/sprite.png"),
                otherImageLink1: require("@/assets/images/rice1.jpeg"),
                otherImageLink2: require("@/assets/images/rice1.jpeg"),
                otherImageLink3: require("@/assets/images/rice1.jpeg"),
                description: "This is african jollof rice with a difference. You can get it by just a button click"
            },
            {
                id: 12,
                name: "Drinks",
                price: 500.0,
                categoryId: 4,
                productImageLink: require("@/assets/images/softdrinks.jpg")
            }
        ],
        selectedProduct: null,
    },
    mutations: {
        setSelectedProductValue(state, product) {
            state.selectedProduct = product;
        }
    }
});


export default store;