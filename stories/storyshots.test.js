import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import path from 'path'

const getGotoOptions = ({ context, url }) => {
  console.log('returnin')
  return {
    waitUntil: 'networkidle0'
  }
}

// const isGif = i => /^(?!data:).*\.gif/i.test(i.src)

// const freezeGif = i => {
//   var c = document.createElement('canvas')
//   var w = (c.width = i.width)
//   var h = (c.height = i.height)
//   c.getContext('2d').drawImage(i, 0, 0, w, h)
//   try {
//     i.src = c.toDataURL('image/gif') // if possible, retain all css aspects
//   } catch (e) {
//     // cross-domain -- mimic original with all its tag attributes
//     for (var j = 0, a; (a = i.attributes[j]); j++) {
//       c.setAttribute(a.name, a.value)
//     }
//     i.parentNode.replaceChild(c, i)
//   }
// }

const beforeScreenshot = (page, { context: { kind, story }, url }) => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve()
    }, 400)
  )
}

const storybookPath = path.resolve(process.cwd(), 'storybook-static')
console.log({ storybookPath })

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    // storybookUrl: 'http://localhost:6006',
    storybookUrl: `file://${storybookPath}`,
    getGotoOptions,
    beforeScreenshot
    // createNodeMock: element => {
    //   if (isGif(element)) {
    //     return document.createElement('img')
    //   }
    // }
  })
})
