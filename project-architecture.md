# NAWI — Project Architecture

## Development of a Software Program/Application for Generation of Test Reports for Non-Automatic Weighing Instruments (NAWI) as per OIML Recommendation R-76

---

## 📁 Complete Project Structure

```text
NAWI/
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── assets/
│       └── images/
│           ├── ashoka_emblem_logo_1790519895046.jpg
│           ├── india_emblem_logo_1790516515609.jpg
│           ├── metrology_lab_bg_1790233420306.jpg
│           ├── metrology_login_hero_1790513847507.jpg
│           └── nawi_login_bg_1790523100448.jpg
│
├── frontend/
│   ├── public/
│   │   ├── india_emblem_logo.png
│   │   └── india_emblem_logo.jpg
│   │
│   └── src/
│       ├── components/
│       │   ├── DocumentViewerModal.jsx
│       │   ├── FormField.jsx
│       │   ├── IndiaEmblem.jsx
│       │   ├── Loading.jsx
│       │   ├── Modal.jsx
│       │   ├── Navbar.jsx
│       │   ├── NotificationDropdown.jsx
│       │   ├── ReportTable.jsx
│       │   ├── Sidebar.jsx
│       │   ├── StatCard.jsx
│       │   ├── StatusBadge.jsx
│       │   └── TestStepper.jsx
│       │
│       ├── context/
│       │   └── AuthContext.jsx
│       │
│       ├── pages/
│       │   ├── ComplianceResult.jsx
│       │   ├── CreateTestReport.jsx
│       │   ├── Dashboard.jsx
│       │   ├── InstrumentDetails.jsx
│       │   ├── LaboratoryEnvironment.jsx
│       │   ├── Login.jsx
│       │   ├── RegulatoryReferences.jsx
│       │   ├── ReportPreview.jsx
│       │   ├── ReportRepository.jsx
│       │   ├── SelectTests.jsx
│       │   ├── Settings.jsx
│       │   ├── TestObservations.jsx
│       │   └── UserManagement.jsx
│       │
│       ├── services/
│       │   ├── api.js
│       │   ├── authService.js
│       │   ├── instrumentService.js
│       │   ├── reportService.js
│       │   └── testService.js
│       │
│       ├── styles/
│       │   ├── dashboard.css
│       │   ├── forms.css
│       │   ├── global.css
│       │   ├── login.css
│       │   ├── reports.css
│       │   └── sidebar.css
│       │
│       └── assets/
│           └── images/
│               ├── india_emblem_logo.jpg
│               ├── metrology_login_hero.jpg
│               └── nawi_login_bg.jpg
│
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   ├── .env.example
│   │
│   └── src/
│       ├── config/
│       │   └── database.js
│       │
│       ├── controllers/
│       │   ├── authController.js
│       │   ├── instrumentController.js
│       │   ├── reportController.js
│       │   ├── testController.js
│       │   └── userController.js
│       │
│       ├── middleware/
│       │   ├── authMiddleware.js
│       │   ├── errorMiddleware.js
│       │   └── roleMiddleware.js
│       │
│       ├── models/
│       │   ├── Attachment.js
│       │   ├── Instrument.js
│       │   ├── TestObservation.js
│       │   ├── TestReport.js
│       │   └── User.js
│       │
│       ├── routes/
│       │   ├── authRoutes.js
│       │   ├── instrumentRoutes.js
│       │   ├── reportRoutes.js
│       │   ├── testRoutes.js
│       │   └── userRoutes.js
│       │
│       ├── rules/
│       │   └── oimlR76Rules.js
│       │
│       ├── services/
│       │   ├── calculationService.js
│       │   ├── complianceService.js
│       │   ├── pdfService.js
│       │   ├── validationService.js
│       │   └── wordService.js
│       │
│       └── server.js
│
├── database/
│   ├── schema.sql
│   └── seed.js
│
├── public/
│   ├── india_emblem_logo.png
│   ├── india_emblem_logo.jpg
│   └── nawi_login_bg.jpg
│
├── index.html
├── server.ts
├── package.json
├── package-lock.json
├── bun.lock
├── tsconfig.json
├── vite.config.ts
├── .env
├── .env.example
├── .gitignore
├── .npmrc
└── metadata.json
```

