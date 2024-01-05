import headerImgBig from '../images/background-pattern-desktop.svg'
import headerImgSmall from '../images/background-pattern-mobile.svg'
import iconStar from '../images/icon-star.svg'
import Accordion from './component/Accordion'

const App = () => {
  const options = [
    {
      question: 'What is Frontend Mentor, and how will it help me?',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve thier frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building",
    },
    {
      question: 'Is Frontend Mentor free?',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve thier frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building",
    },
    {
      question: 'Can I use Frontend Mentor projects in my portfolio?',
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve thier frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building",
    },
    {
      question: "How can I get help if I'm stuck in a challenge?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve thier frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building",
    },
  ]
  return (
    <main className=' min-h-screen relative bg-themePink-0 flex justify-center items-center p-6'>
      <header className='absolute top-0 left-0 z-10'>
        <div className='w-screen'>
          <img src={headerImgBig} className='hidden sm:block w-full' />
          <img className='sm:hidden w-full' src={headerImgSmall} />
        </div>
      </header>
      <div
        id='card'
        className='z-50 bg-themeWhite-0 p-5 rounded-md shadow-lg mt-8 max-w-[500px]'
      >
        <div className='flex justify-start gap-5 items-center '>
          <img src={iconStar} className='w-6' />
          <p className='font-bold text-3xl'>FAQs</p>
        </div>
        <Accordion options={options[0]} />
        <Accordion options={options[1]} />
        <Accordion options={options[2]} />
        <Accordion options={options[3]} />
      </div>
    </main>
  )
}

export default App
