import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col   md:gap-28  xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Expenses Tracking</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          "Embark on a transformative journey towards financial wellness with our comprehensive suite of resources and support. From setting achievable goals to tracking spending habits, our platform is your trusted companion on the path to financial freedom."
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>
      <div className="bg-[url('/espenses.png')]  w-screen flex mr-auto bg-contain bg-no-repeat" />

    </section>
  )
}

export default Hero

