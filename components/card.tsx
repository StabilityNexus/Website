import Image from "next/image"
import Link from "next/link"

interface Props {
  index: number
  image: string
  title: string
  description: string
  link: string
}

const Card: React.FC<Props> = ({ index, image, title, description, link }) => {
  return (
    <Link href={link}>
      <div
        className="group relative flex h-auto flex-col justify-evenly overflow-visible rounded-lg border border-zinc-200 p-6 shadow-xl"
      >
        <div className="relative h-fit overflow-visible rounded-md">
          <Image
            src={image}
            alt="Protocol Logo"
            loading="lazy"
            width="700"
            height="700"
            className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 group-hover:z-10"
          />
        </div>
        <div className="relative mt-4 h-fit">
          <h3 className="text-center  text-2xl font-semibold leading-6 tracking-tight text-gray-800">
            {title}
          </h3>
          <p className="mb-6 mt-2 text-center text-black">
            {description.split("\n").map((item, key) => {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
