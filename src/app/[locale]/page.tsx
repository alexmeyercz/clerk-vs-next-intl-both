import { UserButton } from '@clerk/nextjs'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (HomePage):'

type HomePageProps = {
  params: {
    locale: string
  }
}
const HomePage: FC<HomePageProps> = ({ params }) => {
  const t = useTranslations('Index')
  const { locale } = params
  console.log(f, 'locale →', locale)
  return (
    <div>
      <h1>{t('homePage')}</h1>
      <h2>Clerk + Next-INTL</h2>
      <p>Below in the gray box there is {'<UserButton />'} tag</p>

      <div className='border-t border-b py-8 bg-slate-200'>
        <UserButton />
      </div>
      <div>Click on the link below to go to a protected page:</div>
      <div>
        <Link
          href={`${locale}/protected/`}
          className='btn mt-8'
        >
          Link to the protected page
        </Link>
      </div>
    </div>
  )
}
export default HomePage
