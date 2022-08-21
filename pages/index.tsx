import type { NextPage } from 'next'

import Container from '../components/Container'
import Card from '../components/Card'

import servicesData from '../data/servicesData'
import productsData from '../data/productsData'

const Home: NextPage = () => {
  return (
    <Container>
      <div className="container mx-auto max-w-7xl py-4 pt-12">
        <h2 className="py-4 text-2xl text-stack-800 text-center underline decoration-6 underline-offset-8 decoration-stack-400">
          Dịch Vụ
        </h2>
        <div className="flex flex-col md:flex-row">
          {servicesData.map((d) => (
            <Card
              className="flex-full md:basis-3/12 text-stack-900 text-center px-4 py-4"
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto max-w-7xl py-4 pb-12">
        <h2 className="py-4 text-2xl text-stack-800 text-center underline decoration-6 underline-offset-8 decoration-stack-400">
          Sản Phẩm
        </h2>
        <div className="flex flex-col md:flex-row">
          {productsData.map((d) => (
            <Card
              className="flex-full md:basis-3/12 text-stack-900 text-center px-4 py-4"
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Home
