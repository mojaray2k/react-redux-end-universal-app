import React from 'react'
import { renderToString } from 'react-dom/server'
import template from './template'
import RGB from './universal/RGB'

export default function render(req, res) {
  const html = renderToString(<RGB />)
  res.send(template(html))
}
