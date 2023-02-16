import { timeStamp } from 'console'

import React from 'react'

import EthAddress from '~/stories/utils/Ethereum/EthAddress'
import { unixTimeConverter } from '~/stories/utils/unixTimeConverter'
import Spacer from '~/utils/Spacer'

type LastOpenedWalletType = {
  id: number
  walletName: string
  ethAddress: string
  lastOpened: number
}

type Props = {
  wallets: LastOpenedWalletType[]
}

const LastOpenedWallet: React.FC<Props> = ({ wallets }) => {
  const sortedWalelts = wallets
    .sort((a, b) => {
      return new Date(a.lastOpened).getTime() - new Date(b.lastOpened).getTime()
    })
    .slice(0, 5)

  const convertedDate = (timestamp: number) => {
    const { date } = unixTimeConverter(timestamp)
    return date
  }

  return (
    <div className='w-[51rem] max-h-[27rem] bg-bgDarkMid py-4 px-8 rounded-xl'>
      <span className='text-textWhite text-xl font-bold'>
        Last Opened Wallets
      </span>
      <Spacer size={16} axis={'vertical'} />
      {wallets && wallets
        ? sortedWalelts.map(({ id, walletName, ethAddress, lastOpened }) => (
            // TODO: Make this part button or anchor tag
            <button className='px-6 mb-2 hover:bg-dark w-full' key={id}>
              <div className='flex flex-row items-center justify-between '>
                <EthAddress
                  walletName={walletName}
                  ethAddress={ethAddress}
                  size={4.5}
                  length={'full'}
                />
                <div className='flex flex-col text-sm text-textGrayLight h-full items-center justify-center'>
                  <span>Last opened</span>
                  <span>{convertedDate(lastOpened)}</span>
                </div>
              </div>
            </button>
          ))
        : null}
    </div>
  )
}

export default LastOpenedWallet
