import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

interface TimeDataType {
  period: string
  title: string
  subTitle: string
  extra?: any
}
const TimeData = ({ period, title, subTitle, extra }: TimeDataType) => {
  // ** Redux
  const isLargeScreen = useSelector((state: any) => state.screen.isLargeScreen)

  return (
    <>
      {isLargeScreen ? (
        <div className="grid grid-cols-3">
          <div className="flex items-start">
            <FontAwesomeIcon
              icon={faCircleDot}
              className="text-[#3d6aff] text-[12px] mr-5 mt-1"
            />
            <div className="text-sm">{period}</div>
          </div>
          <div className="col-span-2">
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-base">{subTitle}</div>
            {extra}
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="mt-0.2">
            <FontAwesomeIcon
              icon={faCircleDot}
              className="text-[#3d6aff] text-[12px] mr-5 mt-1"
            />
          </div>
          <div>
            <div className="text-lg font-semibold">{title}</div>
            <div className="text-base">{subTitle}</div>
            <div className="mt-2">
              <div className="text-sm text-slate-500">{period}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TimeData
