const nock = require('nock')
const getLogin = require('..')

test('it returns the authenticated user\'s login', async () => {
  nock.back.setMode('record')

  nock('https://api.github.com')
    .get('/user')
    .reply(200, {
      login: 'octocat'
    })
  
  const login = await getLogin()

  expect(login).toBe('octocat')

  nock.back.setMode('wild')
})
