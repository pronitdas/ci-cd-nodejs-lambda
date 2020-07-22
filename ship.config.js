module.exports = {
  buildCommand: () => null,
  publishCommand: ({ tag }) => `echo "v${tag} released"`,
  afterPublish: ({ exec }) => {
    exec('git config --global user.email "github-actions[bot]@users.noreply.github.com"');
    exec('git config --global user.name "github-actions[bot]"');
    exec('git fetch --all');
    exec('git checkout test');
    exec('git rebase stage');
    exec('git push origin test');
    exec('git checkout dev');
    exec('git rebase test');
    exec('git push origin dev');
  },
};