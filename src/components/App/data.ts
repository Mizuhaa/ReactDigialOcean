export default [
    {
      name: 'Lion',
      scientificName: 'Panthero leo',
      size: 142.21,
      diet: ['meat'],
      emoji: '🦁',
      picture: 'src/components/App/lion.jpg'
    },
    {
      name: 'Gorilla',
      scientificName: 'Gorilla beringei',
      size: 202.10,
      emoji: '🦍',
      diet: ['plants', 'insects'],
      additional: {
        notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.'
      },
      picture: 'src/components/App/gorilla.jpg'
    },
    {
      name: 'Zebra',
      scientificName: 'Equus quagga',
      size: 322.30,
      diet: ['plants'],
      emoji: '🦓',
      additional: {
        notes: 'There are three different species of zebra.',
        link: 'https://en.wikipedia.org/wiki/Zebra'
      },
      picture: 'src/components/App/zebra.jpg'
    }
  ]
