// ====================================
// 论文数据配置
// ====================================
// 在这里添加、修改或删除论文，页面会自动更新
// This is mater
// This is mater
const papersData = [
    {
        title: "BiBLDR: Bidirectional Behavior Learning for Drug Repositioning",
        authors: [
            { name: "Renye Zhang", isCorresponding: false, isFirstAuthor: false },
            { name: "Mengyun Yang", isCorresponding: true, isFirstAuthor: false },
            { name: "Qichang Zhao", isCorresponding: false, isFirstAuthor: false },
            { name: "Jianxin Wang", isCorresponding: false, isFirstAuthor: false }
        ],
        journal: "IEEE Journal of Biomedical and Health Informatics",
        date: "2025",
        level: { text: "中科院一区Top", color: "purple" },
        tags: ["Deep learning", "Drug repositioning"],
        links: [
            { icon: "📄", text: "PDF", url: "#" },
            { icon: "💻", text: "Code", url: "#" }
        ],
        image: "Res/Paper/JBHI2025/abstract.png"
    },
    {
        title: "Artificial neural networks for finger vein recognition: a survey",
        authors: [
            { name: "Yimin Yin", isCorresponding: false, isFirstAuthor: true },
            { name: "Renye Zhang", isCorresponding: false, isFirstAuthor: true },
            { name: "Pengfei Liu", isCorresponding: false, isFirstAuthor: false },
            { name: "Wanxia Deng", isCorresponding: false, isFirstAuthor: false },
            { name: "Dayu Hu", isCorresponding: false, isFirstAuthor: false },
            { name: "Siliang He", isCorresponding: false, isFirstAuthor: false },
            { name: "Chen Li", isCorresponding: false, isFirstAuthor: false },
            { name: "Jinghua Zhang", isCorresponding: true, isFirstAuthor: false }
        ],
        journal: "Engineering Applications of Artificial Intelligence",
        date: "2022",
        level: { text: "中科院一区Top", color: "purple" },
        tags: ["Finger vein recognition", "Artificial neural networks"],
        links: [
            { icon: "📄", text: "PDF", url: "#" },
            { icon: "💻", text: "Code", url: "#" }
        ],
        image: "Res/Paper/EAAI2025/abstract.png"
    },
    {
        title: "Partitioned Memory Storage Inspired Few-Shot Class-Incremental learning",
        authors: [
            { name: "Renye Zhang", isCorresponding: false, isFirstAuthor: false },
            { name: "Yimin Yin", isCorresponding: false, isFirstAuthor: false },
            { name: "Jinghua Zhang", isCorresponding: true, isFirstAuthor: false }
        ],
        journal: "Under review",
        date: "2024",
        level: { text: "Under review", color: "blue" },
        tags: ["Deep learning", "Few-Shot Class-Incremental learning"],
        links: [
            { icon: "📄", text: "PDF", url: "#" },
            { icon: "💻", text: "Code", url: "#" }
        ],
        image: "Res/Paper/arXiv2025/abstract.png"
    },
    {
        title: "A Novel Sample Selection for Deep Learning Model in Computational Drug Repositioning",
        authors: [
            { name: "Jiajun Chen", isCorresponding: false, isFirstAuthor: true },
            { name: "Renye Zhang", isCorresponding: false, isFirstAuthor: true },
            { name: "Bin Yang", isCorresponding: false, isFirstAuthor: false },
            { name: "Mengyun Yang", isCorresponding: true, isFirstAuthor: false }
        ],
        journal: "International Symposium on Bioinformatics Research and Applications",
        date: "2025",
        level: { text: "CCF推荐C类", color: "purple" },
        tags: ["Deep learning", "Drug repositioning"],
        links: [
            { icon: "📄", text: "PDF", url: "#" },
            { icon: "💻", text: "Code", url: "#" }
        ],
        image: "Res/Paper/ISBRA2025/abstract.png"
    },
    {
        title: "Classification of pothole pavement based on pseudo-sample generation augmentation",
        authors: [
            { name: "Renye Zhang", isCorresponding: false, isFirstAuthor: false },
            { name: "Huihan Wang", isCorresponding: false, isFirstAuthor: false },
            { name: "Sihang Xu", isCorresponding: false, isFirstAuthor: false },
            { name: "Bin Yang", isCorresponding: false, isFirstAuthor: false },
            { name: "Mengyun Yang", isCorresponding: true, isFirstAuthor: false }
        ],
        journal: "International Conference on Information Systems and Computing Technology",
        date: "2024",
        level: { text: "EI", color: "purple" },
        tags: ["Deep learning", "Computer vision"],
        links: [
            { icon: "📄", text: "PDF", url: "#" },
            { icon: "💻", text: "Code", url: "#" }
        ],
        image: "Res/Paper/ISCTech2024/abstract.png"
    }
];

