# IrokoEV deployment and CI/CD documentation
This document outlines the DevOps infrastructure and CI/CD pipeline established for the IrokoEV Website. It covers the integration between GitHub and Vercel, branch management strategies, and automated quality assurance workflows.

## Table of contents
[Overview](#overview)

[Audience](#audience)

[System requirements](#system-requirements)

[Infrastructure configuration](#vercel-infrastructure-configuration)
* [Initialize the project](#initialize-the-project)
* [Environment variables](#environment-variables)
* [Observability tools](#observability-tools)

[Branch management and protection rules](#branch-management-and-protection-rules)
* [Branch roles and permissions](#branch-roles-and-permissions)
* [Automated branch lifecycle](#automated-branch-lifecycle)

[CI/CD pipeline with GitHub Actions](#cicd-pipeline-with-github-actions)

* [Workflow triggers](#workflow-triggers)
* [Quality-Check](#quality-check-unit-testing)
* [Vercel-Preview (Deployment)](#vercel-preview-deployment)

[Accessing deployment previews](#accessing-deployment-previews)

[Troubleshooting](#troubleshooting)
* [Resolve Failures](#resolve-failures)

[Glossary](#glossary)

[Next steps](#next-steps)


## Overview

The IrokoEV Website uses a modern CI/CD pipeline to automate testing and deployment. By integrating GitHub Actions with Vercel, the team ensures that every code change is validated for syntax, build compatibility, and visual integrity before reaching the staging or production environments.

## Audience

This documentation is intended for:

* **Frontend Developers:**  To understand the requirements for code quality and the PR process.

* **DevOps Engineers:** To maintain or rotate security tokens and environment configurations.

* **Project Managers:** To understand the stability and observability of the staging and production environments.

## System requirements

To interact with or modify this pipeline, the following are required:

* **Node.js:** Version 20.x or higher.

* **Vercel account:** Team-level access to the `Stanix-Cohort` organization.

* **GitHub permissions:** `Write` access to the IrokoEV repository.

* **Vercel CLI:** Version 25.1.0 or higher (for local testing).

## Vercel infrastructure configuration

The IrokoEV website is hosted on Vercel and integrated with GitHub to provide a seamless "push-to-deploy" experience.

### initialize the project

1.  **Preset:** The project uses the `Vite` framework preset, which automates the build command `(npm run build)` and output directory `(dist)` automatically.

2.  **Root directory:** Automated detection is enabled to locate the package.json within the project structure.

### Environment variables 

Environment variables are managed within the Vercel Dashboard under **Project Settings > Environment Variables**.

* **Environment scope:** Variables are assigned to `Production` and `Preview` environments to ensure API keys remain secure.

* **VITE_ prefix**: Per Vite security requirements, only variables prefixed with `VITE_` are exposed to the client-side code.

### Observability tools

* **Vercel speed insights:** Enabled to monitor **Real User Monitoring** (RUM) scores, which track how fast the site feels to actual users.

* **Vercel analytics:** Enabled to track visitor traffic and performance metrics directly from the Vercel dashboard.

## Branch management and protection rules
To maintain a stable codebase, the repository follows a strict branching strategy centered around a staging branch.

### Branch roles and permissions

We have transitioned the repository to a Branch-per-Environment model to separate development work from production-ready code.

1. **The `main` branch (Production):** This branch is now reserved exclusively for stable, production-ready code. Only the DevOps team or Project Leads should trigger merges to `main`.

2. **The `staging` branch (Preview):** This is the primary integration branch. It is configured as the Preview Environment. All feature branches must be merged here first to be viewed at the staging URL.

3. **Feature Branches:** All active development occurs on individual feature branches (e.g., `feat/landing-page`).

### Automated branch lifecycle
To maintain repository hygiene and prevent branch rot, the following automation is active:

* **Feature branches:** Developers must create a separate branch for every new feature or fix.

* **Automatic branch deletion:** To prevent "branch rot" (an accumulation of old, unused branches), the repository is configured to automatically delete feature branches immediately after a Pull Request is successfully merged.


The following rules are enforced on the staging and main branches to act as a Firewall:

1.  **Require pull request:** Direct pushes to protected branches are disabled.

2. **Mandatory status checks:** The GitHub Actions (Quality-Check and Vercel-Preview) must return a Green  status before the "Merge" button becomes active.


## CI/CD pipeline with GitHub Actions
The automated workflow is defined in `.github/workflows/actions.yaml`. This pipeline ensures that no broken code is ever merged into the project.

### Workflow triggers
The workflow triggers automatically on:

* A `pull_request` opened against the `staging` branch.

* Any new commits pushed to an existing `pull request`.

### Quality-Check (Unit testing)

This verifies the technical integrity of the code:

* **Environment:** Runs on a virtual `ubuntu-latest` server using **Node.js 20**.

* **Dependency resolution:** Executes `npm install` to build the local environment.

* **Code linting:** Runs `npm run lint` to check for syntax and style violations.

* **Build verification:** Executes `npm run build` to ensure the project compiles successfully.

### Vercel-Preview (deployment)

This provides a live **Preview Link** for reviewers:

* **Job dependency:** This step only starts if **Quality-Check** passes.

* **Authentication:** Uses `VERCEL_TOKEN`, `VERCEL_PRJ-ID` and `VERCEL_TEAM_ID` stored in GitHub Secrets for secure access.

* **Write permissions:** The job is explicitly granted write permissions for pull-requests and contents. This allows the automation to bypass organizational locks and post comments directly on the PR.

## Accessing deployment previews

Once the GitHub Action completes:

* Navigate to the Pull Request on GitHub.

* Locate the comment from the github-actions[bot].

* Click the `Preview URL` to view the live, temporary version of the website.


## Troubleshooting

Interpret Action Errors if a PR check fails (indicated by a *Red X*), use the following table to diagnose the issue:

|Error Message| Root Cause| Resolution|
|---|---|---|
| `eslint: command not found`| Syntax or style violations detected.| Run `npm run lint` locally and fix errors. |
|`command "build" exited with 1`|	Compiler error (e.g., missing imports)|.	Ensure `npm run build` passes locally.|
|`Resource not accessible`|Missing `write` permissions in YAML.|Verify `permissions: pull-requests: write` in the workflow file. | 
| `Project not found`  | incorrect `VERCEL_PROJECT_ID`. | Validate GitHub Action Secrets. |
|`403 Forbidden`| Expired Vercel Token.| Regenerate the Vercel Personal Access Token.|

### Resolve Failures

* **Actions tab:** Open the Actions tab and select the failed run to view specific logs.

* **Fix Locally:** Do not try to fix errors directly in GitHub; apply the fix in your local IDE.

* **Re-push:** Commit and push the fix to your feature branch. GitHub Actions will automatically restart the audit.

## Glossary
To ensure clarity across the project team, the following terms are defined as used in this documentation:

* **CI/CD (Continuous Integration/Continuous Deployment):** The practice of automating the integration of code changes from multiple contributors into a single software project.

* **Linter:** A tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.

* **Pipeline:** A set of automated processes that allow developers to compile, test, and deploy their code to various environments.

* **Pull Request (PR):** A request to merge code changes from one branch into another, allowing for review and automated testing.

* **Staging Branch:** A pre-production environment used for final testing before code is deployed to the live (production) site.

* **Vite Preset:** A pre-configured build setting in Vercel optimized for the Vite frontend tool.

## Next Steps:

* Finalize the mapping of all `VITE_` environment variables in the Vercel Dashboard.

* Conduct a final walkthrough with the development team.
