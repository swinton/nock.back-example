const Octokit = require('@octokit/rest')
const octokit = new Octokit({
  auth: `token ${process.env.GITHUB_TOKEN}`,
  ...process.env.GHE_HOST && {baseUrl: `https://${process.env.GHE_HOST}/api/v3`}
})

const getLogin = async () => {
  const user = await octokit.users.getAuthenticated()
  return user.data.login;
}
module.exports = getLogin

if (require.main === module) {
  (async () => {
    const login = await getLogin();
    console.log(`login is ${login}`)
  })();
}
