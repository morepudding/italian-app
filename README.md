# 🇮🇹 Application Prononciation Italien - Déploiement GitHub Pages

Une application web progressive (PWA) pour apprendre la prononciation italienne avec reconnaissance vocale et support de QR codes pour cahiers de vacances imprimés.

## 🚀 Déploiement en cours sur GitHub Pages

Cette version est configurée pour être déployée sur GitHub Pages et fournir une URL publique pour vos QR codes.

### 📱 Fonctionnalités
- **🔊 Synthèse vocale** : Écoute de la prononciation native italienne
- **🎤 Reconnaissance vocale** : Vérification de votre prononciation
- **📊 Feedback instantané** : Score de similarité automatique
- **🔗 QR Codes** : Accès direct via `?word=mot`
- **📱 PWA** : Installation sur mobile, fonctionne hors ligne

### 🌐 URL de votre application (après déploiement)
```
https://VOTRE-USERNAME.github.io/VOTRE-REPO-NAME
```

### 📋 Étapes de déploiement :

1. **Créer un repository GitHub** :
   - Aller sur https://github.com
   - Cliquer "New repository" 
   - Nom suggéré : `italien-app`
   - Cocher "Public"
   - Cliquer "Create repository"

2. **Upload des fichiers** :
   - Cliquer "uploading an existing file"
   - Glisser-déposer tous les fichiers de ce dossier
   - Commit avec message : "Initial Italian app deployment"

3. **Activer GitHub Pages** :
   - Aller dans Settings > Pages
   - Source : "Deploy from a branch"
   - Branch : "main" 
   - Folder : "/ (root)"
   - Cliquer "Save"

4. **Votre URL sera** :
   ```
   https://VOTRE-USERNAME.github.io/italien-app
   ```

### 🔧 Configuration finale
Une fois déployé, mettez à jour la variable BASE_URL dans vos fichiers QR :
- Dans `avant-propos.html` 
- Dans `qr-generator.html`

### 📱 Test des QR codes
Après déploiement, vos QR codes pointeront vers :
- `https://VOTRE-URL/?word=cinema`
- `https://VOTRE-URL/?word=chiesa` 
- `https://VOTRE-URL/?word=famiglia`

## 📊 Mots disponibles dans l'application

L'application contient 23 mots italiens :
- Salutations : ciao, buongiorno, buonasera, arrivederci
- Politesse : grazie, prego, scusi, per favore, mi dispiace
- Présentation : mi chiamo
- Questions : dove, quanto costa, parla italiano
- Réponses : sì, no
- Expressions : bene, molto bene, non capisco
- Nourriture : acqua, pane
- **Nouveaux mots** : cinema, chiesa, famiglia

## 🎯 Utilisation avec le cahier de vacances

1. Les étudiants scannent un QR code dans le cahier imprimé
2. L'application s'ouvre avec le mot spécifique
3. Ils écoutent la prononciation (🔊)
4. Ils répètent le mot (🎤)
5. Ils reçoivent un feedback sur leur prononciation

---

**⚡ Déploiement gratuit et illimité avec GitHub Pages !**
