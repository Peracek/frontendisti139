import { FC, useState } from 'react'
import { BusinessTerm } from '../BusinessTerm'

const useBusinessTerm = () => {
  const [term, setTerm] = useState<BusinessTerm | undefined>()

  // do fetching...

  if (!term) {
    return { isLoading: true }
  }
  return { isLoading: false, term }
}

const BusinessTermPage: FC = () => {
  const { isLoading, term } = useBusinessTerm()

  return (
    <div>
      this {term.name} created at ${term.createdAt.toDateString()} belongs to {term.owner.username}
    </div>
  )
}