---

# 🎯 Architecture Overview

The NAWI application is organized into four main layers:

```text
┌───────────────────────────────────────────────┐
│                  FRONTEND                     │
│                                               │
│ React / JSX • Pages • Components • Services   │
│ Forms • Dashboard • Reports • Navigation      │
└──────────────────────┬────────────────────────┘
                       │
                       │ REST API
                       ▼
┌───────────────────────────────────────────────┐
│                  BACKEND                      │
│                                               │
│ Node.js + Express                             │
│ Controllers • Routes • Middleware • Services  │
│ Rules • Authentication • Report Generation    │
└──────────────────────┬────────────────────────┘
                       │
                       ▼
┌───────────────────────────────────────────────┐
│                  DATABASE                     │
│                                               │
│ PostgreSQL Schema                             │
│ Users • Instruments • Reports • Observations  │
│ References • Rules • Attachments • Audit Logs │
└───────────────────────────────────────────────┘
```

---

# 🖥️ Frontend Architecture

## `frontend/src/pages/`

The pages folder contains the main application screens and workflow stages.

### Login

`Login.jsx`

Provides the application login interface and authentication entry point.

### Dashboard

`Dashboard.jsx`

Provides the central overview of test reports and laboratory activity.

### Create Test Report

`CreateTestReport.jsx`

Controls the test-report creation workflow.

### Instrument Details

`InstrumentDetails.jsx`

Captures NAWI manufacturer, model, serial number, capacity, accuracy class and related instrument information.

### Laboratory Environment

`LaboratoryEnvironment.jsx`

Captures laboratory and environmental conditions associated with testing.

### Select Tests

`SelectTests.jsx`

Allows applicable NAWI test procedures to be selected.

### Test Observations

`TestObservations.jsx`

Captures test-point observations and measured values.

### Compliance Result

`ComplianceResult.jsx`

Displays the calculated compliance outcome.

### Report Preview

`ReportPreview.jsx`

Provides the generated report preview before final use.

### Report Repository

`ReportRepository.jsx`

Provides report listing, retrieval and historical report access.

### Regulatory References

`RegulatoryReferences.jsx`

Provides access to the regulatory and standards reference information used by the system.

### User Management

`UserManagement.jsx`

Provides user-management functionality.

### Settings

`Settings.jsx`

Provides application settings.

---

# 🧩 Frontend Components

## `frontend/src/components/`

| Component | Purpose |
|---|---|
| `Navbar.jsx` | Application navigation/header |
| `Sidebar.jsx` | Main sidebar navigation |
| `IndiaEmblem.jsx` | Government emblem display |
| `StatCard.jsx` | Dashboard statistics |
| `StatusBadge.jsx` | Report/status indicators |
| `ReportTable.jsx` | Report listing/table |
| `TestStepper.jsx` | Multi-stage test workflow navigation |
| `FormField.jsx` | Reusable form field |
| `Modal.jsx` | Reusable modal interface |
| `DocumentViewerModal.jsx` | Document/report viewing interface |
| `NotificationDropdown.jsx` | Notification interface |
| `Loading.jsx` | Loading state |

---

# 🔐 Authentication Context

## `frontend/src/context/AuthContext.jsx`

Provides authentication state to the frontend and supports protected application access.

The backend also contains authentication and role middleware for protected operations.

---

# 🔌 Frontend Services

## `frontend/src/services/`

```text
api.js
   │
   ├── authService.js
   ├── instrumentService.js
   ├── reportService.js
   └── testService.js
```

These services provide the frontend communication layer for authentication, instrument information, reports and test operations.

---

# 🎨 Frontend Styling

## `frontend/src/styles/`

```text
Dashboard Styles     → dashboard.css
Form Styles          → forms.css
Global Styles        → global.css
Login Styles         → login.css
Report Styles        → reports.css
Sidebar Styles       → sidebar.css
```

