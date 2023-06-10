module.exports = async ({ github, context }) => {
  const prs = await github.rest.repos.listPullRequestsAssociatedWithCommit({
    owner: context.repo.owner,
    repo: context.repo.repo,
    commit_sha: context.sha,
  });
  return (prs && prs.data[0] && prs.data[0].number) || undefined;
};
