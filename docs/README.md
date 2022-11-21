## 🧱 설계 사항

### BridgeGame 클래스

- [x] 필드 개수 줄이기.

#### start 메서드

- [x] InputView로부터 size를 받아 할당.

#### makeRandomNumber 메서드

- [x] 다리 입력 받은 길이만큼 BridgeRandomNumberGenerator를 실행하여 `#bridge`에 결과를 push.

#### move 메서드

- [x] U,D 판단 후 일치시 `matchCount`증가
- [x] 일치 여부 상관없이 진행 시 U,D 판단 위해 `progressIdx` 증가.

#### retry 메서드

- [x] 게임 진행 횟수 `#gameCount` 계산.
- [x] 재시작, 종료 구현.

### GameController

- [x] `BridgeGame`의 `crossBridgeCompletely`가 true인 경우 게임 클리어.
- [x] 성공 혹은 재시작 시 맵 초기화 실행.
- [x] 게임 종료시 결과 출력.

### InputView

- [x] 다리의 길이 입력 받기.
- [x] [예외 처리] 3~20 사이의 숫자가 아닌 경우.

- [x] 사용자 입력으로 다리의 배치와 비교.
- [x] [예외 처리] U D 이외의 문자가 입력된 경우.

- [x] 사용자 입력으로 재시작 혹은 종료를 결정.
- [x] [예외 처리] R Q 이외의 문자가 입력된 경우.

- [x] `exitGame` 게임 성공, 실패 후 종료 분기점에서 최종 결과 출력 및 시도 횟수를 출력하도록 함.

### OutputView

- [x] 입력 결과에 따른 Map 생성 및 출력
- [x] 실패 시 Map 출력, 게임 종료 시 실패한 결과 출력
  - [x] 실패 후 U,D를 입력 시 push가 되는 오류 fix.
- [x] 성공 시 Map 출력
- [x] 성공 혹은 재시작 시 맵 초기화 정의.

### BridgeMaker

- [x] 인자로 받은 함수를 실행해 0은 D, 1은 U로 변경하여 리턴.

### 유효성 검사

- [x] 본 함수에서 try~catch 문으로 throw하는 형태로 수정.
- [x] Validation 함수에서는 `true` || `false`를 리턴함.
- [x] 유효성 검사를 통한 예외 처리
- [x] 요구사항에 따라 입력이 잘못된 경우 이후에도 새 입력을 받아 플레이할 수 있도록 함.

### 발견된 오류

(fixed) ~~실패 후 게임 모드를 고르는 동안 U || D를 입력 시 맵이 새로 만들어짐.~~
실패 후 모드를 고르는 동안 R, Q 이외 입력 시 맵을 출력함. -> 플래그로 막을 예정, 인자 기본값 이용

### 구성

```
src
  Controller/
    GameController.js
    InputView.js
  Error/
    CheckValidation.js
  Messages/
    constants.js
  Model/
    BridgeGame.js
  Views
    OutputView.js
  App.js
  BridgeMaker.js
  BridgeRandomNumberGenerator.js
```

### 테스트 목록

#### `InputView`

`readBridgeSize`

- 사이즈 입력 시 문자열
- 사이즈 입력 시 범위 미만의 수
- 사이즈 입력 시 범위 초과의 수
- 사이즈 입력 시 음수

`readMoving`

- 움직임 입력 시 U, D 이외의 문자
  - 문자열
  - 숫자

`readGameCommand`

- 커맨드 입력 시 R, Q 이외의 문자
  - 문자열
  - 숫자

### OutputView

#### 진행 상황 테스트

- 입력에 따른 다리 그리기 정확성 확인.
- 게임 종료 시 진행 횟수 확인.
