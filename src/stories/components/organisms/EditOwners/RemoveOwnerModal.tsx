import { Dialog } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import Button from '../../atoms/Button/Button'
import { Options } from '../../atoms/Option/OptionControl'
import OwnerConfirmation from '../../molecules/OwnerConfirmation/OwnerConfirmation'

import { EditOwnerModalType as RemoveOwnerModalType } from './EditOwnerModal'
import { OwnerType } from './EditOwners'

import EthAddress from '~/stories/utils/Ethereum/EthAddress'
import { mockOwners } from '~/stories/utils/Mock'
import Spacer from '~/utils/Spacer'

type RemoveOwnerInputType = {
  name: string
  address: string
  onClose: () => void
  onPageChange: () => void
  onNewConfirmation: (data: any) => void
}

type RemoveOwnerDetailsProps = {
  confirmation: string
  name: string
  address: string
  onClose: () => void
  onPageChange: () => void
}

const RemoveOwnerInput: React.FC<RemoveOwnerInputType> = ({
  onClose,
  name,
  address,
  onPageChange,
  onNewConfirmation,
}) => {
  const [numOfConfirmation, setNumOfConfirmation] = useState<Options[]>([])

  const methods = useForm({
    defaultValues: {
      confirmation: '1',
    },
  })

  const onSubmit = (data: any) => {
    onNewConfirmation(data.confirmation)
    onPageChange && onPageChange()
  }

  const onError = (errors: any, e: any) => console.log('Error:', errors, e)

  useEffect(() => {
    const fields = [1, 2]
    const numOfOwners: Options[] = fields.map((_, index) => {
      return {
        value: String(index + 1),
        label: String(index + 1),
        bg: 'bg-bgGray text-textBlack',
      }
    })
    setNumOfConfirmation(numOfOwners)
  }, [])

  return (
    <div className='flex flex-col text-textWhite'>
      <span className='text-lg'>Removing owner</span>
      <div className=' bg-bgDarkLight p-4 flex flex-col rounded-2xl'>
        <div className='pl-4'>
          <EthAddress
            ethAddress={address}
            size={4.5}
            length={'full'}
            walletName={name}
          />
        </div>
      </div>
      <Spacer size={32} axis={'vertical'} />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <span className='text-lg'>New required owner confirmation</span>
          <div className='bg-bgDarkLight p-4 rounded-2xl flex flex-col'>
            <OwnerConfirmation numOfConfirmation={numOfConfirmation} />
          </div>
          <Spacer size={24} axis={'vertical'} />

          <div className='flex flex-row justify-around'>
            <Button
              btnVariant={'text'}
              btnSize={'lg'}
              btnType={'button'}
              handleClick={onClose}
            >
              <span className='text-lg'>Cancel</span>
            </Button>
            <Button btnVariant={'primary'} btnSize={'lg'} btnType={'submit'}>
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

const RemoveOwnerDetails: React.FC<RemoveOwnerDetailsProps> = ({
  onClose,
  confirmation,
  name,
  address,
  onPageChange,
}) => {
  const [filteredOwners, setFilteredOwners] = useState<OwnerType[]>([])

  useEffect(() => {
    const filterOwners = mockOwners.filter((owner) => {
      return owner.address !== address
    })
    setFilteredOwners(filterOwners)
  }, [])

  return (
    <>
      <div className='grid grid-cols-[30%_1fr] gap-5 rounded-2xl bg-bgDarkLight p-4 w-full  text-textWhite text-base '>
        <div className='flex flex-col w-full'>
          <span className='text-xl underline'>Details</span>
          <Spacer size={8} axis={'vertical'} />
          <div className='pl-2'>
            <div className='flex flex-col mb-2'>
              <span className='text-sm text-textGrayLight'>
                Name of the Meson Wallet
              </span>
              <span className='text-lg text-textWhite'>Sample wallet</span>
            </div>
            <div className='flex flex-col mb-2'>
              <span className='text-sm text-textGrayLight'>
                Address of the Meson Wallet
              </span>
              <EthAddress
                ethAddress={'0xf86B25473cC08F04DA275B2847F2448cf041Fbd5'}
                size={4.5}
                length={'short'}
              />
            </div>
            <div className='flex flex-col mb-2'>
              <span className='text-sm text-textGrayLight'>
                Selected network
              </span>
              <span className='text-lg text-textWhite'>Ethereum</span>
            </div>
            <div className='flex flex-col p-2 mb-2 bg-[#397F97] rounded-2xl h-[4rem]'>
              <span className='text-sm text-textGrayLight'>
                Required confirmation
              </span>
              <span className='text-lg text-textWhite'>
                {confirmation} out of {mockOwners.length} owners
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <span className='text-xl underline'>Owners</span>
          <Spacer size={8} axis={'vertical'} />
          <div className='pl-2 w-full'>
            {/* Owners */}
            {filteredOwners &&
              filteredOwners.map((owner: OwnerType) => (
                <EthAddress
                  ethAddress={owner.address}
                  size={4.5}
                  length={'full'}
                  icons={true}
                  walletName={owner.name}
                  key={owner.address}
                />
              ))}

            <Spacer size={8} axis={'vertical'} />

            <div className='flex flex-col justify-center p-2 mb-2 bg-[#DC2626] rounded-2xl h-[4.5rem] box-border w-full'>
              <span className='font-bold'>Removing owner</span>
              <EthAddress
                ethAddress={address}
                size={4.5}
                length={'full'}
                icons={true}
                walletName={name}
              />
            </div>
          </div>
        </div>
      </div>
      <Spacer size={16} axis={'vertical'} />
      <div
        tabIndex={0}
        className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'
      >
        <div className='collapse-title text-base font-bold bg-bgDarkLight'>
          Advanced parameters
        </div>
        <div className='collapse-content flex flex-col w-full bg-bgDarkLight'>
          <div className='flex flex-row justify-around w-full'>
            <span>Nonce</span>
            <span>33</span>
          </div>
          <div className='flex flex-row justify-around w-full'>
            <span>TxGas</span>
            <span>43634</span>
          </div>
        </div>
      </div>
      <Spacer size={32} axis={'vertical'} />

      <div className='flex flex-row justify-around'>
        <Button
          btnVariant={'text'}
          btnSize={'lg'}
          btnType={'button'}
          handleClick={onPageChange}
        >
          <span className='text-lg'>Back</span>
        </Button>
        <Button
          btnVariant={'primary'}
          btnSize={'lg'}
          btnType={'submit'}
          handleClick={() => onClose()}
        >
          Submit
        </Button>
      </div>
    </>
  )
}

const RemoveOwnerModal: React.FC<RemoveOwnerModalType> = ({
  isOpen,
  onClose,
  name,
  address,
}) => {
  const [pageChange, setPageChange] = useState(false)
  const [newConfirmation, onNewConfirmation] = useState<string | null>(null)

  const handlePageChange = () => {
    setPageChange(!pageChange)
  }

  return (
    <>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className='fixed z-10 inset-0 overflow-y-auto'
          // static
        >
          <div className='flex items-center justify-center min-h-screen'>
            <Dialog.Overlay
              className='fixed inset-0 bg-neutral-900 opacity-30'
              aria-hidden='true'
            />
            <Dialog.Panel className='relative bg-bgDarkMid rounded-2xl py-6 px-8'>
              <span className='text-textWhite text-2xl font-bold'>
                Remove owner
              </span>

              <Dialog.Description className='py-6'>
                {/* Description */}

                {!pageChange ? (
                  <RemoveOwnerInput
                    onClose={onClose}
                    name={name}
                    address={address}
                    onPageChange={handlePageChange}
                    onNewConfirmation={onNewConfirmation}
                  />
                ) : (
                  <RemoveOwnerDetails
                    onClose={onClose}
                    confirmation={newConfirmation!}
                    name={name}
                    address={address}
                    onPageChange={handlePageChange}
                  />
                )}
                {/* Description */}
              </Dialog.Description>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  )
}

export default RemoveOwnerModal
