import { useTranslations } from 'next-intl'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (HomePage):'

const HomePage: FC = () => {
  const t = useTranslations('Index')
  return (
    <div>
      <h1>{t('homePage')}</h1>
    </div>
  )
}
export default HomePage
