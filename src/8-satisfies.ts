export {}

type Talk = 'blah' | 'bleh' | 'huh' | 'boo'

class Frontendisti {
  constructor(public talk: Talk) {}
  present() {
    switch (this.talk) {
      case 'blah':
        return 4
      case 'bleh':
        return 3
      case 'huh':
        return 1
    }

    this.talk satisfies never
  }
}
