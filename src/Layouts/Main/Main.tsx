import illustrationWorking from "@/assets/images/illustration-working.svg"
import IconBrandRecognition from "@/assets/images/icon-brand-recognition.svg"
import IconDetailedRecords from "@/assets/images/icon-detailed-records.svg"
import IconFullyCustomizable from "@/assets/images/icon-fully-customizable.svg"
import { ButtonCircle, ShortenSearch, StatisticsCard } from "@/Components"
import "./main-styles.css"
import { getShorterLInkAction } from "@/Services/Actions/get-shorter-link.action"
import { useEffect, useState } from "react"

export interface MainInterface { }

const Main: React.FC<MainInterface> = () => {
  const [link, setLInk] = useState()
  const fetchShorterLink = async () => {
    const { data } = await getShorterLInkAction()
    setLInk(data);
  }

  useEffect(() => {
    try {
      fetchShorterLink().then(() => console.log(link))
    } catch (error) {
      console.log("🚀 ~ file: Main.tsx:23 ~ useEffect ~ error", error)
    }
  }, [])

  return (
    <main className="main__container">

      <section className="welcome__container">
        <article className="welcome__intro-information">
          <span className="welcome__intro-title">More than just shorter links</span>
          <p>
            Build your brand's recognition and get detailed
            insights on how your links are performing.
          </p>
          <div className="welcome__intro-button-container">
            <ButtonCircle name="Get Started" handleClick={() => { }} />
          </div>
        </article>
        <article className="welcome__intro-img">
          <figure>
            <img src={illustrationWorking} alt="Illustration Working" />
          </figure>
        </article>
      </section>

      <section className="content__information">
        <ShortenSearch />
        <article className="content__advance-statistics">
          <h3>Advanced Statics</h3>
          <p>
            Track how your links are performing across the web with
            our advanced statistics dashboard.
          </p>
          <div className="content__advance-statistics-card-container">
            <div className="content__advance-statistics-card-list">
              <StatisticsCard
                title='Brand Recognition'
                content="Boost your brand recognition with each click. Generic links don't mean a things. Branded links help instil confidence in you content."
                image={IconBrandRecognition}
                alignPosition=''
              />
              <StatisticsCard
                title='Detailed Records'
                content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                image={IconDetailedRecords}
                alignPosition='center'
                applyMargin={true}
              />
              <StatisticsCard
                title='Fully Customizable'
                content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
                image={IconFullyCustomizable}
                alignPosition='end'
              />
            </div>
          </div>
        </article>
      </section>

    </main>
  )
}

export default Main
