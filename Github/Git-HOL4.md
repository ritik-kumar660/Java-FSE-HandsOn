# Git HOL 4

## Objective

Resolve merge conflicts.

---

## Create Branch

```bash
git checkout -b GitWork
```

---

## Create File

```bash
echo "Branch Content" > hello.xml
```

---

## Commit

```bash
git add .
git commit -m "Branch changes"
```

---

## Switch to Main

```bash
git checkout main
```

---

## Modify Same File

```bash
echo "Main Content" > hello.xml
```

---

## Commit

```bash
git add .
git commit -m "Main changes"
```

---

## Merge

```bash
git merge GitWork
```

---

Resolve conflict manually.

---

## Commit After Resolution

```bash
git add .
git commit -m "Resolved merge conflict"
```

---

## Delete Branch

```bash
git branch -d GitWork
```