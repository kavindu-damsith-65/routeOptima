<div align="center">

# RouteOptima

**A database-focused supply-chain system for customers, shops, orders, payments, and route assignment.**

<img src="https://img.shields.io/badge/Completed_academic_database_project-4F86FF?style=flat-square&labelColor=0B1224" alt="Completed academic database project" /> <img src="https://img.shields.io/badge/Public_repository-4F86FF?style=flat-square&labelColor=0B1224" alt="Public repository" />

[Portfolio](https://kavindudamsith.tech/) &nbsp;|&nbsp; [LinkedIn](https://www.linkedin.com/in/kavindu-damsith-86696722a/) &nbsp;|&nbsp; [Email](mailto:kavindudamsith65@gmail.com)

</div>

---

## Overview

RouteOptima was built as a second-semester database project. It connects customer ordering with shop-management and delivery-planning views, using an Express service and MySQL model behind a React interface.

## What it does

| Area | Details |
| --- | --- |
| **Customer flows** | Registration, account management, product discovery, cart, and order interaction. |
| **Shop operations** | Shop-manager routes and operational dashboard views. |
| **Route assignment** | Interfaces for assigning and coordinating fulfilment routes. |
| **Data model** | Relational SQL export and database-design material. |
| **Access control** | JWT authentication and administrative middleware. |

## Repository map

| Path | Purpose |
| --- | --- |
| `routeOptima/frontend/src/customer/` | Customer-facing components and flows. |
| `routeOptima/frontend/src/components/` | Dashboards, route assignment, login, and navigation. |
| `routeOptima/backend/controllers/` | User, shop, and order behaviour. |
| `routeOptima/backend/routes/` | Customer, shop-manager, and control endpoints. |
| `db/` | MySQL schema and database model. |

## Technology

- **React**
- **Node.js**
- **Express**
- **MySQL**
- **Material UI**
- **JWT**

## Local setup

```bash
cd routeOptima/backend && npm install
npm start
# In another terminal
cd routeOptima/frontend && npm install
npm start
```

### Configuration notes

Import the SQL schema and configure the API and database connection locally before starting both applications.

## Status

Completed academic database project.

## Links

- [Portfolio project index](https://kavindudamsith.tech/#work)

---

Questions about this repository? [Email me](mailto:kavindudamsith65@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/kavindu-damsith-86696722a/).
