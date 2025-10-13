import Image from "next/image"
import Link from "next/link"

interface Props {
  index: number
  image: string
  title: string
  description: string
  link: string
}

const Card: React.FC<Props> = ({ image, title, description, link }) => {
  return (
    <Link href={link} aria-label={title}>
      <div
        className="group relative flex h-auto flex-col justify-evenly rounded-lg border border-zinc-200 p-6 shadow-xl transition hover:shadow-2xl hover:z-10 focus-visible:z-10"
      >
        {/* Image container — removed overflow-hidden so zoom can overflow */}
        <div className="relative h-fit rounded-md flex justify-center items-center">
          <Image
            src={image}
            alt="Protocol Logo"
            loading="lazy"
            width={700}
            height={700}
            className="h-64 w-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="relative mt-4 h-fit">
          <h3 className="text-center text-2xl font-semibold leading-6 tracking-tight text-gray-800">
            {title}
          </h3>
          <p className="mb-6 mt-2 text-center text-black">
            {description.split("\n").map((item, key) => (
              <span key={key}>
                {item}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="flex items-center justify-center text-center">
          <span className="relative flex items-center justify-center px-3 py-1 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-secondary/30 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
            <span className="relative text-base font-medium text-black">
              Learn more
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default Card