// ====================================
// 竞赛成果数据配置
// ====================================
// 在这里添加、修改或删除竞赛成果，页面会自动更新
const competitionsData = [
    {
        title: "全国大学生数学建模竞赛",
        award: "一等奖",
        awardColor: "yellow", // yellow, gray, red
        date: "2024年9月",
        description: "项目描述:使用数据分析和优化算法解决实际问题，获得优异成绩...",
        tags: ["数据分析", "算法优化"]
    },
    {
        title: "ACM国际大学生程序设计竞赛",
        award: "银奖",
        awardColor: "gray",
        date: "2024年5月",
        description: "项目描述：团队协作解决算法难题，展现优秀的编程能力和团队配合...",
        tags: ["算法", "C++"]
    },
];

// ====================================
// 博客数据配置
// ====================================
// 在这里添加、修改或删除博客文章，页面会自动更新
const blogsData = [
    {
        title: "深入理解 React Hooks 原理",
        category: "前端开发",
        categoryColor: "purple", // purple, indigo, pink, blue
        icon: "📝",
        gradientFrom: "purple-400",
        gradientTo: "indigo-500",
        date: "2024-01-15",
        description: "本文深入探讨 React Hooks 的实现原理，包括 useState、useEffect 等常用 Hooks 的底层机制...",
        link: "#"
    },
    {
        title: "前端性能优化实战指南",
        category: "性能优化",
        categoryColor: "indigo",
        icon: "🚀",
        gradientFrom: "indigo-400",
        gradientTo: "purple-500",
        date: "2024-01-10",
        description: "从代码分割、懒加载到缓存策略，全面介绍前端性能优化的各种技巧和最佳实践...",
        link: "#"
    },
    {
        title: "JavaScript 设计模式详解",
        category: "设计模式",
        categoryColor: "pink",
        icon: "💡",
        gradientFrom: "pink-400",
        gradientTo: "purple-500",
        date: "2024-01-05",
        description: "介绍常用的 JavaScript 设计模式，包括单例模式、观察者模式、工厂模式等...",
        link: "#"
    },
    {
        title: "现代前端工具链完全指南",
        category: "工具链",
        categoryColor: "blue",
        icon: "🔧",
        gradientFrom: "blue-400",
        gradientTo: "indigo-500",
        date: "2023-12-28",
        description: "从包管理器到构建工具，全面了解现代前端开发的工具链生态...",
        link: "#"
    }
];

// ====================================
// 小说作品数据配置
// ====================================
// 在这里添加、修改或删除小说，页面会自动更新
const novelsData = [
    {
        title: "收藏云朵",
        category: "短篇小说",
        wordCount: "10190字",
        description: "我是在火星第237个任务日失踪的。沙尘暴来得毫无征兆,就像一堵赤红色的墙突然从地平线升起...",
        tags: ["科幻"],
        link: "#",
        file: "Res/Novel/短篇/收藏云朵.txt"
    },
    {
        title: "记忆的死罪",
        category: "短篇小说",
        wordCount: "24153字",
        description: "刑警成默公发现自己的记忆似乎被篡改，随着真相逐渐揭露，他必须面对内心最深的恐惧...",
        tags: ["科幻", "悬疑"],
        link: "#",
        file: "Res/Novel/短篇/记忆的死罪.txt"
    },
    {
        title: "母亲的拼图",
        category: "短篇小说",
        wordCount: "约15000字",
        description: "一个关于亲情、回忆与和解的温情故事，讲述了女儿在整理母亲遗物时，通过拼凑记忆碎片，重新理解母爱的深沉...",
        tags: ["现实情感"],
        link: "#",
        file: "Res/Novel/短篇/母亲的拼图.txt"
    },
    {
        title: "浮生若梦",
        category: "长篇小说",
        wordCount: "35万字",
        description: "一部横跨三代人的家族史诗，通过一个家族的兴衰沉浮，展现时代变迁中普通人的命运与选择...",
        tags: ["现实主义", "家族史", "时代变迁"],
        link: "#",
        coverImage: "https://picsum.photos/seed/novel1/400/600"
    },
    {
        title: "春江花月夜",
        category: "诗歌",
        wordCount: "诗集20首",
        description: "一组现代诗歌作品，以四季更迭为主题，用细腻的笔触描绘自然之美与人生感悟...",
        tags: ["现代诗", "自然", "抒情"],
        link: "#"
    },
    {
        title: "归途",
        category: "中长篇小说",
        wordCount: "18万字",
        description: "一个关于回归与寻找的故事，主人公在经历人生低谷后，踏上了寻找自我的旅程...",
        tags: ["成长", "治愈", "公路"],
        link: "#"
    },
    {
        title: "月下独酌",
        category: "诗歌",
        wordCount: "诗集15首",
        description: "以月亮为意象的系列诗歌，探讨孤独、思念与内心世界...",
        tags: ["现代诗", "哲思", "夜"],
        link: "#"
    }
];

