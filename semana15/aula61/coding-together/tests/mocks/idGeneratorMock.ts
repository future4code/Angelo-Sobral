export class IdGeneratorMock {
  public generate(): string {
    return "id-mock";
  }
}

export default new IdGeneratorMock()