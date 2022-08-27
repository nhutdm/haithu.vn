import type { NextPage } from 'next'

import Container from '../components/Container'
import Card from '../components/Card'

import homeData from '../data/homeData'

const Home: NextPage = () => {
  return (
    <Container>
      <div className="py-12">
        {homeData.map((h) => (
          <div key={h.category} className="container mx-auto max-w-7xl py-4">
            <h2 className="py-4 text-2xl text-stack-800 text-center underline decoration-6 underline-offset-8 decoration-stack-400">
              {h.category}
            </h2>
            <div className="flex flex-col md:flex-row">
              {h.cards.map((c) => (
                <Card
                  key={c.title}
                  className="flex-full md:basis-3/12 text-stack-900 px-4 py-4"
                  title={c.title}
                  description={c.description}
                  imgSrc={c.imgSrc}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Home
