import TimeData from './timeData'

const Education = () => {
  // ** Handler
  const handleClickDownloadPDF = (fileName: string) => {
    const link = document.createElement('a')
    link.href = `/pdf/${fileName}`
    link.download = fileName
    link.click()
  }

  return (
    <section>
      <div className="mb-10">
        <TimeData
          period="2012.03 ~ 2017.02"
          title="대구대학교 (4년제)"
          subTitle="컴퓨터정보공학부 컴퓨터공학전공"
          extra={
            <>
              <div className="flex mt-2 space-x-2">
                <div className="border border-blue-500 text-blue-500 px-3 py-1 text-sm">
                  수석졸업
                </div>
                <div className="border border-blue-500 text-blue-500 px-3 py-1 text-sm">
                  1년 조기졸업
                </div>
                <div className="border border-blue-500 text-blue-500 px-3 py-1 text-sm">
                  학점 4.3 / 4.5
                </div>
              </div>
              <div className="flex mt-2 space-x-2">
                <div
                  className="text-blue-300 text-sm hover:underline cursor-pointer"
                  onClick={() =>
                    handleClickDownloadPDF('대구대_졸업증명서_국문.pdf')
                  }
                >
                  졸업증명서(국문)
                </div>
                <div
                  className="text-blue-300 text-sm hover:underline cursor-pointer"
                  onClick={() =>
                    handleClickDownloadPDF('대구대_졸업증명서_영문.pdf')
                  }
                >
                  졸업증명서(영문)
                </div>
                <div
                  className="text-blue-300 text-sm hover:underline cursor-pointer"
                  onClick={() =>
                    handleClickDownloadPDF('대구대_성적표_영문.pdf')
                  }
                >
                  성적증명서(영문)
                </div>
              </div>
            </>
          }
        />
      </div>
      <div className="mb-10">
        <TimeData
          period="2008.03 ~ 2011.02"
          title="중산고등학교 (인문계)"
          subTitle="컴퓨터정보공학부 컴퓨터공학전공"
        />
      </div>
    </section>
  )
}

export default Education
