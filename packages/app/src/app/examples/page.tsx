import { CardList } from '@/components/CardList'

import EtherIcon from '@/assets/icons/ethereum.png'
import TokenIcon from '@/assets/icons/token.png'

const ExampleItems = [
  {
    title: 'Register Youtube',
    description: 'Regsiter your Youtube video on Story Protocol.',
    image: EtherIcon.src,
    url: '/examples/youtube',
  },
]

export default function Home() {
  return (
    <>
      <h2 className='text-xl'>Menu</h2>

      <p className='mb-4'>
        All these examples can be found in the main repo at <code>src/app/examples</code> to help you bootstrap
        development. You can delete the entire folder before deploying your own App.
      </p>

      <CardList title='Examples' items={ExampleItems} />
    </>
  )
}
