module.exports = {
  branches: ['main'],
  debug: true,
  ci: true,
  dryRun: false,
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    ['@semantic-release/changelog',
      {
        // Custom configuration for @semantic-release/git plugin
        "changelogFile": "CHANGELOG.md",
      }
    ],
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.MD", "package.json", "package-lock.json"],
      "message": "chore(release): ${nextRelease.version} \n\n${nextRelease.notes}",
    }],
  ],
};
