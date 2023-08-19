import type { RequestHandler } from 'express'
import { transpile } from '@es-js/core'
import { decompressFromURL } from '@amoutonbrady/lz-string'

const esjsRoute: RequestHandler = async (req, res, next) => {
  try {
    const output = transpile(decompressFromURL(req.params.code) ?? '')

    res.type('js')
    res.send(output)
  }
  catch (err) {
    console.error(err)
    res.status(400)
    res.send('Error en el código EsJS')
  }
}

export default esjsRoute
