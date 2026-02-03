'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Zap } from 'lucide-react';

export default function RedisTechPage() {
    const techData = {
        name: 'Redis',
        emoji: '⚡',
        icon: <Zap className="w-6 h-6" />,
        shortDescription:
            'Accelerate your applications with Redis. Our Redis experts deliver high-performance caching and data store solutions with nearshore expertise.',
        heroTitle: 'Ultra-Fast In-Memory Data Store with Redis',
        heroSubtitle:
            'Redis is the world\'s fastest in-memory data store powering real-time applications, caching, and session management. Our expert developers leverage Redis for lightning-fast performance, handling millions of operations per second. From caching layers to real-time analytics, we deliver comprehensive Redis expertise across modern application architectures.',
        heroImage: '/images/tech-redis-rich.svg',
        heroImageAlt: 'Redis - In-Memory Data Store',
        services: [
            {
                title: 'Caching Solutions',
                description:
                    'Implement efficient caching strategies to accelerate application performance.',
                details:
                    'Cache layer design, cache invalidation strategies, and performance optimization.',
            },
            {
                title: 'Session Management',
                description:
                    'Build scalable session management systems using Redis.',
                details:
                    'Session storage, distributed sessions, session persistence, and security.',
            },
            {
                title: 'Real-Time Data',
                description:
                    'Build real-time features with Redis pub/sub and streams.',
                details:
                    'Publish/subscribe messaging, real-time notifications, and event streaming.',
            },
            {
                title: 'Rate Limiting & Throttling',
                description:
                    'Implement rate limiting and API throttling with Redis.',
                details:
                    'Token bucket algorithms, request tracking, and distributed rate limiting.',
            },
            {
                title: 'Queue Management',
                description:
                    'Build reliable job queues and task processing systems.',
                details:
                    'Job queue implementation, worker management, and retry logic.',
            },
            {
                title: 'Analytics & Counters',
                description:
                    'Implement real-time analytics and counting systems.',
                details:
                    'HyperLogLog for cardinality estimation, sorted sets for leaderboards.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'Redis Variants',
                tools: [
                    'Redis Community',
                    'Redis Enterprise',
                    'AWS ElastiCache',
                    'Google Cloud Memorystore',
                    'Azure Cache for Redis',
                    'Heroku Redis',
                ],
            },
            {
                title: 'Client Libraries',
                tools: [
                    'node-redis',
                    'ioredis',
                    'redis-py',
                    'redis-js',
                    'Jedis (Java)',
                    'StackExchange.Redis (.NET)',
                ],
            },
            {
                title: 'Data Structures',
                tools: [
                    'Strings',
                    'Lists',
                    'Sets',
                    'Sorted Sets',
                    'Hashes',
                    'Streams',
                ],
            },
            {
                title: 'Pub/Sub & Messaging',
                tools: [
                    'Publish/Subscribe',
                    'Streams',
                    'Message Queue Pattern',
                    'Bull Queue',
                    'RQ (Python)',
                    'Sidekiq (Ruby)',
                ],
            },
            {
                title: 'Management Tools',
                tools: [
                    'Redis CLI',
                    'Redis Desktop Manager',
                    'RedisInsight',
                    'redis-commander',
                    'phpRedisAdmin',
                    'medis',
                ],
            },
            {
                title: 'Persistence & Replication',
                tools: [
                    'RDB (Snapshots)',
                    'AOF (Append-Only File)',
                    'Master-Slave Replication',
                    'Sentinel',
                    'Cluster',
                    'Redis Streams',
                ],
            },
            {
                title: 'Integration',
                tools: [
                    'Express.js Middleware',
                    'Django Cache Backend',
                    'Laravel Cache',
                    'Spring Data Redis',
                    'Sequelize',
                    'Mongoose',
                ],
            },
            {
                title: 'Performance Monitoring',
                tools: [
                    'Redis Monitoring',
                    'New Relic',
                    'Datadog',
                    'Prometheus',
                    'Grafana',
                    'RedisInsight Analytics',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'Lightning Speed',
                description:
                    'Sub-millisecond latency for millions of operations per second.',
            },
            {
                title: 'Versatility',
                description:
                    'Multiple data structures supporting diverse use cases from caching to real-time.',
            },
            {
                title: 'High Availability',
                description:
                    'Replication and Sentinel provide fault tolerance and automatic failover.',
            },
            {
                title: 'Scalability',
                description:
                    'Redis Cluster enables horizontal scaling for massive datasets.',
            },
            {
                title: 'Real-Time Capabilities',
                description:
                    'Pub/Sub and Streams enable real-time features and event processing.',
            },
            {
                title: 'Developer Friendly',
                description:
                    'Simple commands and extensive documentation make Redis easy to learn.',
            },
        ],
        keyFacts: [
            'Redis handles 1M+ operations per second with sub-millisecond latency',
            'Used by major companies including Twitter, Netflix, GitHub, and StackOverflow',
            'Open-source and community-driven with active development',
            'Supports 5 core data structures: strings, lists, sets, sorted sets, hashes',
            'Redis Streams (v5.0+) provide Kafka-like capabilities',
            'Automatic expiration enables automatic cleanup of temporary data',
            'Replication and persistence ensure data durability',
            'Cluster mode enables scaling to terabytes of data',
        ],
        faqs: [
            {
                question: 'What\'s the difference between Redis and Memcached?',
                answer:
                    'Redis supports more data structures and persistence. Memcached is simpler but faster for basic caching. Redis is more versatile and powerful for modern applications.',
            },
            {
                question: 'Is Redis persistent?',
                answer:
                    'Yes, with RDB snapshots or AOF. However, Redis is primarily in-memory. For permanent storage, use SQL/NoSQL databases with Redis as a caching layer.',
            },
            {
                question: 'How do we ensure high availability with Redis?',
                answer:
                    'Using Redis Sentinel for automatic failover or Redis Cluster for distributed setup. Cloud providers offer managed Redis with automatic backups and failover.',
            },
            {
                question: 'Can Redis handle large datasets?',
                answer:
                    'Redis Cluster enables scaling across multiple nodes. For very large datasets, combine Redis with databases for warm/cold data separation.',
            },
            {
                question: 'What\'s the best use case for Redis?',
                answer:
                    'Caching, sessions, real-time leaderboards, rate limiting, pub/sub messaging, and job queues. Use databases for permanent storage.',
            },
            {
                question: 'How do we monitor Redis performance?',
                answer:
                    'Using Redis commands (INFO, SLOWLOG), RedisInsight for visualization, or monitoring tools like Datadog and New Relic.',
            },
        ],
        caseStudies: [
            {
                title: 'E-Commerce Session Management',
                description:
                    'Scaled session management to handle 100K concurrent users with sub-ms latency.',
                link: '#',
            },
            {
                title: 'Real-Time Leaderboard System',
                description:
                    'Built real-time leaderboards using Redis sorted sets for gaming platform.',
                link: '#',
            },
            {
                title: 'Job Queue Implementation',
                description:
                    'Implemented reliable job queue system processing 10K+ tasks per minute.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'MongoDB',
            'RabbitMQ',
            'Kafka',
            'AWS ElastiCache',
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
