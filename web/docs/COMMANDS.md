# Git Speedy

```zsh
git switch -c <YOUR_BRANCH> \
git add . && git commit -m "Update XYZ" && git push -u origin <YOUR_BRANCH> \
gh pr create \
gh pr merge <PR_NUMBER> -r
```

```zsh
BRANCH=feature-xyz && \
git switch -c "$BRANCH" && \
git add . && git commit -m "Update XYZ" && \
git push -u origin "$BRANCH" && \
gh pr create --fill --base main --head "$BRANCH" && \
gh pr merge --rebase --delete-branch --auto
```

```zsh
gh alias set ship '!f(){ branch=${1:-$(git branch --show-current)} && \
git push -u origin "$branch" && \
gh pr create --fill --base main --head "$branch" && \
gh pr merge --rebase --delete-branch --auto; }; f'
```

"Run gh ship from a feature branch after committing; it pushes, opens the PR with filled metadata, and queues the merge."
