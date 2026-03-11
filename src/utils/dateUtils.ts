/**
 * 프로젝트 수행 기간을 계산하여 반환
 * @param start 시작 날짜 (YYYY.MM 형식)
 * @param end 종료 날짜 (YYYY.MM 형식 또는 '현재')
 * @returns 프로젝트 기간 (Y년 M개월 또는 M개월 형식)
 */
export const getProjectPeriod = (start: string, end: string): string => {
  // 시작 날짜 파싱
  const [startYear, startMonth] = start.split('.').map(Number);

  // 종료 날짜 파싱
  let endYear: number;
  let endMonth: number;
  let isCurrent = false;

  if (end === '현재') {
    // 현재 날짜 사용
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
    isCurrent = true;
  } else {
    [endYear, endMonth] = end.split('.').map(Number);
  }

  // 총 개월 수 계산
  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // 기간 문자열 생성
  let periodText = '';
  if (years > 0) {
    periodText += `${years}년 `;
  }
  if (months > 0 || years === 0) {
    periodText += `${months}개월`;
  }

  // 현재 진행중인 프로젝트인 경우 물결 표시 추가
  if (isCurrent) {
    periodText += ' ~';
  }

  return periodText;
};

// 오늘 날짜 반환(YYYY.MM.DD 형식)
export const getTodayDate = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return `${year}.${month}.${day}`;
};
