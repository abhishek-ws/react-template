import { homeContainerTypes, homeContainerCreators } from '../reducer'

describe('HomeContainer actions', () => {
  describe('REQUEST_GET_GITHUB_REPOS Action', () => {
    it('has a type of REQUEST_GET_GITHUB_REPOS', () => {
      const expected = {
        type: homeContainerTypes.REQUEST_GET_GITHUB_REPOS,
        repoName: 'repoName'
      }
      expect(homeContainerCreators.requestGetGithubRepos('repoName')).toEqual(
        expected
      )
    })
  })
})
