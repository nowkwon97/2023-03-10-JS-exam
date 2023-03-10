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

const root = document.getElementById('root');

root.style.width = "100vw";
root.style.height = "300vh";
root.style.backgroundColor = "#CCC";
root.style.display = "flex";
root.style.flexDirection = "column";

// tag생성 함수
function elementMaker(tagName, parent, attributeName, attributeValue) {
  const element = document.createElement(tagName);
  element.setAttribute(attributeName, attributeValue);
  parent.appendChild(element);
};

// 메인 구조 작성
elementMaker('header', root, 'id', 'header');
elementMaker('div', root, 'id', 'kdtExplain');
elementMaker('div', root, 'id', 'kdtBeforeAfter');
elementMaker('div', root, 'id', 'kdtSubject');
elementMaker('div', root, 'id', 'kdtProject');
elementMaker('div', root, 'id', 'teamIntroduce');
elementMaker('footer', root, 'id', 'footer');

// id의 값을 반환하는 변수 작성
const header = document.getElementById('header');
const kdtExplain = document.getElementById('kdtExplain');
const kdtBeforeAfter = document.getElementById('kdtBeforeAfter');
const kdtSubject = document.getElementById('kdtSubject');
const kdtProject = document.getElementById('kdtProject');
const teamIntroduce = document.getElementById('teamIntroduce');
const footer = document.getElementById('footer');

// tag style 설정 함수
function elementStyling (element, width, height, bgColor) {
  element.style.width = width;
  element.style.height = height;
  element.style.backgroundColor = bgColor;
};

// 메인 구조 width, height, bgColor 설정
elementStyling(header, "100%", "200px", "#5F9EA0");
elementStyling(kdtExplain, "100%", "400px", "#C9BDBD");
elementStyling(kdtBeforeAfter, "100%", "600px", "#D9D9D9");
elementStyling(kdtSubject, "100%", "400px", "#C9BDBD");
elementStyling(kdtProject, "100%", "400px", "#D9D9D9");
elementStyling(teamIntroduce, "100%", "900px", "#C9BDBD");
elementStyling(footer, "100%", "150px", "#867E7E");

// 메인 구조 안의 서브 구조 작성

// header 안의 div styling
elementMaker('div', header);
elementMaker('div', header);
header.children[0].style.width = "100%";
header.children[0].style.height = "60%";
header.children[1].style.width = "100%";
header.children[1].style.height = "40%";
const headerH1Tag = document.createElement('h1');
headerH1Tag.textContent = "KDT";
header.children[0].appendChild(headerH1Tag);

const headerH4Tag = document.createElement('h4');
headerH4Tag.textContent = "기업에서 요구하는 프레임워크를 활용한 풀스텍개발자 양성 과정";
header.children[1].appendChild(headerH4Tag);

// kdtExplain 안의 div styling
elementMaker('div', kdtExplain);
elementMaker('div', kdtExplain);
kdtExplain.children[0].style.width = "100%";
kdtExplain.children[0].style.height = "15%";
kdtExplain.children[1].style.width = "100%";
kdtExplain.children[1].style.height = "85%";
const kdtExplainH2Tag = document.createElement('h2');
kdtExplainH2Tag.textContent = "KDT란?";
kdtExplain.children[0].appendChild(kdtExplainH2Tag);

const kdtExplainSpanTag = document.createElement('span');
kdtExplainSpanTag.textContent = "KDT란~~~~~~다.";
kdtExplainSpanTag.style.fontWeight = "bold";
kdtExplain.children[1].appendChild(kdtExplainSpanTag);

// kdtBeforeAfter 안의 div styling
elementMaker('div', kdtBeforeAfter);
elementMaker('div', kdtBeforeAfter);
kdtBeforeAfter.children[0].style.width = "100%";
kdtBeforeAfter.children[0].style.height = "15%";
kdtBeforeAfter.children[1].style.width = "100%";
kdtBeforeAfter.children[1].style.height = "85%";
const kdtBeforeAfterH2Tag = document.createElement('h2');
kdtBeforeAfterH2Tag.textContent = "KDT훈련 전 후 모습";
kdtBeforeAfter.children[0].appendChild(kdtBeforeAfterH2Tag);

