export function andThen(n,e){return o=>e(n(o))}export function compose(n,e){return o=>n(e(o))}