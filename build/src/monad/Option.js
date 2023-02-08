import{Base as t}from"../Base.js";import{addDoubleQuoteIfString as e}from"../util/util.js";import{identity as r}from"../util/predef.js";export class Option extends t{static catch(t,e){try{return new Some(e())}catch(e){return t(e)}}static fromNullable(t){return t?new Some(t):new None}static fromThrowable(t){try{return new Some(t())}catch(t){return new None}}static lift(t){return e=>e.map(t)}static None(){return new None}static Some(t){return new Some(t)}catchOrNone(t){return Option.catch(()=>{throw Error()},t)}filter(t){return this.flatMap(e=>t(e)?new Some(e):new None)}filterNot(t){return this.flatMap(e=>t(e)?new None:new Some(e))}flatMap(t){return this.fold(()=>this,t)}fold(t,e){return this.isEmpty()?t():e(this.value)}getOrElse(t){return this.fold(t,r)}isNotEmpty(){return!this.isEmpty()}map(t){return this.flatMap(e=>new Some(t(e)))}match(t){return this.fold(()=>t.none(),e=>t.some(e))}or(t){return this.isEmpty()?t:this}orElse(t){return this.isEmpty()?t():this}toString(){return this.fold(()=>`${Option.name}.${None.name}`,t=>`${Option.name}.${Some.name}(${e(t)})`)}}export class Some extends Option{constructor(t){super(),this.value=t}isEmpty(){return!1}}export class None extends Option{isEmpty(){return!0}}