import { CardList } from '@/components/CardList'
import OliveJuice from '@/assets/icons/olivejuice.png'
import TokenIcon from '@/assets/icons/token.png'
import dynamic from 'next/dynamic'

const G6component = dynamic(
  () => import('../../components/Graph'),
  { ssr: false }
)

const ExampleItems = [
  {
    title: 'Register Youtube',
    description: 'Regsiter your Youtube video on Story Protocol.',
    image: OliveJuice.src,
    url: '/examples/youtube',
  },
]


export default function Home() {
  return (
    <>
      <div className='text-center'>
        <h2 className='text-4xl'>IP SCANNER</h2>
        <p>
          <i>Powered by Story Protocol</i>
        </p>
      </div>

      {/* Large image placed outside the card */}
      <img src={OliveJuice.src} alt='Olive Juice' className='mx-auto mt-8' />

      {/* Button treatment for "Register a Video" */}
      <div className='text-center mt-8'>
        <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
          Register your video on Story Protocol
        </button>
        <br></br>
        <br></br>
        <p className='text-lg mb-4'>
          Connect your wallet. Mint your video on Story Protocol. Scan Twitter to see who is using your work.
        </p>
      </div>
      <div>
        <G6component />
      </div>
    </>
  )
}
