'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechGroupTemplate } from '@/components/technologies/tech-group-template';

export default function DatabasesTechnologiesPage() {
    return (
        <>
            <SiteHeader />
            <TechGroupTemplate
                groupTitle="Databases & Data"
                groupSubtitle="Optimizing data storage, retrieval, and analysis for high performance, scalability, and actionable business insights"
                businessValue="Data Storage & Performance"
                technologies={[
                    { name: "PostgreSQL", path: "/technologies/postgresql" },
                    { name: "MongoDB", path: "/technologies/mongodb" },
                    { name: "Redis", path: "/technologies/redis" },
                    { name: "Firebase", path: "/technologies/firebase" },
                    { name: "MySQL", path: "/technologies/mysql" },
                    { name: "Elasticsearch", path: "/technologies/elasticsearch" },
                    { name: "DynamoDB", path: "/technologies/dynamodb" },
                    { name: "GraphQL", path: "/technologies/graphql" },
                ]}
                keyBenefits={[
                    "Handle massive data volumes with horizontal scaling, partitioning, and replication strategies that maintain performance.",
                    "Reduce query latency with intelligent caching, indexing, and database optimization techniques for responsive applications.",
                    "Ensure data consistency and reliability through ACID transactions, backup automation, and disaster recovery protocols.",
                    "Simplify data access with flexible schema designs and query languages that adapt to evolving business requirements.",
                    "Extract actionable insights with analytics-ready databases and real-time data processing capabilities.",
                ]}
            />
            <AppverseFooter />
        </>
    );
}
