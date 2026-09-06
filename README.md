# Portfolio Cybersécurité - Houssam Zouheir

Portfolio web professionnel pour un ingénieur en cybersécurité, avec un design moderne type SOC/Red Team.

## 🚀 Fonctionnalités

- ✅ Design sombre et moderne (thème hacker/terminal)
- ✅ 100% responsive (mobile, tablette, desktop)
- ✅ Effet Matrix rain en arrière-plan
- ✅ Navigation fixe avec menu burger mobile
- ✅ Bandeau de compétences avec défilement automatique infini
- ✅ Timeline d'expérience professionnelle
- ✅ Grille de projets et certifications
- ✅ Formulaire de contact
- ✅ Animations au scroll
- ✅ Aucune dépendance (HTML, CSS, JS vanilla)

## 📁 Structure du projet

```
portfolio/
├── index.html          # Page principale
├── style.css          # Styles CSS
├── script.js          # JavaScript
├── assets/
│   ├── photo.jpg      # Votre photo de profil (à remplacer)
│   └── CV.pdf         # Votre CV (à ajouter)
└── README.md          # Ce fichier
```

## 🔧 Installation et utilisation

### 1. Remplacer la photo de profil

Remplacez le fichier `assets/photo.jpg` par votre vraie photo :
- Format recommandé : JPG ou PNG
- Dimensions idéales : 400x400px minimum
- La photo sera affichée en cercle

### 2. Ajouter votre CV

Placez votre CV dans `assets/CV.pdf`
- Format : PDF
- Le bouton "Télécharger mon CV" pointera vers ce fichier

### 3. Personnalisation (optionnelle)

#### Modifier les informations personnelles

Ouvrez `index.html` et modifiez :
- Les liens GitHub, LinkedIn
- Le numéro de téléphone
- L'email
- La description

#### Modifier les compétences

Ouvrez `script.js` et modifiez l'objet `skills` (lignes 6-80) :
- Ajoutez/supprimez des outils
- Modifiez les URLs
- Changez les catégories

#### Modifier les couleurs

Ouvrez `style.css` et modifiez les variables CSS (lignes 6-15) :
```css
:root {
    --accent-green: #00ff9f;  /* Vert néon principal */
    --accent-cyan: #00d9ff;   /* Bleu cyan */
    /* ... */
}
```

## 🌐 Déploiement

### Option 1 : Hébergement local

Ouvrez simplement `index.html` dans votre navigateur.

### Option 2 : GitHub Pages

1. Créez un repository GitHub
2. Poussez votre code
3. Allez dans Settings > Pages
4. Sélectionnez la branche `main` comme source
5. Votre site sera disponible à `https://votre-username.github.io/nom-du-repo`

### Option 3 : Netlify

1. Allez sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier du projet
3. Votre site est en ligne immédiatement !

### Option 4 : Vercel

```bash
npm install -g vercel
vercel
```

## 🎨 Sections du portfolio

1. **Hero** - Introduction avec photo, titre, et appels à l'action
2. **À Propos** - Présentation dans un terminal stylisé
3. **Compétences** - 3 catégories avec bandeaux défilants :
   - Blue Team & Infrastructure (30 outils)
   - AI & Development (25 outils)
   - Offensive Security & Pentest (25 outils)
4. **Expérience** - Timeline verticale
5. **Projets** - Grille de 4 projets principaux
6. **Certifications** - 7 certifications affichées
7. **Formation** - Parcours académique
8. **Contact** - Informations + formulaire

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Animations, flexbox, grid, variables CSS
- **JavaScript ES6+** - Vanilla JS (pas de framework)
- **Font Awesome** - Icônes (via CDN)

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints à :
- 968px (tablettes)
- 600px (mobiles)

## ⚡ Performance

- Pas de framework lourd
- Animations CSS optimisées
- Lazy loading des animations au scroll (Intersection Observer)
- Canvas optimisé pour l'effet Matrix

## 🎯 Personnalisation avancée

### Modifier l'effet Matrix

Dans `script.js`, fonction `initMatrixRain()` :
- Changez `fontSize` pour la taille des caractères
- Modifiez la couleur dans `ctx.fillStyle`
- Ajustez la vitesse dans `setInterval(draw, 33)`

### Ajouter des projets

Dans `index.html`, section `#projects`, dupliquez un bloc `.project-card` :

```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-votre-icone"></i>
    </div>
    <h3>Nom du projet</h3>
    <p>Description...</p>
    <div class="project-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
</div>
```

### Ajouter des certifications

Dans `index.html`, section `#certifications`, dupliquez un bloc `.cert-card`.

## 📞 Support

Pour toute question ou suggestion, contactez :
- Email : houssam.zouheir@gmail.com
- LinkedIn : [linkedin.com/in/houssam-zouheir](https://linkedin.com/in/houssam-zouheir)

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

---

**Développé avec ❤️ par Houssam Zouheir**

🔐 Cybersécurité • 💻 DevSecOps • 🛡️ Pentest
