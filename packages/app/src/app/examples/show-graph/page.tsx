import { CardList } from '@/components/CardList'
import OliveJuice from '@/assets/icons/olivejuice.png'
import TokenIcon from '@/assets/icons/token.png'
import dynamic from 'next/dynamic'
import { LinkComponent } from '@/components/LinkComponent'

const G6component = dynamic(
  () => import('../../../components/Graph'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <div className='text-center'>
        <h2 className='text-4xl'>OLIVE JUICE: an IP Scanner</h2>
        <p>
          <i>Powered by Story Protocol</i>
        </p>
      </div>

      {/* Large image placed outside the card */}
      <img src={OliveJuice.src} alt='Olive Juice' className='mx-auto mt-8' />
      <br/>
      <br/>

      <div>
        <G6component />
      </div>
    </>
  )
}
