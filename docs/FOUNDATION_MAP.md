# Database and folder map

## Data domains

| Domain           | Models                                                                      | Notes                                                                    |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Tenancy & access | Organization, User, Role, Permission, UserRole, Session, Account            | One organization owns all agency data; permissions are composable.       |
| CRM & sales      | Client, ClientContact, Lead, ContactForm, Appointment, NewsletterSubscriber | Leads can graduate into clients without data duplication.                |
| Delivery         | Project, Service, ProjectService, Task, Meeting, File, Message              | Projects provide the client-facing delivery boundary.                    |
| Finance          | Invoice, InvoiceLineItem, Payment                                           | Decimal money values, immutable provider IDs, status-based workflows.    |
| Content          | BlogPost, PortfolioItem, Testimonial, Media, Category, Tag, FAQ             | Separated from delivery so public CMS can evolve independently.          |
| Operations       | SupportTicket, Notification, AnalyticsEvent, Setting, AuditLog, Activity    | Append-only audit/activity records support accountability and reporting. |

## Source layout

| Path                                                    | Purpose                                                                           |
| ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `src/app`                                               | App Router routes, layouts, metadata, route handlers, loading/error boundaries.   |
| `src/components/ui`                                     | shadcn-compatible primitive controls.                                             |
| `src/components/shared`                                 | reusable cross-feature interactive components and visual primitives.              |
| `src/features`                                          | vertical feature modules; keep future CRM, projects, billing, and CMS logic here. |
| `src/config`                                            | validated environment and product configuration.                                  |
| `src/database` / `prisma`                               | Prisma singleton, schema, migration and seed source.                              |
| `src/lib`                                               | narrow cross-cutting utilities: auth, security, logging, API response contracts.  |
| `src/services`                                          | integration adapters for email, payments, and media.                              |
| `src/schemas`                                           | Zod contracts shared by server actions and route handlers.                        |
| `src/animations`                                        | shared motion tokens and variants.                                                |
| `src/hooks`, `src/types`, `src/constants`, `src/emails` | extension points for reusable hooks, declarations, values, and email templates.   |
| `tests` / `e2e`                                         | unit/integration and browser-test boundaries.                                     |
| `docs`, `scripts`, `.github`                            | engineering knowledge, controlled automation, and CI.                             |

Folders are created only when they have a stable purpose. Do not add generic `helpers`, `misc`, or global feature-specific components.
