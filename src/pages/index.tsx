import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyNav from '@/components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css' // Import bootstrap CSS
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import NavWithHero from '@/components/NavWithHero'
import Footer from '@/components/Footer'
import { loadUser } from '@/lib/loadUser'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { useSelector } from 'react-redux'
type User = {
  data: {
    firstName: String
    lastName: String
    city: String
    phoneNumber: String
    ffavoriteBarber: Number
    email: String
    password: String
  }
}
export default function Home() {
  const User = useSelector((state: any) => state.User)
  const loggedIn = useSelector((state: any) => state.isLoggedIn)
  return (
    <>
      <Head>
        <title>Classy Cutz</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg'>
        <NavWithHero User={User} loggedIn={loggedIn} />
        <Hero />
        <Testimonials />

        <Footer />
      </main>
    </>
  )
}
// export const getStaticProps: GetStaticProps<{
//   user: User
// }> = async () => {
//   // const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const user = userData
//   return { props: { user } }
// }

// export async function getStaticProps(data: any) {
//   // Instead of fetching your `/api` route you can call the same
//   // function directly in `getStaticProps`
//   const user = await loadUser(data)

//   // Props returned will be passed to the page component
//   return { props: { user } }
// }