---

# ⚙️ Backend Architecture

## `backend/src/`

The backend is organized into configuration, controllers, middleware, models, routes, rule definitions and services.

```text
backend/src/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── rules/
├── services/
└── server.js
```

---

# 🎛️ Controllers

## `backend/src/controllers/`

```text
Authentication Controller
        ↓
authController.js

Instrument Controller
        ↓
instrumentController.js

Report Controller
        ↓
reportController.js

Test Controller
        ↓
testController.js

User Controller
        ↓
userController.js
```

Controllers handle incoming application requests and connect the routes with the required application operations.

---

# 🛡️ Middleware

## `backend/src/middleware/`

### `authMiddleware.js`

Handles authentication protection for backend operations.

### `roleMiddleware.js`

Provides role-based access control.

### `errorMiddleware.js`

Provides centralized backend error handling.

---

# 🗃️ Backend Models

## `backend/src/models/`

```text
User
 │
 ├── Test Reports
 │     ├── Instrument
 │     ├── Test Observations
 │     └── Attachments
 │
 └── User / Review information
```

Available model files:

- `User.js`
- `Instrument.js`
- `TestReport.js`
- `TestObservation.js`
- `Attachment.js`

---

# 🛣️ Backend Routes

## `backend/src/routes/`

```text
authRoutes.js
instrumentRoutes.js
reportRoutes.js
testRoutes.js
userRoutes.js
```

These routes provide the API entry points for authentication, instruments, reports, tests and user operations.

---

# 📏 OIML R-76 Rule Layer

## `backend/src/rules/oimlR76Rules.js`

This module contains the project's configured OIML R-76-oriented rule logic used by the application workflow.

```text
Instrument Information
        ↓
Accuracy Class / Verification Interval
        ↓
Applicable Test Requirement
        ↓
Observation
        ↓
Calculation
        ↓
Compliance Result
```

The configured values are part of the prototype and should be verified against the applicable official standard and current regulatory requirements before real regulatory use.

---

# 🧮 Backend Services

## `backend/src/services/`

### `calculationService.js`

Handles calculation operations used by the test-report workflow.

### `complianceService.js`

Evaluates configured requirements and produces compliance results.

### `validationService.js`

Handles validation of application and test data.

### `pdfService.js`

Generates PDF test reports.

### `wordService.js`

Generates editable Word test reports.

```text
Test Observations
        ↓
Validation Service
        ↓
Calculation Service
        ↓
Compliance Service
        ↓
Report Controller
        ├───────────────┐
        ▼               ▼
PDF Service       Word Service
        │               │
        ▼               ▼
     PDF Report     Word Report
```

---

# 🗄️ Database Architecture

## `database/`

```text
database/
├── schema.sql
└── seed.js
```

The PostgreSQL schema contains the following major tables:

```text
users
instruments
test_reports
laboratory_conditions
test_observations
attachments
regulatory_references
rule_configurations
audit_logs
```

### Relationship Overview

```text
USER
 │
 ├───────────────┐
 │               │
 ▼               ▼
TEST REPORT   AUDIT LOG
 │
 ├── INSTRUMENT
 │
 ├── LABORATORY CONDITIONS
 │
 ├── TEST OBSERVATIONS
 │
 └── ATTACHMENTS
```

---

# 📝 Report Generation Architecture

```text
Instrument Details
        ↓
Laboratory Conditions
        ↓
Selected Tests
        ↓
Test Observations
        ↓
Calculated Errors
        ↓
Compliance Evaluation
        ↓
Report Preview
        ↓
┌─────────────────────┐
│ Generate Report     │
└─────────┬───────────┘
          │
     ┌────┴────┐
     ▼         ▼
   PDF       WORD
```

The project contains dedicated services for both PDF and editable Word report generation.

---

# 🔄 Complete Application Workflow

