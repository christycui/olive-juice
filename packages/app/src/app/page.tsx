import { LinkComponent } from '@/components/LinkComponent'
import { SITE_DESCRIPTION } from '@/utils/site'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {/* Centered container */}
      <div className='text-center'>
        {/* Large text */}
        <h2 className='text-5xl mb-4'>OLIVE JUICE: an IP Scanner</h2>
        {/* Site description */}
        <p>{SITE_DESCRIPTION}</p>
        {/* Button with outline */}
        <p className='mt-4'>
          <LinkComponent
            className='inline-block border border-green-600 rounded px-4 py-2 text-green-600 hover:bg-green-600 hover:text-white'
            href='/examples'>
            See who's using your Intellectual Property
          </LinkComponent>
        </p>
      </div>
    </div>
  )
}
