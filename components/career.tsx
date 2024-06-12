import TimeData from './timeData'

const calculateDaysPassed = () => {
  // 현재 날짜
  var currentDate = new Date()

  // 2024년 6월 1일 날짜
  var targetDate = new Date(2024, 5, 1) // 월은 0부터 시작하므로 6월은 5

  // 두 날짜 사이의 일수 계산
  var timeDiff = currentDate.getTime() - targetDate.getTime()
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

  // 년과 월로 변환
  var years = Math.floor(daysDiff / 365)
  var months = Math.floor((daysDiff % 365) / 30) // 평균 한 달은 약 30일로 계산

  // 결과 출력
  if (years === 0) {
    return months + '개월'
  } else {
    return years + '년 ' + months + '개월'
  }
}

const Career = () => {
  console.log('# => ', calculateDaysPassed())

  return (
    <section>
      <div className="mb-10">
        <TimeData
          period="2024. 06 ~ 재직중"
          title="(주)보스컨설팅"
          subTitle="개발팀 (팀장)"
          months={calculateDaysPassed()}
        />
      </div>
      <div className="mb-10">
        <TimeData
          period="2022. 06 ~ 2024. 05"
          title="(주)타이탄 네트웍스"
          subTitle="개발팀 (팀장)"
          months="1년 11개월"
        />
      </div>
      <div className="mb-10">
        <TimeData
          period="2021. 02 ~ 2022. 06"
          title="라피드액트 주식회사 [일본]"
          subTitle="IT솔루션부 (정직원)"
          months="1년 5개월"
        />
      </div>
      <div className="mb-10">
        <TimeData
          period="2017. 02 ~ 2021. 01"
          title="(주)코테크시스템"
          subTitle="연구개발팀 (대리)"
          months="4년"
        />
      </div>
    </section>
  )
}

export default Career