```text
LOGIN
  │
  ▼
DASHBOARD
  │
  ▼
CREATE TEST REPORT
  │
  ├── Instrument Details
  │
  ├── Laboratory Environment
  │
  ├── Select Tests
  │
  ├── Test Observations
  │
  └── Compliance Result
  │
  ▼
REPORT PREVIEW
  │
  ├── PDF
  └── WORD
  │
  ▼
REPORT REPOSITORY
  │
  ├── View
  ├── Search
  └── Historical Reports
```

---

# 🏛️ Regulatory Reference Layer

The application includes `RegulatoryReferences.jsx` on the frontend and the `regulatory_references` / `rule_configurations` tables in the database.

The project documentation references:

- Department of Consumer Affairs — Legal Metrology Act
- Legal Metrology (General) Rules, 2011
- OIML Recommendation R-76 for Non-Automatic Weighing Instruments

Dataset/reference link supplied for the project:

https://consumeraffairs.gov.in/pages/legal-metrology-act

---

# 👥 User Roles

The database schema defines these application roles:

```text
ADMIN
LABORATORY_OFFICER
TEST_ENGINEER
REVIEWER
VIEWER
```

Role-based access is supported through the backend `roleMiddleware.js` layer.

---

# 🔒 Security & Access Architecture

```text
LOGIN
  ↓
Authentication
  ↓
JWT / Protected Access
  ↓
Role Authorization
  ↓
Application Operation
  ↓
Audit Information
```

The project contains authentication middleware, role middleware and user-management functionality.

---

# 📊 Data Flow

```text
USER
 ↓
FRONTEND FORM
 ↓
FRONTEND SERVICE
 ↓
REST API
 ↓
CONTROLLER
 ↓
VALIDATION
 ↓
CALCULATION / COMPLIANCE
 ↓
DATABASE
 ↓
REPORT GENERATION
 ↓
PDF / WORD
```

---

# 🛠️ Technology Stack Present in the Project

## Frontend

- React
- React DOM
- React Router
- Vite
- JavaScript / JSX
- TypeScript entry/configuration
- Tailwind CSS tooling
- Lucide React
- Recharts
- Motion
- Axios

## Backend

- Node.js
- Express.js
- JWT
- bcryptjs
- CORS
- Multer
- dotenv

## Database

- PostgreSQL schema
- UUID support
- Relational tables
- Foreign-key relationships
- Status constraints
- Audit logging

## Report Generation

- PDFKit
- DOCX

---

# 📦 Root Configuration

```text
package.json
package-lock.json
bun.lock
tsconfig.json
vite.config.ts
server.ts
index.html
metadata.json
.env
.env.example
.gitignore
.npmrc
```

The project also contains a separate backend package configuration under `backend/package.json`.

---

# 🚀 Deployment / Runtime Structure

The project contains a Vite/React frontend structure and a Node/Express backend structure.

```text
Frontend
   ↓
Vite / React
   ↓
API Requests
   ↓
Node.js + Express Backend
   ↓
PostgreSQL Database
   ↓
Report Generation Services
```

---

# ⚠️ Prototype Note

This architecture document describes the actual file and module structure found in the supplied NAWI project ZIP.

The project is intended as a prototype for the stated problem:

> **Development of a Software Program/Application for Generation of Test Reports for Non-Automatic Weighing Instruments (NAWI) as per OIML Recommendation R-76**

Configured OIML-related rule values and demonstration logic must be verified against the applicable official OIML recommendation, Indian Legal Metrology requirements, amendments and laboratory procedures before regulatory or certification use.

---

# 🎯 Final Architecture Summary

```text
                 NAWI TEST REPORT SYSTEM
                           │
                           ▼
                    React Frontend
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
        Test Workflow              Report UI
              │                         │
              └────────────┬────────────┘
                           ▼
                   Express Backend
                           │
       ┌──────────┬────────┼──────────┐
       ▼          ▼        ▼          ▼
   Validation Calculation Compliance Authentication
       │          │        │          │
       └──────────┴────────┴──────────┘
                           │
                           ▼
                  PostgreSQL Database
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
        Test Reports               Audit / Rules
             │
             ▼
      PDF + Editable Word
```

### **NAWI — Digitizing the workflow from instrument testing and observations to structured, traceable test reports.**
