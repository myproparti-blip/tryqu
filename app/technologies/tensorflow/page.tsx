'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { TechDetailTemplate } from '@/components/technologies/tech-detail-template';
import { Brain } from 'lucide-react';

export default function TensorFlowTechPage() {
    const techData = {
        name: 'TensorFlow',
        emoji: '🤖',
        icon: <Brain className="w-6 h-6" />,
        shortDescription:
            'Scale your AI/ML with TensorFlow. Our TensorFlow experts deliver production-grade machine learning models and systems.',
        heroTitle: 'Enterprise Machine Learning with TensorFlow',
        heroSubtitle:
            'TensorFlow is Google\'s open-source machine learning framework powering AI applications at scale. Our expert team builds, trains, and deploys production-grade ML models using TensorFlow. From computer vision to natural language processing, we provide comprehensive TensorFlow expertise for enterprise AI.',
        heroImage: '/images/tech-tensorflow-rich.svg',
        heroImageAlt: 'TensorFlow - Machine Learning Framework',
        services: [
            {
                title: 'Deep Learning Model Development',
                description:
                    'Build deep neural networks for computer vision, NLP, and time-series prediction using TensorFlow.',
                details:
                    'CNNs, RNNs, Transformers, and custom architectures with Keras and TensorFlow 2.x best practices.',
            },
            {
                title: 'Computer Vision Solutions',
                description:
                    'Develop image recognition, object detection, segmentation, and visual understanding applications.',
                details:
                    'Using pre-trained models, transfer learning, and custom CNN architectures for production vision systems.',
            },
            {
                title: 'Natural Language Processing',
                description:
                    'Build NLP models for text classification, sentiment analysis, named entity recognition, and language understanding.',
                details:
                    'Transformer models, BERT fine-tuning, and sequence-to-sequence architectures for advanced NLP.',
            },
            {
                title: 'ML Pipeline & MLOps',
                description:
                    'Build end-to-end ML pipelines for training, validation, deployment, and monitoring.',
                details:
                    'TensorFlow Extended (TFX), data pipelines, model serving, and production ML systems.',
            },
            {
                title: 'Model Optimization & Deployment',
                description:
                    'Optimize models for size, latency, and efficiency for production deployment on edge and cloud.',
                details:
                    'TensorFlow Lite for mobile, quantization, pruning, and TensorFlow Serving for high-performance inference.',
            },
            {
                title: 'Transfer Learning & Fine-tuning',
                description:
                    'Leverage pre-trained models for faster training with limited data through transfer learning.',
                details:
                    'Using ImageNet, BERT, GPT models and fine-tuning for domain-specific applications.',
            },
        ],
        ecosystemCategories: [
            {
                title: 'TensorFlow Ecosystem',
                tools: [
                    'TensorFlow',
                    'Keras',
                    'TensorFlow Lite',
                    'TensorFlow.js',
                    'TensorFlow Serving',
                    'TensorFlow Extended (TFX)',
                ],
            },
            {
                title: 'Deep Learning Frameworks',
                tools: [
                    'PyTorch',
                    'JAX',
                    'MXNet',
                    'Theano',
                    'Caffe',
                    'Chainer',
                ],
            },
            {
                title: 'Pre-trained Models',
                tools: [
                    'Inception',
                    'ResNet',
                    'VGG',
                    'BERT',
                    'GPT',
                    'MobileNet',
                ],
            },
            {
                title: 'Data Processing',
                tools: [
                    'TensorFlow Data',
                    'Pandas',
                    'NumPy',
                    'OpenCV',
                    'Pillow',
                    'Scikit-image',
                ],
            },
            {
                title: 'Model Evaluation & Validation',
                tools: [
                    'TensorFlow Model Analysis',
                    'What-If Tool',
                    'Scikit-learn metrics',
                    'Confusion matrices',
                    'ROC curves',
                    'Cross-validation',
                ],
            },
            {
                title: 'MLOps & Deployment',
                tools: [
                    'TensorFlow Serving',
                    'KServe',
                    'Seldon',
                    'BentoML',
                    'MLflow',
                    'Kubeflow',
                ],
            },
            {
                title: 'Visualization & Analysis',
                tools: [
                    'TensorBoard',
                    'Matplotlib',
                    'Seaborn',
                    'Plotly',
                    'Weights & Biases',
                    'Neptune AI',
                ],
            },
            {
                title: 'Optimization & Deployment',
                tools: [
                    'TensorFlow Lite',
                    'TensorFlow.js',
                    'ONNX',
                    'Quantization',
                    'Pruning',
                    'Compression',
                ],
            },
        ],
        whyChoose: [
            {
                title: 'TensorFlow Expertise',
                description:
                    'Our team includes ML engineers with deep TensorFlow expertise and production model deployment experience.',
            },
            {
                title: 'End-to-End ML Development',
                description:
                    'From problem definition through data preparation, training, optimization, and deployment.',
            },
            {
                title: 'Production-Grade Systems',
                description:
                    'Build ML systems ready for production with proper monitoring, versioning, and reliability.',
            },
            {
                title: 'Domain Expertise',
                description:
                    'Deep experience in computer vision, NLP, recommendation systems, and domain-specific ML applications.',
            },
            {
                title: 'Performance Optimization',
                description:
                    'Optimize models for inference latency, memory, and deployment constraints.',
            },
            {
                title: 'Nearshore Partnership',
                description:
                    'LATAM-based teams with timezone overlap ensure seamless collaboration on ML projects.',
            },
        ],
        keyFacts: [
            'TensorFlow is the #1 machine learning framework used by 73% of ML developers',
            'Developed by Google and used internally for Google Search, Photos, and other AI services',
            'Supports CPUs, GPUs, and TPUs for distributed training of massive models',
            'Keras provides high-level API for rapid prototyping and model development',
            'TensorFlow Lite enables deploying models on mobile and edge devices',
            'TensorFlow.js enables running models in browsers without server',
            'TensorFlow Serving enables low-latency model serving in production',
            'Large ecosystem with pre-trained models and extensive documentation',
        ],
        faqs: [
            {
                question: 'What is TensorFlow and why use it?',
                answer:
                    'TensorFlow is Google\'s open-source machine learning framework for building and training neural networks. It\'s chosen for flexibility, scalability, extensive ecosystem, and production-grade capabilities.',
            },
            {
                question: 'Can TensorFlow handle large datasets?',
                answer:
                    'Yes. TensorFlow supports distributed training across multiple GPUs and TPUs. TensorFlow Data pipeline efficiently processes massive datasets with parallel processing.',
            },
            {
                question: 'What\'s the difference between TensorFlow and PyTorch?',
                answer:
                    'TensorFlow is more production-focused with better deployment tools. PyTorch is more research-friendly with easier debugging. Both are excellent frameworks; choice depends on team preference and production requirements.',
            },
            {
                question: 'Can we deploy TensorFlow models on mobile devices?',
                answer:
                    'Yes, using TensorFlow Lite. TensorFlow Lite models are optimized for mobile and edge devices with minimal size and latency.',
            },
            {
                question: 'How do we monitor TensorFlow models in production?',
                answer:
                    'Using TensorFlow Model Analysis, Weights & Biases, or custom monitoring. Monitor model performance, data drift, and prediction quality to detect issues.',
            },
            {
                question: 'Can we run TensorFlow models in browsers?',
                answer:
                    'Yes, using TensorFlow.js. You can run pre-trained models directly in browsers without server, enabling real-time inference.',
            },
            {
                question: 'How long does TensorFlow model development take?',
                answer:
                    'Timeline depends on complexity and data availability. Simple models: 2-4 weeks. Complex models: 2-3 months. Production deployment adds time for optimization and monitoring.',
            },
        ],
        caseStudies: [
            {
                title: 'Large-Scale Image Recognition',
                description:
                    'Built computer vision system processing 100M+ images daily using ResNet and TensorFlow, achieving 99.2% accuracy.',
                link: '#',
            },
            {
                title: 'Real-Time Object Detection',
                description:
                    'Developed YOLO-based object detection model with TensorFlow serving on edge devices for real-time detection.',
                link: '#',
            },
            {
                title: 'Natural Language Processing Pipeline',
                description:
                    'Built BERT-based NLP pipeline for text classification, reaching 96% accuracy on custom datasets.',
                link: '#',
            },
        ],
        relatedTechs: [
            'Python',
            'PyTorch',
            'Keras',
            'Docker',
            'Kubernetes',
            'Data Engineering',
            'AI/Machine Learning',
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
