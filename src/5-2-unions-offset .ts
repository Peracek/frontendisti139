export {}

type Value = `${number}px`
type Offset = 'padding' | 'margin'
type Direction = 'top' | 'right' | 'bottom' | 'left'
type DirectedOffset = `${Offset}-${Direction}`
const setOffset = (offset: DirectedOffset, value: `${2 | 4 | 6}px`) => {
  // do stuff...
}

setOffset('margin-top', '-00134px')

// setOffset('padding', '15px')
// setOffset('padding-right', '15px')
