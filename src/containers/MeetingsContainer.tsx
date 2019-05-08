import React from "react";
import MeetingsView from "../components/MeetingsView/MeetingsView";
import { IClub } from "../common/types";

interface MeetingsContainerState {
  clubListData: IClub[];
}

// FIXME: interface 분리를 하여 아래와 같은 방식으로 작성하면 더 직관적이다
// interface IClub {
//   imgSrc: string;
//   clubName: string;
//   clubDescription: string;
//   bookTitle: string;
//   location: string;
//   time: string;
//   clubRep: string;
//   trevariDesigned: boolean;
// }

// interface IState {
//   clubs: IClub[];
// }

class MeetingsContainer extends React.Component<{}, MeetingsContainerState> {
  // FIXME: React.Component의 제네릭에 state 타입을 정의한 경우 아래와 같이 한 번 더 명시적으로 타입을 선언할 필요 없음
  // FIXME: 고정 데이터인 경우 별도의 파일로 빼는 것이 더 좋습니다. 해당 페이지에서는 모임 리스트를 랜더링하는 것에 코드가 집중되어 있으면 좋아요!
  state: MeetingsContainerState = {
    clubListData: [
      {
        imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
        clubName: "국경:철학",
        clubDescription:
          "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
        bookTitle: "열린사회와 그 적들. 1(양장본 HardCover",
        location: "압구정 아지트",
        time: "2019년 04월 20일 토요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
        clubName: "Baseball-25",
        clubDescription: "야구를 즐기는 또 다른 방법",
        bookTitle: "야구가 뭐라고",
        location: "압구정 아지트",
        time: "2019년 04월 12일 금요일 오후 07시 40분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
        clubName: "법률가들-범죄와 사회",
        clubDescription: "사법의 눈으로 바라보는 한국 사회",
        bookTitle: "내 친구 다머",
        location: "안국 아지트",
        time: "2019년 04월 19일 금요일 오후 07시 40분",
        clubRep: "양지훈",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
        clubName: "리더십입문-야구",
        clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
        bookTitle: "리즈 와이즈먼 멀티플라이어",
        location: "압구정 아지트",
        time: "2019년 04월 14일 일요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: true
      },
      {
        imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
        clubName: "국경:철학",
        clubDescription:
          "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
        bookTitle: "열린사회와 그 적들. 1(양장본 HardCover",
        location: "압구정 아지트",
        time: "2019년 04월 20일 토요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
        clubName: "야구야구-28",
        clubDescription: "야구를 즐기는 또 다른 방법",
        bookTitle: "야구가 뭐라고",
        location: "압구정 아지트",
        time: "2019년 04월 12일 금요일 오후 07시 40분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
        clubName: "법률가들-범죄와 사회",
        clubDescription: "사법의 눈으로 바라보는 한국 사회",
        bookTitle: "내 친구 다머",
        location: "안국 아지트",
        time: "2019년 04월 19일 금요일 오후 07시 40분",
        clubRep: "양지훈",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
        clubName: "Leadership입문-27",
        clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
        bookTitle: "리즈 와이즈먼 멀티플라이어",
        location: "압구정 아지트",
        time: "2019년 04월 14일 일요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: true
      },
      {
        imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
        clubName: "국경:철학",
        clubDescription:
          "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
        bookTitle: "열린사회와 그 적들. 1(양장본 HardCover",
        location: "압구정 아지트",
        time: "2019년 04월 20일 토요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
        clubName: "야구야구-25",
        clubDescription: "야구를 즐기는 또 다른 방법",
        bookTitle: "야구가 뭐라고",
        location: "압구정 아지트",
        time: "2019년 04월 12일 금요일 오후 07시 40분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
        clubName: "법률가들-야구와 사회",
        clubDescription: "사법의 눈으로 바라보는 한국 사회",
        bookTitle: "내 친구 다머",
        location: "안국 아지트",
        time: "2019년 04월 19일 금요일 오후 07시 40분",
        clubRep: "양지훈",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
        clubName: "리더십입문-27",
        clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
        bookTitle: "리즈 와이즈먼 멀티플라이어",
        location: "압구정 아지트",
        time: "2019년 04월 14일 일요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: true
      },
      {
        imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
        clubName: "국경:야구",
        clubDescription:
          "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
        bookTitle: "열린사회와 그 적들. 1(양장본 HardCover",
        location: "압구정 아지트",
        time: "2019년 04월 20일 토요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
        clubName: "야구야구-25",
        clubDescription: "야구를 즐기는 또 다른 방법",
        bookTitle: "야구가 뭐라고",
        location: "압구정 아지트",
        time: "2019년 04월 12일 금요일 오후 07시 40분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
        clubName: "법률가들-범죄와 사회",
        clubDescription: "사법의 눈으로 바라보는 한국 사회",
        bookTitle: "내 친구 다머",
        location: "안국 아지트",
        time: "2019년 04월 19일 금요일 오후 07시 40분",
        clubRep: "양지훈",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
        clubName: "리더십입문-33",
        clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
        bookTitle: "리즈 와이즈먼 멀티플라이어",
        location: "압구정 아지트",
        time: "2019년 04월 14일 일요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: true
      },
      {
        imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
        clubName: "국경:철학",
        clubDescription:
          "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
        bookTitle: "열린사회와 그 적들. 1(양장본 HardCover",
        location: "압구정 아지트",
        time: "2019년 04월 20일 토요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
        clubName: "야구철학-25",
        clubDescription: "야구를 즐기는 또 다른 방법",
        bookTitle: "야구가 뭐라고",
        location: "압구정 아지트",
        time: "2019년 04월 12일 금요일 오후 07시 40분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
        clubName: "법률가들-범죄와 사회",
        clubDescription: "사법의 눈으로 바라보는 한국 사회",
        bookTitle: "내 친구 다머",
        location: "안국 아지트",
        time: "2019년 04월 19일 금요일 오후 07시 40분",
        clubRep: "양지훈",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
        clubName: "리더십입문-27",
        clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
        bookTitle: "리즈 와이즈먼 멀티플라이어",
        location: "압구정 아지트",
        time: "2019년 04월 14일 일요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: true
      },
      {
        imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
        clubName: "국경:철학",
        clubDescription:
          "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
        bookTitle: "열린사회와 그 적들. 1(양장본 HardCover",
        location: "압구정 아지트",
        time: "2019년 04월 20일 토요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
        clubName: "야구법률-25",
        clubDescription: "야구를 즐기는 또 다른 방법",
        bookTitle: "야구가 뭐라고",
        location: "압구정 아지트",
        time: "2019년 04월 12일 금요일 오후 07시 40분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
        clubName: "법률가들-범죄와 사회",
        clubDescription: "사법의 눈으로 바라보는 한국 사회",
        bookTitle: "내 친구 다머",
        location: "안국 아지트",
        time: "2019년 04월 19일 금요일 오후 07시 40분",
        clubRep: "양지훈",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
        clubName: "범죄입문-27",
        clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
        bookTitle: "리즈 와이즈먼 멀티플라이어",
        location: "압구정 아지트",
        time: "2019년 04월 14일 일요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: true
      },
      {
        imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
        clubName: "국경:철학",
        clubDescription:
          "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
        bookTitle: "열린사회와 그 적들. 1(양장본 HardCover",
        location: "압구정 아지트",
        time: "2019년 04월 20일 토요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
        clubName: "야구야구-25",
        clubDescription: "야구를 즐기는 또 다른 방법",
        bookTitle: "야구가 뭐라고",
        location: "압구정 아지트",
        time: "2019년 04월 12일 금요일 오후 07시 40분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
        clubName: "법률가들-범죄와 사회",
        clubDescription: "사법의 눈으로 바라보는 한국 사회",
        bookTitle: "내 친구 다머",
        location: "안국 아지트",
        time: "2019년 04월 19일 금요일 오후 07시 40분",
        clubRep: "양지훈",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
        clubName: "리더십입문-27",
        clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
        bookTitle: "리즈 와이즈먼 멀티플라이어",
        location: "압구정 아지트",
        time: "2019년 04월 14일 일요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: true
      },
      {
        imgSrc: "https://i.postimg.cc/6Q5Qw37H/ocean.jpg",
        clubName: "국경:철학",
        clubDescription:
          "꼭 읽어보고 싶었으나 기회가 닿지 않았던 책들을 골라 읽고 토론합니다.",
        bookTitle: "열린사회와 그 적들. 1(양장본 HardCover",
        location: "압구정 아지트",
        time: "2019년 04월 20일 토요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/g0RgzYfZ/sunset.jpg",
        clubName: "야구야구-25",
        clubDescription: "야구를 즐기는 또 다른 방법",
        bookTitle: "야구가 뭐라고",
        location: "압구정 아지트",
        time: "2019년 04월 12일 금요일 오후 07시 40분",
        clubRep: "",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/c4Sg2dcz/can-on-tree.jpg",
        clubName: "법률가들-범죄와 사회",
        clubDescription: "사법의 눈으로 바라보는 한국 사회",
        bookTitle: "내 친구 다머",
        location: "안국 아지트",
        time: "2019년 04월 19일 금요일 오후 07시 40분",
        clubRep: "양지훈",
        trevariDesigned: false
      },
      {
        imgSrc: "https://i.postimg.cc/hjc6Nzfj/teatime.jpg",
        clubName: "리더십입문-27",
        clubDescription: "검증된 커리큘럼으로 리더십에 입문하기",
        bookTitle: "리즈 와이즈먼 멀티플라이어",
        location: "압구정 아지트",
        time: "2019년 04월 14일 일요일 오후 02시 20분",
        clubRep: "",
        trevariDesigned: true
      }
    ]
  };

  render() {
    return <MeetingsView clubList={this.state.clubListData} />;
  }
}
export default MeetingsContainer;
