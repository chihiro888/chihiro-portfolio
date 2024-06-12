import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const Header = () => {
  // ** Redux
  const isLargeScreen = useSelector((state: any) => state.screen.isLargeScreen)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-12 pl-5 pr-3 flex justify-between items-center backdrop-blur-md bg-transparent">
        <div className="flex">
          <div className="text-sm font-semibold mr-1.5">Jinyong AHN</div>
          {isLargeScreen && <div className="text-sm">Fullstack Engineer</div>}
        </div>
        <div className="flex">
          <button className="hover:bg-slate-100 py-2 px-4 rounded text-sm flex transition duration-300">
            {isLargeScreen ? (
              <>
                <div className="mr-1.5">
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <div>URL 복사</div>
              </>
            ) : (
              <>
                <div>
                  <FontAwesomeIcon icon={faLink} />
                </div>
              </>
            )}
          </button>
          {/* <div className="text-sm">URL 복사</div> */}
        </div>
      </div>
    </>
  )
}

export default Header
