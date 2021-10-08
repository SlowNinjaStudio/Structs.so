export class Ranks {
  constructor(
    rankS,
    rankA,
    rankB,
    rankC,
    rankD,
    rankF,
  ) {
    this.rankS = rankS;
    this.rankA = rankA;
    this.rankB = rankB;
    this.rankC = rankC;
    this.rankD = rankD;
    this.rankF = rankF;
  }

  static make(max) {
    return new Ranks(
      max - (max * 0.02),
      max - (max * 0.16),
      max - (max * 0.50),
      max - (max * 0.84),
      max - (max * 0.98),
      0
    );
  }
}
