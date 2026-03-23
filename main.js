document.getElementById('time').innerHTML = new Date()
function setClock() {
  const dateInfo = new Date()

  // const weekDays = ['일', '월', '화', '수', '목', '금', '토']
  // const dayOfWeek = weekDays[now.getDay()] // 숫자를 한글 요일로 변환

  // 시간, 분, 초가 10 미만일 때 앞에 0을 붙여 00:00:00 형식 유지
  const year = String(dateInfo.getFullYear()).padStart(2, '0')
  const month = String(dateInfo.getMonth()).padStart(2, '0')
  const day = String(dateInfo.getDay()).padStart(2, '0')
  const hour = String(dateInfo.getHours()).padStart(2, '0')
  const min = String(dateInfo.getMinutes()).padStart(2, '0')
  const sec = String(dateInfo.getSeconds()).padStart(2, '0')

  document.getElementById('time').innerHTML =
    year +
    '년 ' +
    month +
    '월 ' +
    day +
    '일 ' +
    // dayOfWeek +
    // '요일' +
    hour +
    '시 ' +
    min +
    '분 ' +
    sec +
    '초'
}

// 1초(1000ms)마다 setClock 함수 실행
setInterval(setClock, 1000)
updateClock()

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function yellow() {
  document.body.style.backgroundColor = 'yellow'
}
function gray() {
  document.body.style.backgroundColor = 'gray'
}
function violet() {
  document.body.style.backgroundColor = 'violet'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다.'
}
function showcss() {
  document.getElementById('fig').src = 'img/css3.png'
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}
function showjs() {
  document.getElementById('fig').src = 'img/javascript.png'
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그래밍 언어이며 웹문서에서 동작을 실행할 수 있게 한다. '
}
function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
