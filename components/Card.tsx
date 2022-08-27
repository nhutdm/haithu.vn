import Image from 'next/image'

interface CardProps {
  className: string
  title: string
  description: string
  imgSrc: string
}

function Card(props: CardProps) {
  const { className, title, description, imgSrc } = props

  return (
    <div className={className}>
      <Image layout="responsive" quality={100} alt={title} src={imgSrc} width="300" height="150" />
      <h3 className="pt-4 text-center text-lg">{title}</h3>
      <p className="font-serif text-base">{description}</p>
    </div>
  )
}

export default Card
