import { useSelector } from 'react-redux'

const Etc = () => {
  // ** Redux
  const isLargeScreen = useSelector((state: any) => state.screen.isLargeScreen)

  return (
    <section>
      <div className="mt-5 mb-10">
        <div className={`${isLargeScreen ? 'grid grid-cols-3' : ''}`}>
          <div className="flex items-start">
            <div className="text-lg font-semibold">일본어</div>
          </div>
          <div className="col-span-2">
            <div>회화 : 비지니스 레벨</div>
            <div>독해 : 비지니스 레벨</div>
            <div>듣기 : 비지니스 레벨</div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-slate-200"></div>

      <div className="w-full h-px bg-slate-200"></div>

      <div className="mt-5 mb-10">
        <div className={`${isLargeScreen ? 'grid grid-cols-3' : ''}`}>
          <div className="flex items-start">
            <div className="text-lg font-semibold">병역</div>
          </div>
          <div className="col-span-2">
            <div>[군필] 해병 병장 제대 (2012.12.24 ~ 2014.09.23)</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Etc
