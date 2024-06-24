const routes = [
  {
    name: 'M1',
    comp: 'C1',
  },
  {
    name: 'M2',
    comp: 'C2',
  },
  {
    name: 'M3',
    subComp: [
      {
        name: 'M3A',
        comp: 'C3A',
      },
      {
        name: 'M3B',
        comp: 'C3B',
      },
    ],
  },
  {
    name: 'M4',
    subComp: [
      {
        name: 'M4A',
        comp: 'C4A',
      },
      {
        name: 'M4B',
        comp: 'C4B',
      },
    ],
  },
  {
    name: 'M5',
    subComp: [
      {
        name: 'M5A',
        comp: 'C5A',
      },
      {
        name: 'M5B',
        subComp: [
          {
            name: 'M5BA',
            comp: 'C5BA',
          },
          {
            name: 'M5BB',
            comp: 'C5BB',
          },
          {
            name: 'M5BC',
            comp: 'C5BC',
          },
        ],
      },
      {
        name: 'M5C',
        comp: 'C5C',
      },
    ],
  },
  {
    name: 'M6',
    comp: 'C6',
  },
];

const subscription = [
  {
    name: 'M1',
    isSub: true,
  },
  {
    name: 'M2',
    isSub: false,
  },
  {
    name: 'M3',
    isSub: false,
    subMod: [
      {
        name: 'M3A',
        isSub: true,
      },
      {
        name: 'M3B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M4',
    isSub: true,
    subMod: [
      {
        name: 'M4A',
        isSub: false,
      },
      {
        name: 'M4B',
        isSub: true,
      },
    ],
  },
  {
    name: 'M5',
    isSub: true,
    subMod: [
      {
        name: 'M5A',
        isSub: false,
      },
      {
        name: 'M5B',
        isSub: true,

        subComp: [
          {
            name: 'M5BA',
            isSub: false,
          },
          {
            name: 'M5BB',
            isSub: true,
          },
          {
            name: 'M5BC',
            isSub: false,
          },
        ],
      },
      {
        name: 'M5C',
        isSub: true,
      },
    ],
  },
  {
    name: 'M6',
    isSub: true,
  },
];


function processRoutes(routes, subscription) {
  // creating a object for subscriptions
const subMap = subscription.reduce((acc, sub) => {
  acc[sub.name] = sub;
  return acc;
}, {});

// console.log(subMap);

let redirectTo = false;

function updateModule(route, sub) {

    // if route is not in subs object || sub.isSub == false
  if (!sub || !sub.isSub) {
    // If route has comp, means no subComps, then set 'UN' directly
    if (route.comp) {
      route.comp = 'UN';
    }
    // If route has subComp, and is unsubscribed, then set all subComps as unsubscribed
    if (route.subComp) {
      route.subComp = route.subComp.map(subComp => ({ name: subComp.name, comp: 'UN' }));
    }
  } else {
    // Setting redirectTo first subscribed module
    if (route.comp && !redirectTo) {
      redirectTo = route.name;
    }
    // if (redirectTo) {
    //   route.unshift({redirectTo : redirectTo});
    //   redirectTo = false
    // }
    
    // If route is subscribed and has subComps
    if (route.subComp) {
      // then for each subComp, call the updateModule Function again
      route.subComp.forEach(subComp => {
          // Find the subModule for that subComp
        const subModule = sub.subMod ? sub.subMod.find(s => s.name === subComp.name) : null;
        // Call the function
        updateModule(subComp, subModule);
      });
    }
    
  }
  
}

routes.forEach(route => {
  const sub = subMap[route.name];
  updateModule(route, sub);
});


return routes;
}

console.log(processRoutes(routes, subscription));



//   function updateRoutes(routes, subscription) {
//     const subMap = new Map(subscription.map((sub) => {
//       return [sub.name, sub]
//     }))
//     console.log(subMap);

//     const newRoutes = routes.map((route) => {
//       if (!subMap.has(route.name)) {
//         return {
//           ...route,
//           comp : 'UN'
//         };
//       } else {
//         const subRoute = subMap.get(route.name);
//         if (subRoute && subRoute.isSub === false) {
//           return {
//             ...route,
//             comp: 'UN'
//           };
//         }
//       }
//       return route
//     });
//     console.log(newRoutes);

//   }
// updateRoutes(routes,subscription);


