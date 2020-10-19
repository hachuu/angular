import { getShortAirportName } from 'app/utils/utils';
import { changeUpperToLower, kor2Eng, eng2Kor } from './utils/lang-convert';
/**
 * 검색 조건을 상황
 */
export interface SearchText {
  text: string;
  upperToLower: string;
  translateAirportKOR: string;
  translateAirportDoubleKOR: string;
  translateAirportENG: string;
}

export  function createEmptySearchText(): SearchText {
  return {
    text: '',
    upperToLower: '',
    translateAirportDoubleKOR: '',
    translateAirportENG: '',
    translateAirportKOR: '',
  };
}

/**
 * 검색 조건을 여러 상황에서 가능하도록 변환
 * @param text 공항 검색 text
 */
export const convertSearchText = (text: string): SearchText => {
  const upperToLower = changeUpperToLower(text);
  const translateAirportKOR = eng2Kor(upperToLower); // CAPSLOCK 켜져있는 경우 한글로 변환
  const translateAirportDoubleKOR = eng2Kor(text); // 쌍자음, 모음조합 고려한 한글로 변환
  const translateAirportENG = kor2Eng(text).toUpperCase(); // 한글을 영어로 변환

  return {
    text,
    upperToLower,
    translateAirportKOR,
    translateAirportDoubleKOR,
    translateAirportENG,
  };
};

/**
 * 검색 option
 */

export interface AirportOption {
  keyword?: string;
  translateAirportKOR?: string;
  translateAirportDoubleKOR?: string;
  translateAirportENG?: string;
}

/**
 * 공항 검색
 * @param items 공항 리스트
 * @param options 검색 텍스트와 옵션
 */
export const airportFilter = (items?: any[], options?: AirportOption): any [] => {
  const {
    keyword,
    translateAirportKOR,
    translateAirportDoubleKOR,
    translateAirportENG,
  } = options;

  if (!items || !keyword) {
    return [];
  } else if (keyword === '__all__') {
    return [...items];
  } else {
    const resultAirports = items.filter(
      (item =>
        ((item.linemanageRegYn === 'Y' && item.linemanageUSeYn === 'Y' && item.reYn === 'Y'))
        && (item.airportCode.startsWith(keyword)
          || (!!item.cityCode && item.cityCode.toUpperCase().startsWith(keyword.toUpperCase()))
          // tslint:disable-next-line: max-line-length
          || (kor2Eng(getShortAirportName(item.airportName, item.airportCode, 'B', item.areaCode)).toUpperCase().startsWith(keyword.toUpperCase()))
          // tslint:disable-next-line: max-line-length
          || (!!item.airportName.split('/')[1] && (kor2Eng(item.airportName.split('/')[1]).toUpperCase().startsWith(keyword.toUpperCase()) && item.airportType !== 'CTY'))

          || (getShortAirportName(item.airportName, item.airportCode, 'B', item.areaCode).startsWith(translateAirportKOR))
          || (!!item.airportName.split('/')[1] && (item.airportName.split('/')[1].startsWith(translateAirportKOR) && item.airportType !== 'CTY'))

          // || (item.airportName.toUpperCase().indexOf(translateAirportDoubleKOR.toUpperCase()) > -1)
          || (getShortAirportName(item.airportName, item.airportCode, 'B', item.areaCode).startsWith(translateAirportDoubleKOR))
          // tslint:disable-next-line: max-line-length
          || (!!item.airportName.split('/')[1] && (item.airportName.split('/')[1].startsWith(translateAirportDoubleKOR) && item.airportType !== 'CTY'))

          || item.airportCode.toUpperCase().startsWith(translateAirportENG)
          || (!!item.cityCode && item.cityCode.toUpperCase().startsWith(translateAirportENG.toUpperCase()))
          // tslint:disable-next-line: max-line-length
          || (kor2Eng(getShortAirportName(item.airportName, item.airportCode, 'B', item.areaCode)).toUpperCase().startsWith(translateAirportENG.toUpperCase()))
          // tslint:disable-next-line: max-line-length
          || (!!item.airportName.split('/')[1] && (kor2Eng(item.airportName.split('/')[1]).toUpperCase().startsWith(translateAirportENG.toUpperCase()) && item.airportType !== 'CTY'))

          // tslint:disable-next-line: max-line-length
          || (getShortAirportName(item.airportEngName, item.airportCode, 'B', item.areaCode).toUpperCase().startsWith(keyword.toUpperCase()))
          // tslint:disable-next-line: max-line-length
          || (getShortAirportName(item.airportEngName, item.airportCode, 'B', item.areaCode).toUpperCase().startsWith(translateAirportENG.toUpperCase()))
          // tslint:disable-next-line: max-line-length
          || (!!item.airportEngName.split('/')[1] && (item.airportEngName.split('/')[1].toUpperCase().startsWith(keyword.toUpperCase()) && item.airportType !== 'CTY'))
          // tslint:disable-next-line: max-line-length
          || (!!item.airportEngName.split('/')[1] && (item.airportEngName.split('/')[1].toUpperCase().startsWith(translateAirportENG.toUpperCase()) && item.airportType !== 'CTY'))

          // tslint:disable-next-line: max-line-length
          || (keyword.toUpperCase().substring(3, 4) === ' ' && item.airportCode.toUpperCase().startsWith(keyword.toUpperCase().substring(0, 3)) && item.airportName.toUpperCase().startsWith(keyword.toUpperCase().substring(4, keyword.length)))
        )
      ));
    return resultAirports;
  }
};

