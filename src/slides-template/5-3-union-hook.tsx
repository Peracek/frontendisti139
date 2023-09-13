import { FC, useState } from 'react'
import { BusinessTerm } from '../BusinessTerm'

const useBusinessTerm = () => {
  const [term, setTerm] = useState<BusinessTerm | undefined>()

  // do some fetching...
}

const BusinessTermPage: FC = () => {
  return (
    <div>
      this {term.name} created at ${term.createdAt.toDateString()} belongs to {term.owner.username}
    </div>
  )
}
