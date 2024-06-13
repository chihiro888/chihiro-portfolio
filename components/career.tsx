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
  return (
    <section>
      <div className="mb-10">
        <TimeData
          period="2024. 06 ~ 재직중"
          company="(주)보스컨설팅"
          position="개발팀 (팀장)"
          months={calculateDaysPassed()}
        />
      </div>
      <div className="mb-10">
        <TimeData
          period="2022. 06 ~ 2024. 05"
          company="(주)타이탄 네트웍스"
          position="개발팀 (팀장)"
          months="1년 11개월"
          extra={
            <>
              <div className="text-sm">
                <div>세***, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>스***, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>메***, NFT 마켓플레이스 개발 및 유지보수</div>
                <div>E*********, NFT 마켓플레이스 개발</div>
                <div>이****, 이더리움 기반 복권 시스템 개발</div>
                <div>F**, 강아지 산책 기반 마이닝 시스템 개발</div>
                <div>BC.GAME, 바카라 Websocket 기반 자동배팅 시스템 개발</div>
                <div>M****, 스테이킹 시스템 프론트엔드 개발</div>
                <div>K*****, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>K*****, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>k*****, 워드프레스 우커머스 결제 플러그인 개발</div>
                <div>K***, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>W****, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div className="mt-2">- React, Next.js로 프론트 개발</div>
                <div>- Nest.js로 백엔드 개발</div>
                <div>- Mysql 데이터베이스 경험</div>
                <div>- Figma로 화면 기획 및 설계</div>
                <div>- AWS EC2, Cloudflare, Ubuntu, Nginx, PM2 경험</div>
              </div>
            </>
          }
          mobileExtra={
            <>
              <div className="text-sm mt-3">
                <div>세***, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>스***, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>메***, NFT 마켓플레이스 개발 및 유지보수</div>
                <div>E*********, NFT 마켓플레이스 개발</div>
                <div>이****, 이더리움 기반 복권 시스템 개발</div>
                <div>F**, 강아지 산책 기반 마이닝 시스템 개발</div>
                <div>BC.GAME, 바카라 Websocket 기반 자동배팅 시스템 개발</div>
                <div>M****, 스테이킹 시스템 프론트엔드 개발</div>
                <div>K*****, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>K*****, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>k*****, 워드프레스 우커머스 결제 플러그인 개발</div>
                <div>K***, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div>W****, 네트워크 마케팅 전산 시스템 개발 및 유지보수</div>
                <div className="mt-2">- React, Next.js로 프론트 개발</div>
                <div>- Nest.js로 백엔드 개발</div>
                <div>- Mysql 데이터베이스 경험</div>
                <div>- Figma로 화면 기획 및 설계</div>
                <div>- AWS EC2, Cloudflare, Ubuntu, Nginx, PM2 경험</div>
              </div>
            </>
          }
        />
      </div>
      <div className="mb-10">
        <TimeData
          period="2021. 02 ~ 2022. 06"
          company="라피드액트 주식회사 [일본]"
          position="IT솔루션부 (정직원)"
          months="1년 5개월"
          extra={
            <>
              <div className="text-sm">
                <div>큐슈전력, 요금청구 데이터 리커버리 및 배치 유지보수</div>
                <div>리쿠르트, 핫페퍼그루메 추가기능 개발 및 유지보수</div>
                <div>세이코, 의학용품 배송 통합 관리 시스템 개발</div>
                <div className="mt-2">
                  - Vue, Nuxt.js, JSP, Thymeleaf, Blade, HTML5, CSS, Jquery로
                  프론트 개발
                </div>
                <div>- Spring FW, Seasar2 FW, R2 FW로 백엔드 개발</div>
                <div>- Oracle, Postgresql 데이터베이스 경험</div>
                <div>- JUnit으로 단위 테스트</div>
                <div>- Ubuntu, Apache, Tomcat 경험</div>
              </div>
            </>
          }
          mobileExtra={
            <>
              <div className="text-sm mt-3">
                <div>큐슈전력, 요금청구 데이터 리커버리 및 배치 유지보수</div>
                <div>리쿠르트, 핫페퍼그루메 추가기능 개발 및 유지보수</div>
                <div>세이코, 의학용품 배송 통합 관리 시스템 개발</div>
                <div className="mt-2">
                  - Vue, Nuxt.js, JSP, Thymeleaf, HTML5, CSS, Jquery로 프론트
                  개발
                </div>
                <div>- Spring FW, Seasar2 FW, R2 FW로 백엔드 개발</div>
                <div>- MySQL, MongoDB, Memcached, Redis 데이터베이스 경험</div>
                <div>- JMeter으로 스트레스 테스트</div>
                <div>- Ubuntu, Apache, Tomcat 경험</div>
              </div>
            </>
          }
        />
      </div>
      <div className="mb-10">
        <TimeData
          period="2017. 02 ~ 2021. 01"
          company="(주)코테크시스템"
          position="연구개발팀 (대리)"
          months="4년"
          extra={
            <>
              <div className="text-sm">
                <div>LG CNS, LearningNet을 개발 및 유지보수</div>
                <div>LG CNS, 설문조사 오픈소스 LimeSurvey 연동 개발</div>
                <div>국가평생교육원, K-MOOC를 개발 및 유지보수</div>
                <div>시스코 화상회의 제어 통합 관리자 개발 및 유지보수</div>
                <div>현대모비스, 자기주도학습시스템 개발 및 유지보수</div>
                <div>YES24, SEY.IO & SEYMALL 개발 및 유지보수</div>
                <div>YES24, SEY.IO ORBS 기반 메인넷 구축</div>
                <div>YES24, STORY24 사용자 및 관리자 개발</div>
                <div>Pandas를 이용한 시계열 데이터 전처리</div>
                <div className="mt-2">
                  - React, Next.js, Mako, HTML5, CSS, Jquery로 프론트 개발
                </div>
                <div>- Django, Spring Boot로 백엔드 개발</div>
                <div>- MySQL, MongoDB, Memcached, Redis 데이터베이스 경험</div>
                <div>
                  - AWS EC2 & S3, Ubuntu, Nginx, Uwsgi, Gnicorn, PM2 경험
                </div>
              </div>
            </>
          }
          mobileExtra={
            <>
              <div className="text-sm mt-3">
                <div>LG CNS, LearningNet을 개발 및 유지보수</div>
                <div>국가평생교육원, K-MOOC를 개발 및 유지보수</div>
                <div>시스코 화상회의 제어 통합 관리자 개발 및 유지보수</div>
                <div>현대모비스, 자기주도학습시스템 개발 및 유지보수</div>
                <div>YES24, SEY.IO & SEYMALL 개발 및 유지보수</div>
                <div>YES24, SEY.IO ORBS 기반 메인넷 구축</div>
                <div>YES24, STORY24 사용자 및 관리자 개발</div>
                <div>Pandas를 이용한 시계열 데이터 전처리</div>
                <div className="mt-2">
                  - React, Next.js, HTML5, CSS, Jquery로 프론트 개발
                </div>
                <div>- Django, Spring Boot로 백엔드 개발</div>
                <div>- MySQL, MongoDB, Memcached, Redis 데이터베이스 경험</div>
                <div>- AWS EC2 & S3, Ubuntu, Nginx, Uwsgi, Gnicorn 경험</div>
              </div>
            </>
          }
        />
      </div>
    </section>
  )
}

export default Career
