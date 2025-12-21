# FYC Exercices Pratique

Ce projet contient les exercices pratiques pour le cours d'architecture logicielle, implémentant des concepts d'architecture hexagonale avec TypeScript.

## Structure du Projet

```
fyc-exercices-pratique/
├── exercice_1/
│   └── correction/
│       ├── domain/exceptions/
│       │   ├── domain.exception.ts
│       │   └── book.exception.ts
│       └── tests/exceptions.spec.ts
├── exercice_2/
│   └── correction/
│       ├── domain/
│       │   ├── model/book.model.ts
│       │   └── repository/book.repository.ts
│       ├── infrastructure/in-memory-book.repository.ts
│       └── tests/book.repository.spec.ts
└── cas_pratique/
    └── correction/
        ├── domain/
        │   ├── model/book.model.ts
        │   ├── repository/book.repository.ts
        │   └── exceptions/
        ├── infrastructure/in-memory-book.repository.ts
        ├── application/
        │   ├── create-book.usecase.ts
        │   ├── get-book-by-id.usecase.ts
        │   ├── get-all-books.usecase.ts
        │   └── delete-book.usecase.ts
        └── tests/
            ├── create-book.usecase.spec.ts
            └── get-book-by-id.usecase.spec.ts
```

## Installation

```bash
npm install
```

## Tests

### Lancer les tests par exercice
```bash
# Exercice 1: Exceptions hexagonales
npm run test:ex1

# Exercice 2: Repository en mémoire
npm run test:ex2

# Cas pratique: Intégration complète
npm run test:cas-pratique
```

## Description des Exercices

### Exercice 1: Exceptions Hexagonales
- **Objectif**: Définir une hiérarchie d'exceptions pour gérer les erreurs métier
- **Concepts**: Héritage d'exceptions, DomainException, Exceptions spécifiques
- **Tests**: Vérification du type et des messages d'exception

### Exercice 2: Repository en Mémoire
- **Objectif**: Implémenter un repository simple en mémoire pour gérer des livres
- **Concepts**: Pattern Repository, Interface, Implémentation en mémoire
- **Tests**: Vérification des fonctionnalités save() et findById()

### Cas Pratique: Intégration Complète
- **Objectif**: Créer des use cases qui utilisent le repository et lèvent des exceptions
- **Concepts**: Architecture hexagonale (Domain, Application, Infrastructure), Use Cases, Tests sans mocks
- **Tests**: Tests unitaires avec InMemoryBookRepository (pas de mocks)

## Architecture Hexagonale

Ce projet suit les principes de l'architecture hexagonale:

- **Domain Layer**: Contient les modèles métier, les interfaces de repository et les exceptions
- **Application Layer**: Contient les use cases qui orchestrent les opérations métier
- **Infrastructure Layer**: Contient les implémentations concrètes (repository en mémoire)
- **Tests**: Tests unitaires pour valider le fonctionnement (tests réels sans mocks)

## Technologies

- **TypeScript**: Langage principal
- **Jest**: Framework de tests
- **ts-jest**: Integration TypeScript/Jest