# Git HOL 2

## Objective

Ignore unwanted files and folders using `.gitignore`.

---

## Create Log File

```bash
echo "Sample Log" > sample.log
```

---

## Create Log Folder

```bash
mkdir log
```

---

## Create .gitignore

```text
*.log
log/
```

---

## Verify

```bash
git status
```

Files having `.log` extension and the `log` folder should not appear in Git status.