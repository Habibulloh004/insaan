import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
  // Await the cookieStore
  const cookieStore = await cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ru'

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  }
})