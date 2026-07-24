# Git HOL 1

## Objective
- Configure Git
- Create a local repository
- Add files to Git
- Commit changes
- Connect with remote repository
- Push and Pull changes

---

## Configure Git

```bash
git config --global user.name "Ritik Kumar"
git config --global user.email "ritikkumarharhar660@gmail.com"
git config --global --list
```

---

## Create Repository

```bash
mkdir GitDemo
cd GitDemo
git init
```

---

## Create File

```bash
echo "Welcome to Version Control" > welcome.txt
```

---

## Check Status

```bash
git status
```

---

## Add File

```bash
git add welcome.txt
```

---

## Commit

```bash
git commit -m "Added welcome.txt"
```

---

## Add Remote Repository

```bash
git remote add origin <repository-url>
```

---

## Pull

```bash
git pull origin main
```

---

## Push

```bash
git push origin main
```