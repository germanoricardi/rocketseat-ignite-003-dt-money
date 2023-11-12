import { Transaction } from '../contexts/TransactionsContext'

export const TransactionsCollection: Transaction[] = [
  {
    id: 1,
    description: 'Desenvolvimento de site',
    type: 'income',
    category: 'Venda',
    price: 14000,
    createdAt: '2023-03-08T16:59:36.236Z',
  },
  {
    id: 2,
    description: 'Hamburguer',
    type: 'outcome',
    category: 'Alimentação',
    price: 50,
    createdAt: '2023-03-08T17:00:36.236Z',
  },
  {
    id: 3,
    description: 'Ignite Rocketseat',
    type: 'outcome',
    category: 'Educação',
    price: 1980,
    createdAt: '2023-03-13T22:33:36.236Z',
  },
  {
    id: 4,
    category: 'Venda',
    description: 'Desenvolvimento de App',
    price: 10000,
    type: 'income',
    createdAt: '2023-03-15T16:44:05.158Z',
  },
  {
    id: 5,
    category: 'Alimentação',
    description: 'Pastel',
    price: 5,
    type: 'outcome',
    createdAt: '2023-03-15T16:58:41.282Z',
  },
  {
    id: 6,
    category: 'Alimentação',
    description: 'Iogurte de Banana',
    price: 4,
    type: 'outcome',
    createdAt: '2023-03-15T16:59:20.839Z',
  },
]
