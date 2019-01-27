import { expect } from 'chai'
import Codes from 'Codes'

describe('Codes', () => {
  it('#push', () => {
    const codes = new Codes()
    codes.push(() => {})
    codes.push(() => {})
    expect(codes).to.be.lengthOf(2)
  })

  let codes = new Codes()
  before(() => {
    codes.push(() => {
      return 'no1'
    })
    codes.push(() => {
      return 'no2'
    })
    codes.push(() => {
      return 'no3'
    })
  })

  describe('#runAt', () => {
    it('runs at specified', () => {
      expect(codes.runAt(0)).to.be.equal('no1')
      expect(codes.runAt(1)).to.be.equal('no2')
      expect(codes.runAt(2)).to.be.equal('no3')
    })

    it('runs with args', () => {
      let codes = new Codes()
      codes.push((a: string, b: string) => {
        return `${a},${b}`
      })
      const response = codes.runAt(0, ['a', 'b'])
      expect(response).to.be.equal('a,b')
    })
  })

  describe('#runFirst', () => {
    it('runs at first', () => {
      expect(codes.runFirst()).to.be.equal('no1')
    })

    it('runs with args', () => {
      let codes = new Codes()
      codes.push((a: string, b: string) => {
        return `${a},${b}`
      })
      const response = codes.runFirst(['a', 'b'])
      expect(response).to.be.equal('a,b')
    })
  })

  describe('#runLast', () => {
    it('runs at last', () => {
      expect(codes.runLast()).to.be.equal('no3')
    })

    it('runs with args', () => {
      let codes = new Codes()
      codes.push((a: string, b: string) => {
        return `${a},${b}`
      })
      const response = codes.runLast(['a', 'b'])
      expect(response).to.be.equal('a,b')
    })
  })
})
