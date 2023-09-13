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

type Query<Entity> = Partial<Record<keyof Entity, true>>

const query = {
  name: true,
  abbreviation: true,
} satisfies Query<BusinessTerm>

query.name