// ====================================
// 渲染竞赛成果
// ====================================
function renderCompetitions() {
    const container = document.getElementById('competitionsContainer');
    if (!container) return;

    // 奖项颜色映射
    const awardColors = {
        yellow: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
        gray: { bg: 'bg-gray-100', text: 'text-gray-800' },
        red: { bg: 'bg-red-100', text: 'text-red-800' }
    };

    // 生成HTML
    container.innerHTML = competitionsData.map((competition, index) => {
        const colors = awardColors[competition.awardColor] || awardColors.gray;

        // 生成标签
        const tagsHTML = competition.tags.map(tag =>
            `<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">${tag}</span>`
        ).join('');

        return `
            <div class="relative pl-8 border-l-2 border-purple-200">
                <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600"></div>
                <div class="card bg-white rounded-lg shadow-md p-6 mb-6 fade-in-up" style="animation-delay: ${index * 0.1}s;">
                    <div class="flex items-start justify-between mb-3">
                        <h3 class="text-xl font-semibold text-gray-800">${competition.title}</h3>
                        <span class="px-3 py-1 ${colors.bg} ${colors.text} text-sm font-medium rounded-full">${competition.award}</span>
                    </div>
                    <p class="text-sm text-gray-500 mb-3">${competition.date}</p>
                    <p class="text-gray-600 mb-4">${competition.description}</p>
                    <div class="flex flex-wrap gap-2">
                        ${tagsHTML}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ====================================
// 渲染博客文章
// ====================================
function renderBlogs() {
    const container = document.getElementById('blogsContainer');
    if (!container) return;

    // 分类颜色映射
    const categoryColors = {
        purple: { bg: 'bg-purple-100', text: 'text-purple-700' },
        indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700' },
        pink: { bg: 'bg-pink-100', text: 'text-pink-700' },
        blue: { bg: 'bg-blue-100', text: 'text-blue-700' }
    };

    // 生成HTML
    container.innerHTML = blogsData.map((blog, index) => {
        const colors = categoryColors[blog.categoryColor] || categoryColors.purple;

        return `
            <div class="card bg-white rounded-lg shadow-md overflow-hidden fade-in-up" style="animation-delay: ${index * 0.1}s;">
                <div class="h-48 bg-gradient-to-br from-${blog.gradientFrom} to-${blog.gradientTo} flex items-center justify-center">
                    <span class="text-white text-6xl">${blog.icon}</span>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="px-3 py-1 ${colors.bg} ${colors.text} text-xs rounded-full">${blog.category}</span>
                        <span class="text-gray-400 text-sm">${blog.date}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">${blog.title}</h3>
                    <p class="text-gray-600 mb-4">${blog.description}</p>
                    <a href="${blog.link}" class="text-purple-600 hover:text-purple-800 font-medium">阅读更多 →</a>
                </div>
            </div>
        `;
    }).join('');
}

// ====================================
// 渲染小说卡片
// ====================================
function renderNovels() {
    const container = document.getElementById('novelsContainer');
    if (!container) return;

    // 按类别分组
    const categories = {
        '短篇小说': [],
        '中长篇小说': [],
        '长篇小说': [],
        '诗歌': []
    };

    novelsData.forEach(novel => {
        if (categories[novel.category]) {
            categories[novel.category].push(novel);
        }
    });

    // 类别颜色映射
    const categoryColors = {
        '短篇小说': { bg: 'bg-purple-50', border: 'border-purple-200', title: 'text-purple-600', icon: '📝' },
        '中长篇小说': { bg: 'bg-indigo-50', border: 'border-indigo-200', title: 'text-indigo-600', icon: '📕' },
        '长篇小说': { bg: 'bg-blue-50', border: 'border-blue-200', title: 'text-blue-600', icon: '📘' },
        '诗歌': { bg: 'bg-pink-50', border: 'border-pink-200', title: 'text-pink-600', icon: '🌸' }
    };

    // 生成HTML
    let html = '';
    Object.keys(categories).forEach((category, catIndex) => {
        const novels = categories[category];
        if (novels.length === 0) return;

        const colors = categoryColors[category];
        html += `
            <div class="mb-12 fade-in-up" style="animation-delay: ${catIndex * 0.1}s;">
                <h3 class="text-2xl font-bold ${colors.title} mb-6 flex items-center gap-2">
                    <span class="text-3xl">${colors.icon}</span>
                    ${category}
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        `;

        novels.forEach((novel, index) => {
            // 长篇小说的特殊展示方式
            if (category === '长篇小说' && novel.coverImage) {
                html += `
                    <a href="${novel.link}" class="block fade-in-up" style="animation-delay: ${(catIndex * 0.1 + index * 0.05)}s;">
                        <img src="${novel.coverImage}" alt="${novel.title}" class="w-48 h-64 object-cover shadow-sm mx-auto block mb-2">
                        <h4 class="text-center text-lg font-medium text-gray-800">${novel.title}</h4>
                    </a>
                `;
            } else {
                // 其他类型小说的原始展示方式
                const tagsHTML = novel.tags.map(tag =>
                    `<span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">${tag}</span>`
                ).join('');

                html += `
                    <div class="card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg fade-in-up" style="animation-delay: ${(catIndex * 0.1 + index * 0.05)}s;">
                        <div class="h-2 gradient-bg"></div>
                        <div class="p-6">
                            <!-- 标题和信息 -->
                            <div class="mb-3">
                                <h4 class="text-xl font-semibold text-gray-800 mb-2">${novel.title}</h4>
                                <div class="flex items-center gap-3 text-sm text-gray-500">
                                    <span>${novel.wordCount}</span>
                                </div>
                            </div>

                            <!-- 简介 -->
                            <p class="text-gray-600 mb-4 leading-relaxed">
                                ${novel.description}
                            </p>

                            <!-- 底部标签和链接 -->
                            <div class="flex items-center justify-between flex-wrap gap-3">
                                <div class="flex flex-wrap gap-2">
                                    ${tagsHTML}
                                </div>
                                <button onclick="showNovelContent('${novel.title}', '${novel.file ? novel.file : ''}')" class="text-purple-600 hover:text-purple-800 font-medium text-sm flex items-center gap-1">
                                阅读 →
                            </button>
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        html += `
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ====================================
// 渲染论文卡片
// ====================================
function renderPapers() {
    const container = document.getElementById('papersContainer');
    if (!container) return;

    // 颜色映射
    const colorMap = {
        purple: { bg: 'bg-purple-100', text: 'text-purple-700', tagBg: 'bg-purple-50', tagText: 'text-purple-600' },
        yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', tagBg: 'bg-purple-50', tagText: 'text-purple-600' },
        green: { bg: 'bg-green-100', text: 'text-green-700', tagBg: 'bg-purple-50', tagText: 'text-purple-600' },
        blue: { bg: 'bg-blue-100', text: 'text-blue-700', tagBg: 'bg-purple-50', tagText: 'text-purple-600' }
    };

    // 生成HTML
    container.innerHTML = papersData.map((paper, index) => {
        const colors = colorMap[paper.level.color] || colorMap.purple;

        // 生成作者列表
        const authorsHTML = paper.authors.map(author => {
            // 构建标记
            let marks = '';
            if (author.isCorresponding) marks += '*';
            if (author.isFirstAuthor) marks += '#';

            // 判断是否为 Renye Zhang（深色突出显示）
            const isRenyeZhang = author.name === 'Renye Zhang';
            const classes = isRenyeZhang
                ? 'font-medium text-purple-600'
                : 'text-gray-600';

            return `<span class="${classes}">${author.name}${marks}</span>`;
        }).join(', ');

        // 生成标签
        const tagsHTML = paper.tags.map((tag, i) => {
            const tagColors = [
                { bg: 'bg-purple-50', text: 'text-purple-600' },
                { bg: 'bg-indigo-50', text: 'text-indigo-600' },
                { bg: 'bg-blue-50', text: 'text-blue-600' },
                { bg: 'bg-pink-50', text: 'text-pink-600' },
                { bg: 'bg-green-50', text: 'text-green-600' }
            ];
            const color = tagColors[i % tagColors.length];
            return `<span class="px-3 py-1 ${color.bg} ${color.text} text-xs rounded-full">${tag}</span>`;
        }).join('');

        // 生成链接
        const linksHTML = paper.links.map(link =>
            `<a href="${link.url}" class="text-purple-600 hover:text-purple-800 font-medium text-sm">
                ${link.text}
            </a>`
        ).join('');

        return `
            <div class="bg-white overflow-hidden fade-in-up" style="animation-delay: ${index * 0.1}s;">
                <div class="flex flex-col md:flex-row items-center">
                    <!-- 论文代表性图片 -->
                    <div class="md:w-1/2 p-4 flex-shrink-0">
                        <img src="${paper.image}" alt="${paper.title}" class="w-full object-contain bg-white shadow-xl">
                    </div>
                    
                    <!-- 论文内容 -->
                    <div class="p-6 md:w-1/2">
                        <!-- 标题和标签 -->
                        <div class="flex items-start justify-between mb-3">
                            <h3 class="text-xl font-semibold text-gray-800 flex-1">
                                ${paper.title}
                            </h3>
                            <span class="px-3 py-1 ${colors.bg} ${colors.text} text-sm font-medium rounded-lg ml-4 whitespace-nowrap">${paper.level.text}</span>
                        </div>

                        <!-- 期刊和时间 -->
                        <div class="mb-3">
                            <p class="text-base text-gray-600">
                                <span class="font-medium">${paper.journal}</span>
                                <span class="mx-2">•</span>
                                <span>${paper.date}</span>
                            </p>
                        </div>

                        <!-- 作者 -->
                        <div class="mb-4">
                            <p class="text-sm text-gray-700">
                                ${authorsHTML}
                            </p>
                        </div>

                        <!-- 底部标签和链接 -->
                        <div class="flex items-center justify-between flex-wrap gap-3">
                            <div class="flex flex-wrap gap-2">
                                ${tagsHTML}
                            </div>
                            <div class="flex gap-4">
                                ${linksHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ====================================
// 页面加载完成后执行
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航按钮和内容区域
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');
    const navIndicator = document.getElementById('navIndicator');

    // 生成论文卡片
    renderPapers();

    // 生成小说卡片
    renderNovels();

    // 生成竞赛成果
    renderCompetitions();

    // 生成博客文章
    renderBlogs();

    // 初始化导航指示器位置
    function initNavIndicator() {
        const activeTab = document.querySelector('.nav-tab.active');
        if (activeTab) {
            updateNavIndicator(activeTab);
        }
    }

    // 更新导航指示器位置
    function updateNavIndicator(tab) {
        const tabRect = tab.getBoundingClientRect();
        const navTabsRect = document.getElementById('navTabs').getBoundingClientRect();
        const left = tabRect.left - navTabsRect.left;
        const width = tabRect.width;

        navIndicator.style.width = width + 'px';
        navIndicator.style.left = (navTabsRect.left - navIndicator.parentElement.getBoundingClientRect().left + left) + 'px';
    }

    // 切换内容区域
    function switchTab(tabName) {
        // 隐藏所有内容区域
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // 显示选中的内容区域
        const targetSection = document.getElementById(tabName);
        if (targetSection) {
            targetSection.classList.add('active');

            // 为卡片添加动画延迟
            const cards = targetSection.querySelectorAll('.card, .fade-in-up');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.animation = 'none';

                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
                }, 10);
            });
        }

        // 更新导航按钮状态
        navTabs.forEach(tab => {
            if (tab.dataset.tab === tabName) {
                tab.classList.add('active');
                tab.style.color = '#7c3aed'; // purple-600
                updateNavIndicator(tab);
            } else {
                tab.classList.remove('active');
                tab.style.color = '#374151'; // gray-700
            }
        });

        // 滚动到页面顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 为每个导航按钮添加点击事件
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });

        // 鼠标悬停效果
        tab.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '#7c3aed'; // purple-600
            }
        });

        tab.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '#374151'; // gray-700
            }
        });
    });

    // 初始化导航指示器
    initNavIndicator();

    // 响应式处理：窗口大小改变时更新指示器位置
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const activeTab = document.querySelector('.nav-tab.active');
            if (activeTab) {
                updateNavIndicator(activeTab);
            }
        }, 100);
    });

    // 为所有链接添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 添加滚动时的导航栏阴影效果
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 10) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
        }

        lastScroll = currentScroll;
    });

    // 为卡片添加视差滚动效果（可选）
    const cards = document.querySelectorAll('.card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    // 键盘快捷键支持
    document.addEventListener('keydown', function(e) {
        // Alt + 数字键切换标签
        if (e.altKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    switchTab('papers');
                    break;
                case '2':
                    e.preventDefault();
                    switchTab('novels');
                    break;
                case '3':
                    e.preventDefault();
                    switchTab('competitions');
                    break;
                case '4':
                    e.preventDefault();
                    switchTab('blog');
                    break;
            }
        }
    });

    // 添加页面加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    console.log('✨ 博客加载完成！提示：使用 Alt+1/2/3/4 快速切换标签页');
});

// ====================================
// 显示小说内容
// ====================================
function showNovelContent(title, filePath) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            <!-- 模态框头部 -->
            <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 class="text-2xl font-bold text-gray-800">${title}</h3>
                <div class="flex items-center space-x-4">
                    <!-- 字体大小调节按钮 -->
                    <div class="flex items-center bg-gray-100 rounded-lg p-1 shadow-sm">
                        <button id="decreaseFontBtn" class="w-10 h-10 rounded-md bg-white text-gray-700 font-bold hover:bg-gray-200 transition-colors flex items-center justify-center border border-gray-200">
                            A−
                        </button>
                        <button id="increaseFontBtn" class="w-10 h-10 rounded-md bg-white text-gray-700 font-bold hover:bg-gray-200 transition-colors flex items-center justify-center border border-gray-200">
                            A+
                        </button>
                    </div>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700 text-2xl">
                        ×
                    </button>
                </div>
            </div>
            <!-- 模态框内容 -->
            <div class="p-6 overflow-y-auto flex-grow">
                <div id="novelContent" class="max-w-none" style="font-family: SimHei, STHeiti, 'Microsoft YaHei', sans-serif; font-size: 16px;">
                    ${filePath ? '<div class="text-center text-gray-500 py-12"><div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-purple-600"></div><p class="mt-4">加载中...</p></div>' : '暂无内容'}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 加载小说内容
    if (filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(text => {
                const contentElement = modal.querySelector('#novelContent');
                // 将文本转换为HTML格式（段落和换行）
                // 先处理不同格式的换行符，统一转换为\n
                const normalizedText = text.replace(/\r\n/g, '\n'); // 将Windows换行符转换为Unix换行符
                // 按单换行符分割段落（每行作为一个段落）
                const paragraphs = normalizedText.split(/\n/);
                // 过滤空段落并去除首尾空白
                const formattedParagraphs = paragraphs.map(para => {
                    return para.trim(); // 去除首尾空白
                }).filter(para => para !== ''); // 过滤空段落
                // 重新组合成HTML，每个段落用独立的<p>标签包裹
                const formattedContent = formattedParagraphs.join('</p><p>');
                // 确保即使没有内容也有一个空的p标签或提示信息
                contentElement.innerHTML = formattedParagraphs.length > 0 ? `<p>${formattedContent}</p>` : '<p>暂无内容</p>';
            })
            .catch(error => {
                console.error('加载小说内容失败:', error);
                modal.querySelector('#novelContent').innerHTML = '<div class="text-center text-red-500 py-12"><p>加载失败，请稍后重试</p></div>';
            });
    }
    
    // 点击模态框背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    // 字体大小调节功能
    const novelContent = modal.querySelector('#novelContent');
    let currentFontSize = 16; // 初始字体大小为16px
    
    // 减少字体大小
    modal.querySelector('#decreaseFontBtn').addEventListener('click', () => {
        if (currentFontSize > 12) { // 设置最小字体大小为12px
            currentFontSize -= 1;
            novelContent.style.fontSize = `${currentFontSize}px`;
        }
    });
    
    // 增加字体大小
    modal.querySelector('#increaseFontBtn').addEventListener('click', () => {
        if (currentFontSize < 24) { // 设置最大字体大小为24px
            currentFontSize += 1;
            novelContent.style.fontSize = `${currentFontSize}px`;
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', handleEscClose);
    function handleEscClose(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', handleEscClose);
        }
    }
}
