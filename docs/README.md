## 🧱 설계 사항

### BridgeGame 클래스

#### start 메서드

- [x] IputView로부터 size를 받아 할당.

#### makeRandomNumber 메서드

- [x] 다리 입력 받은 길이만큼 BridgeRandomNumberGenerator를 실행하여 `#bridge`에 결과를 push.

### InputView

- [x] 다리의 길이 입력 받기.
- [x] [예외 처리] 3~20 사이의 숫자가 아닌 경우.

### BridgeMaker

- [x] 인자로 받은 배열의 0은 D, 1은 U로 변경하여 리턴.
