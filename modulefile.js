const _EXAMDATA = {
  teamInformation: {
    teamNumber : 5,
    teamName: "세동서유",
    teamNameStory: "세종, 동구, 서구, 유성구의 대표들로 구성하였습니다.",
    teamManager: "김동주",
    teamAllMember: [
      {
        memberNumber: 1,
        name: "김동주",
        teamPosition: "팀장",
        githubAddress: "https://www.github.com/AmondChocolateShake"
      },
      {
        memberNumber: 2,
        name: "이재권",
        teamPosition: "팀원",
        githubAddress: "https://www.github.com/nowkwon97"
      },
      {
        memberNumber: 3,
        name: "정지은",
        teamPosition: "팀원",
        githubAddress: "https://www.github.com/jiny43"
      },
      {
        memberNumber: 4,
        name: "최대건",
        teamPosition: "팀원",
        githubAddress: "https://www.github.com/dgchoi3904"
      },
      {
        memberNumber: 5,
        name: "임지성",
        teamPosition: "팀원",
        githubAddress: "https://www.github.com/WJKK21"
      }
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

// body styleing
document.body.style.display = "flex";
document.body.style.alignContent = "center";
document.body.style.justifyContent = "center";
document.body.style.backgroundColor = "#ABC9CA";

const root = document.getElementById('root');

root.style.width = "80vw";
root.style.height = "300vh";
root.style.backgroundColor = "#CCC";
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.justifyContent = "center";
root.style.alignItems = "center";

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
elementStyling(kdtExplain, "100%", "400px", "#BBBBBB");
elementStyling(kdtBeforeAfter, "100%", "600px", "#D9D9D9");
elementStyling(kdtSubject, "100%", "400px", "#BBBBBB");
elementStyling(kdtProject, "100%", "400px", "#D9D9D9");
elementStyling(teamIntroduce, "100%", "900px", "#BBBBBB");
elementStyling(footer, "100%", "150px", "#333333");

// 메인 구조 안의 서브 구조 작성

// header 안의 div styling
elementMaker('div', header);
elementMaker('div', header);
header.style.fontFamily = "Climate Crisis";
header.style.fontWeight = "bold";
header.children[0].style.width = "100%";
header.children[0].style.height = "60%";
header.children[1].style.width = "100%";
header.children[1].style.height = "40%";
const headerH1Tag = document.createElement('div');
headerH1Tag.textContent = "KDT";
headerH1Tag.style.marginLeft = "50px";
headerH1Tag.style.fontSize = "70px"
headerH1Tag.style.color = "#FA8072";
header.children[0].appendChild(headerH1Tag);

const headerH4Tag = document.createElement('div');
headerH4Tag.textContent = "기업에서 요구하는 프레임워크를 활용한 풀스텍개발자 양성 과정";
headerH4Tag.style.marginLeft = "50px";
headerH4Tag.style.fontSize = "30px";

header.children[1].appendChild(headerH4Tag);

// kdtExplain 안의 div styling
elementMaker('div', kdtExplain);
elementMaker('div', kdtExplain);
elementMaker('div', kdtExplain);
elementMaker('div', kdtExplain);
kdtExplain.children[0].style.width = "100%";
kdtExplain.children[0].style.height = "15%";
kdtExplain.children[1].style.width = "100%";
kdtExplain.children[1].style.height = "20%";
kdtExplain.children[2].style.width = "100%";
kdtExplain.children[2].style.height = "15%";
kdtExplain.children[3].style.width = "100%";
kdtExplain.children[3].style.height = "20%";
const kdtExplainH2Tag = document.createElement('h2');
kdtExplainH2Tag.textContent = "KDT란?";
kdtExplainH2Tag.style.marginLeft = "30px";
kdtExplainH2Tag.style.marginRight = "30px";
kdtExplain.children[0].appendChild(kdtExplainH2Tag);

const kdtExplainPTag = document.createElement('p');
kdtExplainPTag.textContent = "KDT란 K-digital Training의 약자로, 우리나라 디지털, 신기술 분야에서 핵심적인 역할을 담당할 인재를 양성하기 위해 고용노동부와 함께하는 훈련과정이다.";
kdtExplainPTag.style.marginLeft = "30px";
kdtExplainPTag.style.marginRight = "30px";
kdtExplainPTag.style.fontWeight = "bold";
kdtExplain.children[1].appendChild(kdtExplainPTag);

const kdtExplainH2TagTwo = document.createElement('h2');
kdtExplainH2TagTwo.textContent = "KDT 훈련 방식";
kdtExplainH2TagTwo.style.marginLeft = "30px";
kdtExplainH2TagTwo.style.marginRight = "30px";
kdtExplain.children[2].appendChild(kdtExplainH2TagTwo);

const kdtExplainPTagTwo = document.createElement('P');
kdtExplainPTagTwo.textContent = "디지터 분야 기업들과 혁신 훈련기관이 협약을 맺고 함께 설계한 과정으로 평균 6개월 주5일 8시간 씩 운영되는 집중적인 훈련과정이다. 기업 참여를 통해 프로젝트(전체 훈련과정의 30%)훈련으로 진행한다. 또한 기존의 강의형 지식전달이 아닌, 경험 문제 해결에 중점을 둔 개인 맞춤형 훈련과정 등 효과적인 훈련방식을 적용했다.";
kdtExplainPTagTwo.style.marginLeft = "30px";
kdtExplainPTagTwo.style.marginRight = "30px";
kdtExplainPTagTwo.style.fontWeight = "bold";
kdtExplain.children[2].appendChild(kdtExplainPTagTwo);

// kdtBeforeAfter 안의 div styling
elementMaker('div', kdtBeforeAfter);
elementMaker('div', kdtBeforeAfter);
kdtBeforeAfter.children[0].style.width = "100%";
kdtBeforeAfter.children[0].style.height = "15%";
kdtBeforeAfter.children[1].style.width = "100%";
kdtBeforeAfter.children[1].style.height = "85%";
const kdtBeforeAfterH2Tag = document.createElement('h2');
kdtBeforeAfterH2Tag.textContent = "KDT훈련 전 후 모습";
kdtBeforeAfterH2Tag.style.marginLeft = "30px";
kdtBeforeAfterH2Tag.style.marginRight = "30px";
kdtBeforeAfter.children[0].appendChild(kdtBeforeAfterH2Tag);

const kdtBeforeAfterPTag = document.createElement('P');
kdtBeforeAfterPTag.textContent = "KDT훈련 전 후 모습은 ~~~다.";
kdtBeforeAfterPTag.style.marginLeft = "30px";
kdtBeforeAfterPTag.style.marginRight = "30px";
kdtBeforeAfterPTag.style.fontWeight = "bold";
kdtBeforeAfter.children[1].appendChild(kdtBeforeAfterPTag);

// kdtSubject 안의 div styling
elementMaker('div', kdtSubject);
elementMaker('div', kdtSubject);
elementMaker('ul', kdtSubject, 'id', 'ul');
for (let i = 0; i < _EXAMDATA.trainingInformation.subject.length; i++) {
  elementMaker('li', ul, 'id', `li${i}`);
};
console.dir(li0);
console.log(_EXAMDATA.trainingInformation.subject);
li0.textContent = _EXAMDATA.trainingInformation.subject[0];
li1.textContent = _EXAMDATA.trainingInformation.subject[1];
li2.textContent = _EXAMDATA.trainingInformation.subject[2];
li3.textContent = _EXAMDATA.trainingInformation.subject[3];
li4.textContent = _EXAMDATA.trainingInformation.subject[4];
li5.textContent = _EXAMDATA.trainingInformation.subject[5];
li6.textContent = _EXAMDATA.trainingInformation.subject[6];
li7.textContent = _EXAMDATA.trainingInformation.subject[7];
li8.textContent = _EXAMDATA.trainingInformation.subject[8];

// 아래 반복문이 안되는 이유는 무엇일까?
// for (let i = 0; i < _EXAMDATA.trainingInformation.subject.length; i++) {
//   li[i].textContent = _EXAMDATA.trainingInformation.subject[i];
// };

kdtSubject.children[0].style.width = "100%";
kdtSubject.children[0].style.height = "15%";
// kdtSubject.children[1].style.width = "100%";
// kdtSubject.children[1].style.height = "10%";
const kdtSubjectH2Tag = document.createElement('h2');
kdtSubjectH2Tag.textContent = "KDT과목";
kdtSubjectH2Tag.style.marginLeft = "30px";
kdtSubjectH2Tag.style.marginRight = "30px";
kdtSubject.children[0].appendChild(kdtSubjectH2Tag);

// const kdtSubjectPTag = document.createElement('P');
// kdtSubjectPTag.textContent = "KDT과목~~";
// kdtSubjectPTag.style.fontWeight = "bold";
// kdtSubjectPTag.style.marginLeft = "30px";
// kdtSubjectPTag.style.marginRight = "30px";
// kdtSubject.children[1].appendChild(kdtSubjectPTag);

// kdtProject 안의 div styling
elementMaker('div', kdtProject);
elementMaker('div', kdtProject);
kdtProject.children[0].style.width = "100%";
kdtProject.children[0].style.height = "15%";
kdtProject.children[1].style.width = "100%";
kdtProject.children[1].style.height = "85%";
const kdtProjectH2Tag = document.createElement('h2');
kdtProjectH2Tag.textContent = "수행중인 프로젝트";
kdtProjectH2Tag.style.marginLeft = "30px";
kdtProjectH2Tag.style.marginRight = "30px";
kdtProject.children[0].appendChild(kdtProjectH2Tag);

const kdtProjectPTag = document.createElement('P');
kdtProjectPTag.textContent = "수행중인 프로젝트~~~~";
kdtProjectPTag.style.fontWeight = "bold";
kdtProjectPTag.style.marginLeft = "30px";
kdtProjectPTag.style.marginRight = "30px";
kdtProject.children[1].appendChild(kdtProjectPTag);

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
    // 프로필 사진이 들어갈 circle에 id 부여 circle0 ~ circle4
    makeCircle.setAttribute("id", `circle${i}`);
    // 프로필 사진이 들어갈 Box에 id 부여 Box0 ~ Box4
    makeBox.setAttribute("id", `Box${i}`);
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
    makeCircle.style.backgroundColor = "#5F9EA0";
    makeCircle.style.borderRadius = "50%"

    makeBox.style.width = "60%";
    makeBox.style.height = "100%";
    makeBox.style.backgroundColor = "#CCCCCC";
    makeBox.style.borderRadius = "20px";
  };
};
// introdueBoxMaker 함수 호출
introdueBoxMaker('div','div','div');
console.dir(circle0.style); 
// circle 에 이미지 넣기 및 설정
circle0.style.backgroundImage = 'url("./images.png")';
circle0.style.backgroundPosition = "center";
circle0.style.backgroundSize = "250px";

circle1.style.backgroundImage = 'url("./images.png")';
circle1.style.backgroundPosition = "center";
circle1.style.backgroundSize = "250px";

circle2.style.backgroundImage = 'url("./images.png")';
circle2.style.backgroundPosition = "center";
circle2.style.backgroundSize = "250px";

circle3.style.backgroundImage = 'url("./images.png")';
circle3.style.backgroundPosition = "center";
circle3.style.backgroundSize = "250px";

circle4.style.backgroundImage = 'url("./images.png")';
circle4.style.backgroundPosition = "center";
circle4.style.backgroundSize = "250px";

// 반복문이 시행되지 않는 이유는..?!
// for (let i = 0; i < makeIntroduceBoxArray.length; i++) {
//   circle[i].style.backgroundImage = 'url("./images.png")';
//   circle[i].style.backgroundPosition = "center";
//   circle[i].style.backgroundSize = "250px";
// }

// footer styling




// matchMedia test용
let mobile = "test1";
let tablet = "test2";
let desktop = "test3";


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