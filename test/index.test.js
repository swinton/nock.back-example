const path = require('path');
const nock = require('nock')
let getLogin

describe('getLogin against GitHub.com', () => {
  beforeAll(() => {
    jest.resetModules()
    getLogin = require('..')
    nock.back.fixtures = path.join(__dirname, '..', 'fixtures', 'dotcom')
  })

  beforeEach(() => {
    nock.back.setMode('record')
  })

  afterEach(() => {
    nock.back.setMode('wild')
    nock.cleanAll()
  })

  afterAll(nock.restore)

  test('it returns the authenticated user\'s login', async () => {  
    const { nockDone } = await nock.back(
      'get-authenticated-user.json'
    )

    const login = await getLogin()

    expect(login).toBe('swinton')

    nockDone()
  })
})

describe('getLogin against GitHub Enterprise Server', () => {
  // TODO
})
