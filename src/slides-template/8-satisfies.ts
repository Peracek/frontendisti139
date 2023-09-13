export {}

type Talk = 'blah' | 'bleh' | 'huh'

class Frontendisti {
  constructor(public talk: Talk) {}
  present() {
    switch (this.talk) {
      case 'blah':
        return 'boo'
      case 'bleh':
        return 'get off the stage'
      case 'huh':
        return 'not worth it'
    }

    this.talk satisfies never
  }
}
