import './style.css'
import { tipado } from './typescript/01-tipado'
import { clases } from './typescript/02-clases'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h3>Introducción a Typescript</h3>
  <h4>${tipado}</h4>
  <h4>${clases}</h4>

`

