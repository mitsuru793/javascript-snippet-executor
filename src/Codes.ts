export default class Codes {
  private codes: Function[]

  constructor() {
    this.codes = []
  }

  get length(): number {
    return this.codes.length
  }

  size(): number {
    return this.codes.length
  }

  push(code: Function): this {
    this.codes.push(code)
    return this
  }

  runAt(index: number, args: any[] = []): any {
    const code = this.codes[index]
    return code(...args)
  }

  runFirst(args: any[] = []): any {
    return this.runAt(0, args)
  }

  runLast(args: any[] = []): any {
    return this.runAt(this.codes.length - 1, args)
  }
}
