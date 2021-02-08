import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json'
import {initiateCheckout} from '../lib/payments.js'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Steven Donation Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Steven's donation site
        </h1>

        <div className={styles.grid}>
          {products.map(product =>{
          const {title,id} = product;
          return(
          <p key={id}>
            <button className={styles.button} onClick={() => {
                      initiateCheckout({
                        lineItems: [
                          {
                            price:id,
                            quantity:1
                          }
                        ]
                      })
                    }}>{title}</button>
          </p>
            )})}
        </div>
      </main>
    </div>
  )
}
