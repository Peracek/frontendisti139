export {}

type BusinessTerm = {
  name: string
  abbreviation: string
  createdAt: Date
  owner: {
    isAdmin: boolean
    username: string
  }
}
