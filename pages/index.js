import Stats from '@/components/Stats'
import UserContainer from '@/components/UserContainer'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'



export default function Home({users}) {
  return (
    <>
      <Head>
        <title>Lendsqr Frontend Interview</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className='container'>
          <section>
            <Stats />
            <UserContainer users={users} />
          </section>
        </div>
      </Layout>
    </>
  )
}

export const fetchData = async () => {
  const response = await fetch(' https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
  const data = await response.json()

  return data
}


export async function getStaticProps() {
  const users = await fetchData()

  return { props: { users}}

}