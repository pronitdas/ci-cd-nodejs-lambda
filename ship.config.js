module.exports = {
  buildCommand: () => null,
  publishCommand: ({ tag }) => `echo "v${tag} released"`,
  afterPublish: ({ exec }) => {
    exec('git config --global user.email "github-actions[bot]@users.noreply.github.com"');
    exec('git config --global user.name "github-actions[bot]"');
    exec('git -c protocol.version=2 fetch --prune --progress --no-recurse-submodules origin test stage develop');
    exec('git checkout test');
    exec('git rebase origin/stage');
    exec('git push origin test');
    exec('git checkout develop');
    exec('git rebase origin/test');
    exec('git push origin develop');
  },
};