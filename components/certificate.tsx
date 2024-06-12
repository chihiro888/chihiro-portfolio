import TimeData from './timeData'

const Certificate = () => {
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
          period="2020.03"
          title="新 JLPT N3급"
          subTitle="일본국제교육협회"
        />
      </div>
      <div className="mb-10">
        <TimeData
          period="2018.08"
          title="정보처리기사"
          subTitle="한국산업인력공단"
        />
      </div>
    </section>
  )
}

export default Certificate
