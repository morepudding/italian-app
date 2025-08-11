# 🚀 Instructions de Déploiement GitHub Pages

## Étape 1 : Créer le Repository GitHub

1. Allez sur https://github.com
2. Cliquez sur "New" (bouton vert) ou "+" > "New repository"
3. **Nom du repository** : `italien-app` (ou autre nom de votre choix)
4. **Description** : `Application PWA pour apprendre la prononciation italienne`
5. **Visibilité** : Cochez "Public" (obligatoire pour GitHub Pages gratuit)
6. **NE PAS** cocher "Add a README file" (on en a déjà un)
7. Cliquez "Create repository"

## Étape 2 : Upload des Fichiers

### Option A : Interface Web (Plus Simple)
1. Sur la page de votre nouveau repository, cliquez "uploading an existing file"
2. **Sélectionnez TOUS les fichiers** de ce dossier :
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `qr-generator.html`
   - `icon-192.svg`
   - `icon-512.svg`
   - `README.md`
   - `_config.yml`
   - Dossier `.github` (avec `copilot-instructions.md`)
3. Glissez-déposez tous les fichiers
4. **Commit message** : `Initial deployment - Italian pronunciation app`
5. Cliquez "Commit changes"

### Option B : Git Command Line (Avancé)
```bash
git init
git add .
git commit -m "Initial deployment - Italian pronunciation app"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/italien-app.git
git push -u origin main
```

## Étape 3 : Activer GitHub Pages

1. Dans votre repository, cliquez sur **"Settings"** (onglet en haut)
2. Dans le menu de gauche, cliquez sur **"Pages"**
3. Dans "Source", sélectionnez **"Deploy from a branch"**
4. Branch : sélectionnez **"main"**
5. Folder : laissez **"/ (root)"**
6. Cliquez **"Save"**

## Étape 4 : Obtenir Votre URL

⏰ **Attendre 2-5 minutes** pour le déploiement...

Votre application sera accessible à :
```
https://VOTRE-USERNAME.github.io/italien-app
```

Exemple : Si votre username est "jean123", l'URL sera :
```
https://jean123.github.io/italien-app
```

## Étape 5 : Tester l'Application

1. Ouvrez l'URL dans votre navigateur
2. Testez la synthèse vocale (🔊)
3. Testez la reconnaissance vocale (🎤)
4. Vérifiez que l'app fonctionne avec `?word=ciao`

## Étape 6 : Mettre à Jour les QR Codes

**IMPORTANT** : Une fois l'URL obtenue, mettez à jour :

### Dans votre cahier avant-propos.html :
```javascript
const BASE_URL = 'https://VOTRE-USERNAME.github.io/italien-app';
```

### Dans qr-generator.html :
```javascript
// Ligne ~59
value="https://VOTRE-USERNAME.github.io/italien-app"
```

## 🎯 URLs Finales pour QR Codes

Vos QR codes pointeront vers :
- **cinema** : `https://VOTRE-URL/?word=cinema`
- **chiesa** : `https://VOTRE-URL/?word=chiesa`
- **famiglia** : `https://VOTRE-URL/?word=famiglia`
- **ciao** : `https://VOTRE-URL/?word=ciao`
- etc...

## ✅ Vérification Finale

- [ ] Application accessible sur GitHub Pages
- [ ] Synthèse vocale fonctionne
- [ ] Reconnaissance vocale fonctionne  
- [ ] URL avec paramètre `?word=` fonctionne
- [ ] QR codes mis à jour avec la vraie URL
- [ ] PWA installable sur mobile

---

🎉 **Votre application est maintenant en ligne et vos QR codes sont fonctionnels !**
