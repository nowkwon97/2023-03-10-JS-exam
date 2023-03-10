const _EXAMDATA = {
  teamInformation: {
    teamNumber : 0,
    teamName: "팀명 작성",
    teamNameStory: "팀명은 이런이유로 만들었답니다!",
    teamManager: "공욱재",
    teamAllMember: [
      {
        memberNumber: 0,
        name: "공욱재",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/"
      },
      {
        memberNumber: 0,
        name: "공욱재",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/"
      },
      {
        memberNumber: 0,
        name: "공욱재",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/"
      },
      {
        memberNumber: 0,
        name: "공욱재",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/"
      },
    ]
  },
  trainingInformation: {
    subject : [  
    "웹프로그래밍기본(HTML5&CSS3)",
    "Git&GitHub",
    "Babel Javascript",
    "프레임워크 기초",
    "Project C(선택)",
    "백엔드프레임워크런타임",
    "프레임워크활용",
    "Project A(데이터 기반 주식 추천 서비스)",
    "Project B(교통정보제공서비스)",
    ]
  },
  designInformation: {
    colorSet : ["cadetblue", "salmon", "#ccc", "#333"],
    breakPoint : [ "768px", "1280px",  "1920px"]
  }
}
let mobile = "test1";
let tablet = "test2";
let desktop = "test3";

// 사이즈의 조절마다 반영을 하기 위해
// 수동으로 새로고침을 해야하는 작업이 필요하다
// 자동으로 새로고침 하는 법 탐구 필요

if (matchMedia("screen and (max-width : 767px)").matches) {
  // 화면의 width가 767px 이하일 때
  console.log(mobile);
}else if (matchMedia("screen and (max-width : 1279px)").matches) {
  // 화면의 width가 1279px 이하일 때
  console.log(tablet);
}else if (matchMedia("screen and (min-width : 1280px)").matches) {
  // 화면의 width가 1280px 이상일 때
  console.log(desktop);
}