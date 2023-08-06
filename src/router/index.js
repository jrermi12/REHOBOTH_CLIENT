import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/pages/homeView.vue"),
  },
  {
    path: "/routes",
    name: "routes",
    component: () => import("../components/pages/allRoutes.vue"),
  },
  // Register page
  {
    path: "/register",
    name: "register",
    component: () => import("../components/pages/registerCustomer.vue"),
 
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes,

});
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem("accesstoken") == null) {
//       next({
//         path: "/login",
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;

// else if(JSON.parse(localStorage.getItem("user")).x === "cashier") {
//   next('/cashier');
// }
// else if(JSON.parse(localStorage.getItem("user")).x === "admin") {
//   next('/admin');
// } else if(JSON.parse(localStorage.getItem("user")).x === "purchaser") {
//   next('/purchaser');

// {
  //   path: "/cashier",
  //   name: "cashier",
  //   // meta: {
  //   //       requiresAuth: true
  //   //     },
  //   component: () => import("../components/cashier/DashboardComponent.vue"),
  //   children:[
  //     {
  //       path: "/tab",
  //       name: "tab",
  //       component: () => import("../components/manageTab/manageTab.vue"),
  //       // meta: {
  //       //   requiresAuth: true
  //       // }
  //     },
  //     {
  //       path: "/order",
  //       name: "order",
  //       component: () => import("../components/manageTab/manageOrders.vue"),
  //       // meta: {
  //       //   requiresAuth: true
  //       // }
  //     },
  //     {
  //       path: "/editOrder",
  //       name: "editOrder",
  //       component: () => import("../components/manageTab/editOrder.vue"),
  //       // meta: {
  //       //   requiresAuth: true
  //       // }
  //     },
  //     {
  //       path: "/selectOrders/:tabId/:id",
  //       name: "selectOrders",
  //       component: () => import("../components/manageTab/selectOrders.vue"),
  //       // meta: {
  //       //   requiresAuth: true
  //       // }
  //     },
  //     {
  //       path: "/editTab",
  //       name: "editTab",
  //       component: () => import("../components/manageTab/editTab.vue"),
  //       // meta: {
  //       //   requiresAuth: true
  //       // }
  //     },
  //   ]
  // },
  // {
  //   path: "/admin",
  //   name: "admin",

  //   component: () => import("../components/admin/inc/DashboardComponent.vue"),
  //   children:[
  //     {
  //       path: "/employee",
  //       name: "employee",
  //       component: () => import("../components/manageEmployee/employeeTable.vue"),
  //       // meta: {
  //       //   requiresAuth: true
  //       // },
  //     },
  //     {
  //       path: "/editEmployee",
  //       name: "editEmployee",
  //       component: () => import("../components/manageEmployee/editEmployee.vue"),
  //     },
  //     {
  //       path: "/employeeProfile",
  //       name: "employeeProfile",
  //       component: () => import("../components/manageEmployee/employeeProfile.vue"),

  //     },
  //     {
  //       path: "/inventory",
  //       name: "inventory",
  //       component: () => import("../components/manageInventory/inventoryTable.vue"),

  //     },
  //     {
  //       path: "/EditInventory",
  //       name: "EditInventory",
  //       component: () => import("../components/manageInventory/EditInventory.vue"),

  //     },
  //     {
  //       path: "/menu",
  //       name: "menu",
  //       component: () => import("../components/manageMenu/menuTable.vue"),

  //     },
  //     {
  //       path: "/mealview",
  //       name: "mealview",
  //       component: () => import("../components/manageMenu/mealView.vue"),

  //     },
  //     {
  //       path: "/catView/:id",
  //       name: "catView",
  //       component: () => import("../components/manageMenu/catagoryView.vue"),

  //     },
  //     {
  //       path: "/specficMenu/:id",
  //       name: "specficMenu",
  //       component: () => import("../components/manageMenu/specficMenu.vue"),

  //     },

  //     {
  //       path: "/editMenu",
  //       name: "editMenu",
  //       component: () => import("../components/manageMenu/editMenu.vue"),

  //     },

  //     //Register page
  //     {
  //       path: "/register",
  //       name: "user-register",
  //       component: () => import("../components/auth/registerView.vue"),

  //     },
  //     //Profile Page
  //     {
  //       path: "/profile",
  //       name: "user-profile",
  //       component: () => import("../components/auth/profileView.vue"),

  //     },
  //   ]
  // },
  // {
  //   path: "/purchaser",
  //   name: "purchaser",

  //   component: () => import("../components/purchaser/DashboardComponent.vue"),
  //   children:[

  //     {
  //       path: "/inventory",
  //       name: "inventory",
  //       component: () => import("../components/manageInventory/inventoryTable.vue"),

  //     },
  //     {
  //       path: "/EditInventory",
  //       name: "EditInventory",
  //       component: () => import("../components/manageInventory/EditInventory.vue"),

  //     },

  //     //Profile Page
  //     {
  //       path: "/profile",
  //       name: "user-profile",
  //       component: () => import("../components/auth/profileView.vue"),

  //     },
  //   ]
  // },