const RandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");

class BridgeGame {
  #size;
  #progressCount = 0;
  #bridge = [];

  start(size) {
    this.#size = size;
    this.#bridge = BridgeMaker.makeBridge(size, this.makeRandomNumber(size));
    console.log(this.#bridge);
  }

  makeRandomNumber(size) {
    let tempNumberBridge = [];
    for (let i = 0; i < size; i++) {
      tempNumberBridge.push(RandomNumberGenerator.generate());
    }
    return tempNumberBridge;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(answer) {
    let isCorrect = false;
    if (answer == "U" && answer == this.#bridge[this.#progressCount]) {
      console.log("up");
      isCorrect = true;
      this.#progressCount++;
    }
    if (answer == "D" && answer == this.#bridge[this.#progressCount]) {
      console.log("down");
      isCorrect = true;
    }
    return isCorrect;
    // OutputView.printMap();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
