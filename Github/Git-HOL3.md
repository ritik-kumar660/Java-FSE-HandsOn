# Git HOL 3

## Objective

Create a branch, commit changes and merge with master.

---

## Create Branch

```bash
git branch GitNewBranch
```

---

## List Branches

```bash
git branch
```

---

## Switch Branch

```bash
git checkout GitNewBranch
```

---

## Add File

```bash
echo "Branch File" > branch.txt
```

---

## Commit

```bash
git add .
git commit -m "Added branch file"
```

---

## Switch to Main

```bash
git checkout main
```

---

## Merge

```bash
git merge GitNewBranch
```

---

## View Log

```bash
git log --oneline --graph --decorate
```

---

## Delete Branch

```bash
git branch -d GitNewBranch
```