const kdtBeforeAfterSpanTag = document.createElement('span');
kdtBeforeAfterSpanTag.textContent = "KDT훈련 전 후 모습은 ~~~다.";
kdtBeforeAfterSpanTag.style.fontWeight = "bold";
kdtBeforeAfter.children[1].appendChild(kdtBeforeAfterSpanTag);

// kdtSubject 안의 div styling
elementMaker('div', kdtSubject);
elementMaker('div', kdtSubject);
kdtSubject.children[0].style.width = "100%";
kdtSubject.children[0].style.height = "15%";
kdtSubject.children[1].style.width = "100%";
kdtSubject.children[1].style.height = "85%";
const kdtSubjectH2Tag = document.createElement('h2');
kdtSubjectH2Tag.textContent = "KDT과목";
kdtSubject.children[0].appendChild(kdtSubjectH2Tag);

const kdtSubjectSpanTag = document.createElement('span');
kdtSubjectSpanTag.textContent = "KDT과목~~~";
kdtSubject.children[1].appendChild(kdtSubjectSpanTag);

// kdtProject 안의 div styling
elementMaker('div', kdtProject);
elementMaker('div', kdtProject);
kdtProject.children[0].style.width = "100%";
kdtProject.children[0].style.height = "15%";
kdtProject.children[1].style.width = "100%";
kdtProject.children[1].style.height = "85%";
const kdtProjectH2Tag = document.createElement('h2');
kdtProjectH2Tag.textContent = "수행중인 프로젝트";
kdtProject.children[0].appendChild(kdtProjectH2Tag);

const kdtProjectSpanTag = document.createElement('span');
kdtProjectSpanTag.textContent = "수행중인 프로젝트~~~~";
kdtProject.children[1].appendChild(kdtProjectSpanTag);

// teamIntroduce styling
teamIntroduce.style.display = "flex";
teamIntroduce.style.flexDirection = "column";
teamIntroduce.style.justifyContent = "space-around";
// teamIntroduce 의 소개 란의 개수를 결정하는 배열
// 배열의 개수 만큼 소개 란 생성
let makeIntroduceBoxArray = ["box1", "box2", "box3", "box4", "box5"];
// 사진(원), 소개(박스) 로 구성된 container div를 만드는 함수
function introdueBoxMaker(containerElement, childElementOne, childElementTwo) {
  // makeIntroduceBoxArray의 요소 갯수 만큼 반복 진행
  for (let i = 0; i < makeIntroduceBoxArray.length; i++) {
    // 요소 만들고 구조를 생성하는 부분
    const makeIntroduceBox = document.createElement(containerElement);
    const makeCircle = document.createElement(childElementOne);
    const makeBox = document.createElement(childElementTwo);
    teamIntroduce.appendChild(makeIntroduceBox);
    // 짝수 번째의 박스 원은 배치를 바꿔주는 조건
    if(i%2 === 0) {
      makeIntroduceBox.appendChild(makeCircle);
      makeIntroduceBox.appendChild(makeBox);
    }else {
      makeIntroduceBox.appendChild(makeBox);
      makeIntroduceBox.appendChild(makeCircle);
    }
    makeIntroduceBox.style.width = "100%";
    makeIntroduceBox.style.height = "15%"
    makeIntroduceBox.style.display = "flex";
    makeIntroduceBox.style.justifyContent = "space-around";
    makeIntroduceBox.style.alignContent = "center"

    makeCircle.style.width = "10%";
    makeCircle.style.height = "100%";
    makeCircle.style.backgroundColor = "#CB5F5F";
    makeCircle.style.borderRadius = "50%"

    makeBox.style.width = "70%";
    makeBox.style.height = "100%";
    makeBox.style.backgroundColor = "#62A0DA";
    makeBox.style.borderRadius = "20px";
  };
};
// introdueBoxMaker 함수 호출
introdueBoxMaker('div','div','div');

// footer styling


/// 화면 width 크기 변경에 따라 화면에 출력하는 구문
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