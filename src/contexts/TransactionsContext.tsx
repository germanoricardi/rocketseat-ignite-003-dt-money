import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'
import { TransactionsCollection } from '../db/Transactions'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    if (!import.meta.env.VITE_API_URL) {
      return !query
        ? setTransactions(TransactionsCollection)
        : setTransactions(
            TransactionsCollection.filter((transaction) =>
              transaction.description
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase().toString()),
            ),
          )
    }

    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, description, price, type } = data

      const newTransaction: Transaction = {
        category,
        createdAt: new Date().toISOString(),
        description,
        id: transactions.length + 1,
        price,
        type,
      }

      if (!import.meta.env.VITE_API_URL)
        return setTransactions((state) => [newTransaction, ...state])

      const response = await api.post('transactions', {
        category,
        description,
        price,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [transactions.length],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
