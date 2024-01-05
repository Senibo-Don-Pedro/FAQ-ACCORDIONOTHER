import iconPlus from '../../images/icon-plus.svg'
import iconMinus from '../../images/icon-minus.svg'
import { useState } from 'react'

const Accordion = ({ options }) => {
  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div className=''>
      <div
        className='flex justify-between items-center cursor-pointer gap-8 my-7'
        onClick={handleClick}
      >
        <p className='font-semibold hover:text-themeGrayPurple-0 w-52 sm:w-full mr3 '>
          {options.question}
        </p>
        <button>
          <img src={open ? iconMinus : iconPlus} />
        </button>
      </div>
      <div>{open ? <p className=''>{options.answer}</p> : null}</div>
    </div>
  )
}

export default Accordion
