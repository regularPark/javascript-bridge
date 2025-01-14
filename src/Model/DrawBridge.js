const OutputView = require("../View/OutputView");

let upsideBridge = [];
let downsideBridge = [];

const INPUT_UP = "U";
const INPUT_DOWN = "D";

const OUTPUT_CORRECT = "O";
const OUTPUT_INCORRECT = "X";

const DrawBridge = {
  /**
   * @param {string} input 사용자 입력 U/D
   * @param {function(): boolean} isCorrect 입력과 다음 단계 일치 여부를 판단하는 함수
   */
  makeMap(input, isCorrect) {
    this.drawBridge(input, isCorrect);
    OutputView.printMap(upsideBridge, downsideBridge);
  },

  drawBridge(input, isCorrect) {
    if (input == INPUT_UP) this.drawUpside(isCorrect);
    if (input == INPUT_DOWN) this.drawDownside(isCorrect);
  },

  drawUpside(isCorrect) {
    isCorrect
      ? upsideBridge.push(OUTPUT_CORRECT)
      : upsideBridge.push(OUTPUT_INCORRECT);
    downsideBridge.push(" ");
  },

  drawDownside(isCorrect) {
    isCorrect
      ? downsideBridge.push(OUTPUT_CORRECT)
      : downsideBridge.push(OUTPUT_INCORRECT);
    upsideBridge.push(" ");
  },

  clearMap() {
    upsideBridge = [];
    downsideBridge = [];
  },

  getBridge() {
    return [upsideBridge, downsideBridge];
  },
};

module.exports = DrawBridge;
