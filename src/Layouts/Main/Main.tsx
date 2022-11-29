import illustrationWorking from "@/assets/images/illustration-working.svg"
import { ButtonCircle, ShortenSearch } from "@/Components"
import "./main-styles.css"

export interface MainInterface { }

const Main: React.FC<MainInterface> = () => {
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
      </section>

    </main>
  )
}

export default Main
