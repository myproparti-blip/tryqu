'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Database } from 'lucide-react';

export default function MySQLTechPage() {
    const techData = {
        name: 'MySQL',
        emoji: '🐬',
        icon: <Database className="w-6 h-6" />,
        shortDescription:
            'Build reliable applications with MySQL. Our MySQL developers deliver robust database solutions with nearshore expertise.',
        heroTitle: 'Reliable Relational Databases with MySQL',
        heroSubtitle:
            'MySQL is the world\'s most popular open-source relational database powering web applications at scale. Our expert developers leverage MySQL for reliable, performant, and scalable data storage. From LAMP stack applications to modern web platforms, we deliver comprehensive MySQL expertise across the full spectrum of database operations.',
        heroImage: '/images/tech-mysql-rich.svg',
        heroImageAlt: 'MySQL - Open-Source Relational Database',
        services: [
            {
                title: 'Database Design & Schema',
                description:
                    'Design optimized MySQL schemas following normalization and best practices.',
                details:
                    'Entity-relationship modeling, table design, indexing strategy, and schema optimization.',
            },
            {
                title: 'Query Optimization',
                description:
                    'Optimize complex queries for maximum performance and reduced resource usage.',
                details:
                    'Query analysis, index optimization, execution plans, and performance tuning.',
            },
            {
                title: 'Replication & High Availability',
                description:
                    'Implement master-slave replication and clustering for high availability.',
                details:
                    'Replication setup, failover configuration, group replication, and disaster recovery.',
            },
            {
                title: 'Backup & Recovery',
                description:
                    'Implement robust backup strategies and disaster recovery procedures.',
                details:
                    'Full backups, incremental backups, point-in-time recovery, and restoration testing.',
            },
            {
                title: 'Migration & Upgrade',
                description:
                    'Migrate data from legacy systems and upgrade MySQL versions safely.',
                details:
                    'Data migration planning, zero-downtime upgrades, and compatibility management.',
            },
            {
                title: 'Security & Compliance',
                description:
                    'Implement security best practices and compliance requirements.',
                details:
                    'Access control, encryption, auditing, and data protection mechanisms.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'MySQL Variants',
                tools: [
                    'MySQL Community Edition',
                    'MySQL Enterprise Edition',
                    'Percona Server',
                    'MariaDB',
                    'Amazon RDS MySQL',
                    'Google Cloud SQL',
                ],
            },
            {
                title: 'Query & Administration',
                tools: [
                    'MySQL Workbench',
                    'phpMyAdmin',
                    'MySQL CLI',
                    'Sequel Pro',
                    'DBeaver',
                    'Navicat',
                ],
            },
            {
                title: 'ORM & Abstraction',
                tools: [
                    'Sequelize',
                    'TypeORM',
                    'Doctrine',
                    'SQLAlchemy',
                    'Prisma',
                    'Hibernate',
                ],
            },
            {
                title: 'Backup & Monitoring',
                tools: [
                    'mysqldump',
                    'Percona XtraBackup',
                    'Mydumper',
                    'MySQL Enterprise Monitor',
                    'Percona Monitoring',
                    'DataGrip',
                ],
            },
            {
                title: 'Replication & Clustering',
                tools: [
                    'MySQL Replication',
                    'Group Replication',
                    'InnoDB Cluster',
                    'Percona XtraDB Cluster',
                    'Master-Slave Setup',
                    'MySQL NDB Cluster',
                ],
            },
            {
                title: 'Performance Tools',
                tools: [
                    'EXPLAIN Analyzer',
                    'Slow Query Log',
                    'MySQL Query Profiler',
                    'Percona pt-query-digest',
                    'SolarWinds DPA',
                    'Redgate SQL Monitor',
                ],
            },
            {
                title: 'Integration & APIs',
                tools: [
                    'MySQL Connector/J',
                    'MySQL Connector/Python',
                    'MySQL Connector/Node.js',
                    'mysql2',
                    'mysql',
                    'pg (PostgreSQL compatible)',
                ],
            },
            {
                title: 'Cloud Deployment',
                tools: [
                    'AWS RDS',
                    'Google Cloud SQL',
                    'Azure Database for MySQL',
                    'DigitalOcean Managed MySQL',
                    'Linode Managed Databases',
                    'Docker MySQL',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'ACID Compliance',
                description:
                    'MySQL provides ACID transactions for data consistency and reliability.',
            },
            {
                title: 'Open Source',
                description:
                    'Free and open-source with vibrant community and extensive documentation.',
            },
            {
                title: 'Performance',
                description:
                    'Highly optimized for read-heavy workloads with excellent query performance.',
            },
            {
                title: 'Scalability',
                description:
                    'Handles millions of rows with proper indexing and optimization strategies.',
            },
            {
                title: 'High Availability',
                description:
                    'Replication and clustering support for enterprise-grade reliability.',
            },
            {
                title: 'Wide Adoption',
                description:
                    'Industry standard with extensive tool support and community resources.',
            },
        ],
        keyFacts: [
            'MySQL powers over 50% of all web databases worldwide',
            'Used by major companies including Facebook, Twitter, LinkedIn, and YouTube',
            'ACID compliance ensures data integrity and reliability',
            'Multi-threaded architecture enables efficient concurrent query handling',
            'InnoDB provides crash recovery and foreign key constraints',
            'Full-text search capabilities for content searching',
            'Replication enables scaling reads across multiple servers',
            'Cross-platform compatibility runs on Linux, Windows, Mac, and more',
        ],
        faqs: [
            {
                question: 'What\'s the difference between MySQL and PostgreSQL?',
                answer:
                    'MySQL is simpler and faster for read-heavy workloads. PostgreSQL offers more advanced features like JSON, arrays, and better for complex queries. Choose MySQL for web apps, PostgreSQL for complex analytics.',
            },
            {
                question: 'How do we ensure MySQL performance at scale?',
                answer:
                    'Through proper indexing, query optimization, replication for reads, and caching layers. Regular monitoring and maintenance are essential for sustained performance.',
            },
            {
                question: 'What\'s the difference between InnoDB and MyISAM?',
                answer:
                    'InnoDB provides ACID transactions, foreign keys, and crash recovery. MyISAM is faster but lacks transactions. InnoDB is the recommended default storage engine.',
            },
            {
                question: 'How do we backup MySQL databases?',
                answer:
                    'Using mysqldump for logical backups or Percona XtraBackup for physical backups. Cloud providers offer automated backups. Regular testing ensures recovery capability.',
            },
            {
                question: 'Can MySQL handle large datasets?',
                answer:
                    'Yes, with proper optimization. Partitioning, sharding, replication, and archiving strategies enable handling terabytes of data efficiently.',
            },
            {
                question: 'Is MySQL suitable for real-time analytics?',
                answer:
                    'MySQL is better for transactional queries. For analytics, consider PostgreSQL, BigQuery, or Snowflake. MySQL works for analytics with proper indexing and caching.',
            },
        ],
        caseStudies: [
            {
                title: 'E-Commerce Database Optimization',
                description:
                    'Optimized MySQL queries reducing page load time by 60% for 10M+ daily users.',
                link: '#',
            },
            {
                title: 'Database Replication & HA Setup',
                description:
                    'Implemented master-slave replication achieving 99.99% uptime for SaaS platform.',
                link: '#',
            },
            {
                title: 'Data Migration & Upgrade',
                description:
                    'Successfully migrated 500GB MySQL database to cloud with zero downtime.',
                link: '#',
            },
        ],
        relatedTechs: [
            'PostgreSQL',
            'Redis',
            'MongoDB',
            'Node.js',
            'Express.js',
            'Prisma',
            'PHP',
        ],
    };

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                <TechDetailTemplate {...techData} />
            </main>
            <AppverseFooter />
        </>
    );
}
