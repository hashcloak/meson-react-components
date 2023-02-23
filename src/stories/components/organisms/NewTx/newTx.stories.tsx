import NewTx from './NewTx'

export default {
  title: 'Components/Organisms/NewTx',
  component: NewTx,
}

export const Default = (): React.ReactElement => {
  return (
    <div className='flex flex-row w-screen flex-wrap'>
      <div className='flex flex-row flex-wrap w-full mt-8'>
        <NewTx />
      </div>
    </div>
  )
}
