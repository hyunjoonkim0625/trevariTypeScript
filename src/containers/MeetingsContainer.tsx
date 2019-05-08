import React from "react";
import MeetingsView from "../components/MeetingsView/MeetingsView";
import { IClub } from "../common/types";
import { clubListData } from "../common/data";

interface MeetingsContainerState {
  clubListData: IClub[];
}

// FIXED: interface 분리를 하여 아래와 같은 방식으로 작성하면 더 직관적이다
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
  // FIXED: React.Component의 제네릭에 state 타입을 정의한 경우 아래와 같이 한 번 더 명시적으로 타입을 선언할 필요 없음
  // FIXED: 고정 데이터인 경우 별도의 파일로 빼는 것이 더 좋습니다. 해당 페이지에서는 모임 리스트를 랜더링하는 것에 코드가 집중되어 있으면 좋아요!
  state = {
    clubListData
  };

  render() {
    return <MeetingsView clubList={this.state.clubListData} />;
  }
}
export default MeetingsContainer;
