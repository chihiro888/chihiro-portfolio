import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

interface LinkButtonType {
  src: string
  label: string
  link?: string
}

const LinkButton = ({ src, label, link }: LinkButtonType) => {
  const handleClickLink = () => {
    if (link) {
      window.open(link, '_blank')
    }
  }

  return (
    <>
      <div
        className="w-full hover:bg-gray-100 cursor-pointer transition duration-300"
        onClick={handleClickLink}
      >
        <div className="flex border py-2 px-4 justify-between">
          <div className="mr-5">
            <div className="flex">
              <img className="w-6 h-6 mr-4" src={src} alt="github" />
              <div>{label}</div>
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-slate-500"
              icon={faArrowUpRightFromSquare}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LinkButton
