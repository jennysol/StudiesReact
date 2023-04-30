import { MagnifyingGlass } from "phosphor-react"
import { SeachFormContainer } from "./styles"
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react"
import { TransactionsContext } from "../../../../contexts/TransactionsContext"

const searchFormSchema = z.object({
  query: z.string(),

})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)

  const { 
    register,
    handleSubmit,
    formState: { isSubmitting } 
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query)
    console.log('data', data)
  }

  return (
    <div>
      <SeachFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
        <input 
          type="text" 
          placeholder="Busque por transações"
          {...register('query')}
        />

        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </SeachFormContainer>
    </div>
  )
}
