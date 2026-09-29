# System Overview

## Project Name

**NAWI — OIML R-76 Test Report Generation System**

## Problem Statement

**SIH26035 — Development of a Software Program/Application for Generation of Test Reports for Non-Automatic Weighing Instruments (NAWI) as per OIML Recommendation R-76**

## Primary Goal

Develop a software application that digitizes and streamlines the testing and test-report generation process for Non-Automatic Weighing Instruments (NAWI).

The system records instrument details, technical specifications, laboratory and environmental conditions, and test observations, performs validation and required calculations, determines compliance and generates standardized test reports according to OIML R-76.

## Core Capabilities

### Instrument Registration

The system captures manufacturer details, instrument specifications, model information and technical parameters required for NAWI testing.

### Laboratory & Environmental Conditions

The application records laboratory information and environmental conditions under which the instrument testing is performed.

### OIML R-76 Test Management

The system provides structured digital forms for applicable OIML R-76 test procedures and allows laboratory personnel to record observations for each test.

### Test Observation Entry

Testers can digitally enter measurement values, observations and other test-specific information obtained during the evaluation of the weighing instrument.

### Automatic Calculations

The system automatically performs required calculations, including permissible-error calculations, based on the entered test observations and applicable OIML R-76 requirements.

### Data Validation

The application performs validation checks on entered test data and related calculations to help identify invalid or inconsistent values before report generation.

### Compliance Analysis

The system evaluates test observations and calculated results against the applicable OIML R-76 requirements.

### Pass / Fail Determination

Based on the applicable requirements and validated test results, the system determines the compliance status of individual tests and the overall evaluation.

### Test Report Generation

The application automatically prepares a standardized digital test report by combining instrument details, laboratory information, test observations, calculations and compliance results.

### PDF & Editable Export

Generated reports can be exported in **PDF and editable formats such as Microsoft Word**, supporting further review and documentation.

### Photograph & Document Attachments

The system supports attachment of photographs and supporting documents related to the instrument and testing process.

### Report Dashboard

A centralized dashboard provides an overview of testing activities and report status, including reports that are **completed, in process and available in history**.

### Report History & Repository

Completed reports are maintained in a digital repository. Users can search and retrieve previously generated reports using relevant instrument or report information.

### Secure User Access

The application provides secure access with role-based permissions so users can access functions according to their assigned responsibilities.

### Digital Signatures

The system can support digital signatures as an optional feature for authorized users during the report approval or documentation process.

### Future OIML Updates

The system architecture can support future updates when applicable OIML recommendations or requirements are revised.

## Technical Architecture

The system combines:

- Web-based laboratory application
- Frontend user interface
- Backend application services
- Instrument and technical specification database
- Laboratory and environmental data
- OIML R-76 test and rule layer
- Calculation engine
- Validation engine
- Compliance analysis module
- Test report generation module
- PDF and editable document export
- Photograph and document attachment storage
- Report repository
- Search and retrieval facility
- Dashboard and report-status management
- Role-based access control
- Regulatory reference layer

## System Workflow

```text
NAWI Instrument Registration
            ↓
Manufacturer & Technical Details
            ↓
Laboratory & Environmental Conditions
            ↓
OIML R-76 Test Selection
            ↓
Test Observation Entry
            ↓
Input Validation
            ↓
Automatic Calculations
            ↓
Compliance Analysis
            ↓
PASS / FAIL Determination
            ↓
Report Review
            ↓
Test Report Generation
            ↓
PDF / Editable Report
            ↓
Attachments / Digital Signature
            ↓
Report Repository
            ↓
Search & Retrieval
            ↓
Dashboard & Report History