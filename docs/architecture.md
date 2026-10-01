flowchart TB
    A["User Browser"] --> B["CDN - CloudFront<br/>static files + images"]
    B --> C["Next.js Frontend<br/>SSR + ISR, autoscaled 2-20 pods"]
    C --> D["API Gateway<br/>auth, rate limiting, routing"]
    D --> E["Backend Microservices<br/>Node.js on Kubernetes<br/>listing | search | booking | payment | auth"]

    E --> F[("PostgreSQL<br/>primary + 3 read replicas<br/>PgBouncer pooling")]
    E --> G[("Redis Cache<br/>sessions, hot listings")]
    E --> H[("Elasticsearch<br/>geo-aware search index")]
    E --> I[("S3 + Image Pipeline<br/>property photos")]

    E --> J[["Kafka Event Bus<br/>booking events, search indexing"]]
    J --> H

    K["CI/CD - GitHub Actions<br/>Docker build, blue-green deploy"] -.-> C
    K -.-> E
    L["Monitoring - Prometheus + Grafana<br/>Sentry error tracking"] -.-> E