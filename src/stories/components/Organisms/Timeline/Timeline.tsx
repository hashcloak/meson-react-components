import Card from '../../molecules/Card/Card'
import { IconTypes, StatusTypes } from '../../molecules/IconText/TxStatus'

export type TransactionType = {
  id: number
  token: 'ethereum' | string
  amount: number
  ethAddress: string
  status: StatusTypes | IconTypes
  isSuccess: boolean
  timestamp: number
}

export const transactions: TransactionType[] = [
  {
    id: 1,
    token: 'ethereum',
    amount: 0.00062,
    ethAddress: '0xf86B25473cC08F04DA275B2847F2448cf041Fbd5',
    status: 'Received',
    isSuccess: true,
    timestamp: 1675211794,
  },
  {
    id: 2,
    token: 'ethereum',
    amount: 0.0008,
    ethAddress: '0xf86B25473cC08F04DA275B2847F2448cf041Fbd5',
    status: 'Sent',
    isSuccess: false,
    timestamp: 1675989394,
  },
  {
    id: 3,
    token: 'ethereum',
    amount: 0,
    ethAddress: '0x9F87C1aCaF3Afc6a5557c58284D9F8609470b571',
    status: 'OwnerChange',
    isSuccess: true,
    timestamp: 1675667105,
  },
  {
    id: 4,
    token: 'ethereum',
    amount: 0,
    ethAddress: '0x9F87C1aCaF3Afc6a5557c58284D9F8609470b571',
    status: 'OnChainRejection',
    isSuccess: true,
    timestamp: 1676421394,
  },
  {
    id: 5,
    token: 'ethereum',
    amount: 0.00062,
    ethAddress: '0xf86B25473cC08F04DA275B2847F2448cf041Fbd5',
    status: 'Received',
    isSuccess: true,
    timestamp: 1673749886,
  },
  {
    id: 6,
    token: 'ethereum',
    amount: 0.0008,
    ethAddress: '0xf86B25473cC08F04DA275B2847F2448cf041Fbd5',
    status: 'Sent',
    isSuccess: false,
    timestamp: 1672885886,
  },
  {
    id: 7,
    token: 'ethereum',
    amount: 0,
    ethAddress: '0x9F87C1aCaF3Afc6a5557c58284D9F8609470b571',
    status: 'OwnerChange',
    isSuccess: true,
    timestamp: 1674009086,
  },
  {
    id: 8,
    token: 'ethereum',
    amount: 0,
    ethAddress: '0x9F87C1aCaF3Afc6a5557c58284D9F8609470b571',
    status: 'OnChainRejection',
    isSuccess: true,
    timestamp: 1674012686,
  },
]

const Timeline = () => {
  const sortedTx = transactions.sort((a, b) => {
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  })

  return (
    <div className='flex flex-col w-full h-full'>
      <span className='text-textWhite text-2xl font-bold'>
        History - Latest {sortedTx.length} out of{' '}
        {sortedTx.length > 5 ? sortedTx.length : '10'} Txs
      </span>
      <div className='flex flex-row rounded-2xl text-textWhite bg-bgDarkMid px-8 py-6 w-full h-[22.5rem] box-border snap-x overflow-x-scroll '>
        {sortedTx ? (
          sortedTx.map((tx) => <Card tx={tx} key={tx.id} />)
        ) : (
          <div className='w-full h-full flex justify-center items-center'>
            <span className='text-textGrayLight'>No queued transaction</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Timeline
