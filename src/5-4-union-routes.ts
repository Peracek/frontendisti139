export {}

const createRouter = <Routes>(routes: Routes) => {
  return {
    goTo(route: keyof Routes) {},
  }
}

const router = createRouter({
  '/': RootComponent,
  '/about': AboutComponent,
  '/eshop': EshopComponent,
})

router.goTo('/')
