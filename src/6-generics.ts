export {}

const routes = {
  '/': RootComponent,
  '/about': AboutComponent,
  '/eshop': EshopComponent,
}

type Routes = typeof routes

const createRouter = (routes: object) => {
  return {
    goTo: (route: keyof Routes) => {},
  }
}

const router = createRouter(routes)

router.goTo('/eshop')
